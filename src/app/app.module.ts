import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { HttpClientModule } from '@angular/common/http';
import { ViewPdfComponent } from './view-pdf/view-pdf.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewPdfComponent,
  ],
  imports: [
    BrowserModule,
    PdfJsViewerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
