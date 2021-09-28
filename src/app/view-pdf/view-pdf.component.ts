import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ViewPdfService } from '../service/viewPdf/view-pdf.service';

@Component({
  selector: 'app-view-pdf',
  templateUrl: './view-pdf.component.html',
  styleUrls: ['./view-pdf.component.css']
})
export class ViewPdfComponent implements OnInit {
  @ViewChild('externalPdfViewer') public externalPdfViewer: any;
  @Input('id') id: string ='';
  constructor(private viewFile : ViewPdfService, private httpClient: HttpClient) {
  }
  ngOnInit() {
    this.getFile();
  }

  // id: string ='604657f9-149a-4c3c-9e89-08d96b6063f5'
  getFile(): any{
    return this.viewFile.getCategoryActionById(this.id).subscribe((response) => {
      this.externalPdfViewer.pdfSrc = response;
      this.externalPdfViewer.refresh();
    });
  }

}
