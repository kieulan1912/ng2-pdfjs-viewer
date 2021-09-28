import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewPdfService } from './service/viewPdf/view-pdf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  id: string ='604657f9-149a-4c3c-9e89-08d96b6063f5'
  constructor(private viewFile : ViewPdfService, private httpClient: HttpClient) {
  }
  ngOnInit() {
  }

}


