import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInputDemoComponent } from './login-input-demo.component';

describe('LoginInputDemoComponent', () => {
  let component: LoginInputDemoComponent;
  let fixture: ComponentFixture<LoginInputDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginInputDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginInputDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
