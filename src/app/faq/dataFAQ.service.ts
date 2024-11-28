import { Injectable } from '@angular/core';
export interface FAQItem {
  id: number;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataFAQService {
  private content =
    'В частности, дальнейшее развитие различных форм ' +
    'деятельности позволяет выполнить важные задания по разработке дальнейших направлений ' +
    'развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего ' +
    'дня говорит о возможностях существующих финансовых и административных условий.';
  private data: FAQItem[] = [
    {
      id: 1,
      title:
        'Подтверждено: сознание наших соотечественников не замутнено пропагандой?',
      description: this.content,
    },
    {
      id: 2,
      title: 'Прототип нового сервиса - это как трубный призыв?',
      description: this.content,
    },
    {
      id: 3,
      title: 'Частокол на границе продолжает удивлять?',
      description: this.content,
    },
    {
      id: 4,
      title: 'Очевидцы сообщают, что слышали грохот грома градущих изменений?',
      description: this.content,
    },
    {
      id: 5,
      title:
        'И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?',
      description: this.content,
    },
    {
      id: 6,
      title:
        'Нынче никто не может себе позволить инициировать треск разлетающихся скреп?',
      description: this.content,
    },
    {
      id: 7,
      title: 'Высококачественный прототип будущего проекта обнадёживает?',
      description: this.content,
    },
  ];

  getData(): FAQItem[] {
    return this.data;
  }
}
