import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private collapsedSubject = new BehaviorSubject<boolean>(true);
  collapsed$ = this.collapsedSubject.asObservable();

  toggleSidebar() {
    this.collapsedSubject.next(!this.collapsedSubject.value);
  }

  get isCollapsed(): boolean {
    return this.collapsedSubject.value;
  }
}

