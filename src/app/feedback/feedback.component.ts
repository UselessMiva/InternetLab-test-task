import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { DataFeedbackService, FeedbackItem } from './dataFeedback.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  dataFeedback: FeedbackItem[] = [];
  currentIndex: number = 0;
  itemsPerPage: number = 3;

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  constructor(private dataFeedbackService: DataFeedbackService) {}

  ngOnInit(): void {
    this.dataFeedback = this.dataFeedbackService.getData();
    this.updateItemsPerPage(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateItemsPerPage(event.target.innerWidth);
  }

  updateItemsPerPage(width: number) {
    if (width < 565) {
      this.itemsPerPage = 1;
    } else if (width < 910) {
      this.itemsPerPage = 2;
    } else {
      this.itemsPerPage = 3;
    }
    this.currentIndex =
      Math.floor(this.currentIndex / this.itemsPerPage) * this.itemsPerPage;
  }

  nextSlide() {
    if (this.currentIndex < this.dataFeedback.length - 1) {
      this.currentIndex += 1;
    } else {
      this.currentIndex = 0;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.dataFeedback.length - 1;
    }
  }
  get visibleSlides(): FeedbackItem[] {
    const total = this.dataFeedback.length;
    if (total <= this.itemsPerPage) {
      return this.dataFeedback;
    }

    let slides = [];
    for (let i = 0; i < this.itemsPerPage; i++) {
      const index = (this.currentIndex + i) % total;
      slides.push(this.dataFeedback[index]);
    }
    return slides;
  }
  get totalComments(): number {
    return this.dataFeedback.length;
  }
  get totalPages(): number {
    return Math.ceil(this.totalComments);
  }
}
