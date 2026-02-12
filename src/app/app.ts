import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  // templateUrl: './app.html',
  // template:`<h1>Hello, {{title()}}</h1>`,
  template:`
  <main>
    <a [routerLink] = "['/']">
    <header class="brand-name">
      <img class="brand-logo" src="/logo.png" alt="logo" aria-hidden="true" />
    </header>
    </a>
    <section class="content">
       <router-outlet />
    </section>
  </main>`,
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('World');
  protected readonly title =signal("world");
}
