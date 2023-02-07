import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SejaApoiadorComponent } from './seja-apoiador.component';

describe('SejaApoiadorComponent', () => {
  let component: SejaApoiadorComponent;
  let fixture: ComponentFixture<SejaApoiadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SejaApoiadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SejaApoiadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
