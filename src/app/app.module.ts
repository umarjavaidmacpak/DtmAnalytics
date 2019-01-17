import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonControlPanelComponent } from './button-control-panel/button-control-panel.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { GroupDropDownComponent } from './group-drop-down/group-drop-down.component';
import { CampaignDropDownComponent } from './campaign-drop-down/campaign-drop-down.component';
import { BillboardDropDownComponent } from './billboard-drop-down/billboard-drop-down.component';
import { AgencyDropDownComponent } from './agency-drop-down/agency-drop-down.component';







@NgModule({
  declarations: [
    AppComponent,
    ButtonControlPanelComponent,
    GroupDropDownComponent,
    CampaignDropDownComponent,
    BillboardDropDownComponent,
    AgencyDropDownComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    InputsModule,
    GridModule,
    DropDownsModule,
    DateInputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
