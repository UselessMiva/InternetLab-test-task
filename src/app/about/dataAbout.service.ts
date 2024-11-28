import { Injectable } from '@angular/core';
export interface AboutItem {
  id: number;
  title: string;
  subtitle: string;
  img: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataAboutService {
  private data: AboutItem[] = [
    {
      id: 1,
      title: 'Прочитай задание внимательно',
      subtitle: 'Думаю у тебя не займет это больше двух-трех минут',
      img: 'assets/images/waiting.svg',
    },
    {
      id: 2,
      title: 'Изучи весь макет заранее',
      subtitle:
        'Подумай как это будет работать на разных разрешениях и при скролле',
      img: 'assets/images/delivery-truck.svg',
    },
    {
      id: 3,
      title: 'Сделай хорошо',
      subtitle: 'Чтобы мы могли тебе доверить подобные задачи в будущем',
      img: 'assets/images/secure.svg',
    },
    {
      id: 4,
      title: 'Получи предложение',
      subtitle:
        'Ну тут все просто, не я придумал правила, но думаю так и будет)))',
      img: 'assets/images/money-bags.svg',
    },
  ];

  getData(): AboutItem[] {
    return this.data;
  }
}
