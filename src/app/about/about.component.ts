import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAboutService, AboutItem } from './dataAbout.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  dataAbout: AboutItem[] = [];

  constructor(private dataService: DataAboutService) {}

  ngOnInit(): void {
    this.dataAbout = this.dataService.getData();
  }
}
