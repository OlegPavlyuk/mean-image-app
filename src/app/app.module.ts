import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImageCenterComponent } from './image-center/image-center.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageCenterComponent,
    ImageListComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
