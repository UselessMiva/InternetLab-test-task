import { Component } from '@angular/core';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ThirdBlockComponent } from './thirdBlock/thirdBlock.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FaqComponent } from './faq/faq.component';
import { InfoComponent } from './info/info.component';
import { FormBlockComponent } from './formBlock/formBlock.component';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [
    HeadComponent,
    FooterComponent,
    AboutComponent,
    ThirdBlockComponent,
    FeedbackComponent,
    FaqComponent,
    InfoComponent,
    FormBlockComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
