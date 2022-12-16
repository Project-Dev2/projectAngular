import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  public events: any[];
  public options: any;

  constructor() {}

  ngOnInit() {

    this.options = {
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'today,dayGridMonth,timeGridWeek,timeGridDay,listMonth',
      },
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      //themeSystem: 'bootstrap4',
      //themeName: 'journal',
      navLinks: true, // can click day/week names to navigate views
      businessHours: true, // display business hours
      editable: true,
      selectable: true,
      dayMaxEvents: true,
      eventLimit: true,
      //eventLimitText: "Show more"
      //locale: arLocale,
    }

    this.events = [
      {
        title: 'Webinar',
        start: '2022-12-15T08:00:00',
        end: '2022-12-15T09:00:00',
        color: '#02377D',
        textColor: '#fff'
      },
      {
        title: 'Coaching',
        start: '2022-12-15T09:15:00',
        end: '2022-12-15T10:15:00',
        color: '#02377D',
        textColor: '#fff'
      },
      {
        title: 'Course',
        start: '2022-12-15T10:30:00',
        end: '2022-12-15T12:30:00',
        color: '#02377D',
        textColor: '#fff'
      },
      {
        title: 'Test1',
        start: '2022-12-15T14:00:00',
        end: '2022-12-15T15:00:00',
        color: '#02377D',
        textColor: '#fff'
      },
      {
        title: 'Test2',
        start: '2022-12-15T15:15:00',
        end: '2022-12-15T16:15:00',
        color: '#02377D',
        textColor: '#fff'
      },
      {
        title: 'Test3',
        start: '2022-12-15T16:30:00',
        end: '2022-12-15T17:30:00',
        color: '#02377D',
        textColor: '#fff'
      },
      {
        title: 'Test4',
        start: '2022-12-15T18:00:00',
        end: '2022-12-15T19:00:00',
        color: '#02377D',
        textColor: '#fff'
      },
      {
        title: 'Coaching',
        start: '2022-12-19T08:00:00',
        end: '2022-12-22T13:00:00',
        color: '#02377D',
        textColor: '#fff'
      }
    ]
  }

}
