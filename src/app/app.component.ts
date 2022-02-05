import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private fileTmp: any;

  constructor(_api: ApiService){

  }

  onChangeFile(event: any): void {
    const [ file ] = event.target.files;
    this.fileTmp = {
      fileRow: file,
      fileName: file.name
    }
  }

  onSendFile(): void {

  }

}
