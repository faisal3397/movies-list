import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangBtnsComponent } from './lang-btns.component';

describe('LangBtnsComponent', () => {
  let component: LangBtnsComponent;
  let fixture: ComponentFixture<LangBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
