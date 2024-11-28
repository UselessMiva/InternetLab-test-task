import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdBlockComponent } from './thirdBlock.component';

describe('ThirdBlockComponent', () => {
  let component: ThirdBlockComponent;
  let fixture: ComponentFixture<ThirdBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThirdBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
