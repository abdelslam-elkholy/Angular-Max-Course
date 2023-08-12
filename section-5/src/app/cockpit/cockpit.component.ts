import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  @ViewChild('serverContent', { static: true }) serverContent!: ElementRef;
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName: string = '';
  // newServerContent: string = '';

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContent.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: string) {
    this.blueprintCreated.emit({
      serverName: nameInput,
      serverContent: this.serverContent.nativeElement.value,
    });
  }
}
