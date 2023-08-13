import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class CustomDirective implements OnInit {
  constructor(private eleRef: ElementRef, private rendrer: Renderer2) {}
  ngOnInit(): void {
    this.rendrer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'blue');
  }
}
