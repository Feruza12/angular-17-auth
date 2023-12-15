import { Component, OnInit, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
  imports: [RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, NzButtonModule],
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  authService = inject(AuthService);
  private router = inject(Router);
  constructor() {
    effect(() => {
      if (!this.authService.user()) {
        this.router.navigate(['sign-in']);
      }
    });
  }

  ngOnInit() {

  }

}
