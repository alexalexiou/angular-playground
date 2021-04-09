import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online{
      color: white;
    }
  `]
})
export class ServerComponent implements OnInit {

  serverId = 10;
  serverName = 'myServer';
  allowNewServer = false;
  serverCreationStatus = 'No server created';
  someText = '';
  username = '';
  serverCreated = false;
  serverStatus = 'offline';
  environ = ['TestServer', 'Prod server', 'Demo server'];
  visible = true;
  clickLogs = [];
  time = 1;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {

  }

  getServerName() {
    return this.serverName;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.environ.push(this.serverName);
    this.serverCreationStatus = 'Server created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.someText = (event.target as HTMLInputElement).value;
  }
  onReset() {
    return this.username = '';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  toggle() {
    if (this.visible === true) {
      this.visible = false;
    } else {
      this.visible = true;
    }
    this.clickLogs.push('button clicked time ' + this.time++);
  }

  getBackgColor() {
    if (this.time > 5) {
      return 'blue';
    }
  }

}
