import { Component } from '@angular/core';

import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  pdfSrc = './assets/Plataformas.pdf';
  nome = 'Luis';
  page = 1;
  mostrarTudo = false;
  rotation = 0;

  constructor() {

  }

  selecionarArquivo() {
    const $pdf: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer($pdf.files[0]);
    }
  }

  avancarPag() {
    this.page++;
  }

  voltarPag() {
    this.page--;
  }

  rotate(angle: number) {
    this.rotation += angle;
  }

}
