import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private fileTmp: any;

  constructor(private _api: ApiService){

  }

  onChangeFile(event: any): void {
    const [ file ] = event.target.files;
    this.fileTmp = {
      fileRow: file,
      fileName: file.name
    }
  }

  onSendFile(): void {

    const body = new FormData();
    body.append("myFile", this.fileTmp.fileRow, this.fileTmp.fileName);

    this._api.SendApiFile(body).subscribe(res => console.log(res));

  }

}
