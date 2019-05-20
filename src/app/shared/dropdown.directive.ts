import { Directive, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  //1st approach
  // constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  // @HostListener('click') click(){
  //   if(this.elRef.nativeElement.classList.contains('open')) {
  //     this.renderer.removeClass(this.elRef.nativeElement, 'open');
  //   } else {
  //     this.renderer.addClass (this.elRef.nativeElement, 'open');
  //   }
  // }

  //2nd approach
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleClass(){
    this.isOpen = !this.isOpen
  }

}
