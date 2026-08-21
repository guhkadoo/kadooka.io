import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface TranslationResponse {
    language: string;
    translations: Record<string, string>;
}

@Injectable({
    providedIn: 'root'
})
export class TranslationService {

    private readonly translationsSignal = signal<Record<string, string>>({});
    private readonly currentLanguage = signal('pt');
    private readonly cache: Record<string, Record<string, string>> = {};

    constructor(private http: HttpClient) {}

    loadLanguage(language: string) {
        if (this.cache[language]) {
            this.applyLanguage(language, this.cache[language]);
            return;
        }

        this.http.get<TranslationResponse>(`${environment.apiUrl}/i18n/?lang=${language}`).subscribe(response => {
            this.cache[language] = response.translations;
            this.applyLanguage(language, response.translations);
        });
    }

    translate(key: string): string {
        return this.translationsSignal()[key];
    }

    getCurrentLanguage(): string {
        return this.currentLanguage();
    }

    private applyLanguage(language: string, translations: Record<string, string>) {
        this.translationsSignal.set(translations);
        this.currentLanguage.set(language);
        localStorage.setItem('language', language);
    }
}