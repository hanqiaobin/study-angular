import {Component, Input, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {Home} from './home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ Input() currentPage: number;
  p = 1;
  home: Home = new Home;
  topics = {
    data: []
  };

  constructor(private service: HomeService) {
  }

  ngOnInit() {
    this.service.getTopics(this.home.page, this.home.tab, this.home.limit, this.home.mdrender).subscribe(res => this.topics = res);
  }
}
