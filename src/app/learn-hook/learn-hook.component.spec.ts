import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnHookComponent } from './learn-hook.component';

describe('LearnHookComponent', () => {
  let component: LearnHookComponent;
  let fixture: ComponentFixture<LearnHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnHookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
