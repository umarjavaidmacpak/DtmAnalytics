import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDropDownComponent } from './campaign-drop-down.component';

describe('CampaignDropDownComponent', () => {
  let component: CampaignDropDownComponent;
  let fixture: ComponentFixture<CampaignDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
