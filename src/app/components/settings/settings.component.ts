import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SettingsService } from '../../services/settings.service';
import Settings from '../../models/Settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  settings: Settings;
  constructor(
    private settingService: SettingsService,
    private router: Router,
    private flashMessage: FlashMessagesService,
  ) {}

  ngOnInit() {
    this.settings = this.settingService.getSettings();
  }

  onSubmit() {
    this.settingService.updateSettings(this.settings);
    this.flashMessage.show('Settings Updated', {
      cssClass: 'alert-success',
      timeout: 4000,
    });
  }
}
