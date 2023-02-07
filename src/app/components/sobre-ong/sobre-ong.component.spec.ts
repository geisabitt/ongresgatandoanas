import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreOngComponent } from './sobre-ong.component';

describe('SobreOngComponent', () => {
  let component: SobreOngComponent;
  let fixture: ComponentFixture<SobreOngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreOngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreOngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
