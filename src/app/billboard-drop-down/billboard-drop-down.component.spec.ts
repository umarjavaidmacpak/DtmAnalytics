import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardDropDownComponent } from './billboard-drop-down.component';

describe('BillboardDropDownComponent', () => {
  let component: BillboardDropDownComponent;
  let fixture: ComponentFixture<BillboardDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillboardDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
