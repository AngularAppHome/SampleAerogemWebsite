import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { DescriptionComponent } from './description/description.component';
import { BranchlocationComponent } from './branchlocation/branchlocation.component';
import { InformationComponent } from './information/information.component';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    DescriptionComponent,
    BranchlocationComponent,
    InformationComponent,
    MoreinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
