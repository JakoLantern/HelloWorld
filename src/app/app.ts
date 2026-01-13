import { Component, signal, computed, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Missing JSDoc for signal
  readonly title = signal('anotherTest');
  
  // Missing access modifier and JSDoc
  counter = signal(0);
  
  // Multi-line JSDoc when should be single-line
  /**
   * Calculate doubled counter
   */
  public doubled = computed(() => this.counter() * 2);
  
  // Missing JSDoc
  public valueChanged = output<number>();
  
  // Missing JSDoc, access modifier, and return type
  incrementCounter(amount) {
    console.log('Incrementing by:', amount);
    this.counter.set(this.counter() + amount);
    debugger;
  }
  
  // TODO: Need proper error handling
  getData() {
    // FIXME: This is a temporary workaround
    return { value: 100 };
  }
}
