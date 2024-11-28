import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFAQService, FAQItem } from './dataFAQ.service';
@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent implements OnInit {
  dataFAQ: FAQItem[] = [];

  constructor(private dataService: DataFAQService) {}

  ngOnInit(): void {
    this.dataFAQ = this.dataService.getData();
  }
  toggleDetails(detail: HTMLDetailsElement, event: Event): void {
    event.preventDefault();
    detail.open = !detail.open;
  }
}
