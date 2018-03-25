import { Directive,
         OnInit,
         OnDestroy,

         HostListener, 
         Input,
         
         Renderer, // wrapper for DOM Manipulation
         Renderer2, 

         ElementRef

} from '@angular/core';

// attribute directive

// <div appHighlight>
// <p appHighlight

// div, p, etc called host element

@Directive({
  // [] must
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnDestroy {

  // match input name with directive name
  // <p appHighlight='green'
  @Input('appHighlight')
  color: string;


  @Input()
  theme: string;

  // DI
  // angular passes automatically
  // host element in constructor
  constructor(private hostElement: ElementRef, 
              private renderer2: Renderer2
        ) {
     console.log("Highlight directive created");
   }

   ngOnInit() {
    console.log("Directive init");

    this.color = this.color || 'greenyellow';

    console.log("Color ", this.color);

    console.log("Theme ", this.theme);
   }

   @HostListener('mouseenter') 
   onEnter() {
     console.log("Mouse enter");
     this.renderer2.setStyle(
              this.hostElement.nativeElement,
              "background",
              this.color
     );
   }

   @HostListener('mouseleave')
   onLeave() {
     console.log("Mouse leave");
     this.renderer2.setStyle(
      this.hostElement.nativeElement,
      "background",
      ''
);
   }

   ngOnDestroy() {
    console.log("Directive destroy");
   }

   @HostListener('click')
   onClick() {
     alert("Click on directive")
   }

}
