import { ContentChild, Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTab]'
})
export class TabDirective {
  @Input('appTab')
  label: string;

  @ContentChild(TemplateRef) content: TemplateRef<any>;
}
