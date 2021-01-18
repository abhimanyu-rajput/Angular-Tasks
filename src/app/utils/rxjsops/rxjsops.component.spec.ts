import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsopsComponent } from './rxjsops.component';

describe('RxjsopsComponent', () => {
  let component: RxjsopsComponent;
  let fixture: ComponentFixture<RxjsopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
