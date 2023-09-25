import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TrashComponent } from './trash/trash.component';
import { SearchPipe } from './search.pipe';
import { SearchbywordPipe } from './searchbyword.pipe';
import { FormsModule } from '@angular/forms';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    TrashComponent,
    SearchPipe,
    SearchbywordPipe,
    DetailsPageComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    NgxImageZoomModule, 
  ],
  
  providers: [SearchPipe, SearchbywordPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
