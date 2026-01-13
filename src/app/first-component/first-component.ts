import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent {


  name = input<string>('default');
  
  /**
   * Display name in uppercase
   */
  displayName = computed(() => this.name().toUpperCase());
  
  processName(value: string): string {
    console.log('Processing:', value);
    return value.trim();
  }
  
  /**
   * Combines two strings
   * @returns Combined string
   */
  private combineStrings(first: string, second: string): string {
    // TODO: Add validation
    return first + ' ' + second;
  }
  
  validate(text: string): boolean {
    // FIXME: Needs proper validation logic
    return text.length > 0;
  }
}
