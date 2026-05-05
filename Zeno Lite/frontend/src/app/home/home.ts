import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  // 控制菜单开关
  isOpen = false;

  // 点击按钮触发
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

}