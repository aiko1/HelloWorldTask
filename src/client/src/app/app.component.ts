import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { Content } from './content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private content: Content;

  constructor(private _service: ClientService) { }
  
  ngOnInit(): void {
    this.getContent();
  }

  getContent(): void {
    this._service.getContent().subscribe((content) => {
      this.content = content;
    });
  }
}