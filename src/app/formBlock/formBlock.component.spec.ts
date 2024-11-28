import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlockComponent } from './formBlock.component';

describe('FormBlockComponent', () => {
  let component: FormBlockComponent;
  let fixture: ComponentFixture<FormBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
