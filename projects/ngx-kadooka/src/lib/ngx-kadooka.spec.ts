import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxKadooka } from './ngx-kadooka';

describe('NgxKadooka', () => {
  let component: NgxKadooka;
  let fixture: ComponentFixture<NgxKadooka>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxKadooka]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxKadooka);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
