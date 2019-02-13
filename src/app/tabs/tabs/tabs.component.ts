import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { TabDirective } from '../tab.directive';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {
  @Input()
  scrollTreshold: number;

  @ContentChildren(TabDirective)
  tabs: QueryList<TabDirective>;

  activeTab: TabDirective;

  ngAfterContentInit() {
    this.activeTab = this.tabs.toArray()[0];
  }

  setActiveTab(activeTab: TabDirective) {
    this.activeTab = activeTab;
  }
}
