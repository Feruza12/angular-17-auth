import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
  imports: [ RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule],
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  constructor() { }

  ngOnInit() { }

}
