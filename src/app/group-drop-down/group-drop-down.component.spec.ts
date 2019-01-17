import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDropDownComponent } from './group-drop-down.component';

describe('GroupDropDownComponent', () => {
  let component: GroupDropDownComponent;
  let fixture: ComponentFixture<GroupDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
