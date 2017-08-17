import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  options: any[];
  lastSelectedIndex = 0;
  constructor(private router: Router) { }

  ngOnInit() {
    this.options = [];
    this.buildOptions();
  }

  selectOption(option: any) {
    if (this.lastSelectedIndex > -1){
      this.options[this.lastSelectedIndex].isSelected = false;
    }
    option.isSelected = true;
    this.lastSelectedIndex = this.options.indexOf(option);
  }

  buildOptions(): void {
    this.options.push(
      { 
        title: "Dashboard",
        icon: 'dashboard',
        isSelected: true,
        url: '/main/dashboard',
      },
      {
        title: "Agendar",
        icon: "event",
        isSelected: false,
        url: '/main/clients'
      },
      {
        title: "Clientes",
        icon: "people",
        isSelected: false,
        url: '/main/clients'
      },
      {
        title: "Controles",
        icon: "event_note",
        isSelected: false,
        url: '/main/clients'
      },
      {
        title: "Egresos",
        icon: "assignment_return",
        isSelected: false,
        url: '/main/clients'
      }

    );
  }

}
