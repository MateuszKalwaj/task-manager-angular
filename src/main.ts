import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {HeaderComponent} from './app/header.component';

bootstrapApplication(HeaderComponent).catch((err) => console.error(err));
