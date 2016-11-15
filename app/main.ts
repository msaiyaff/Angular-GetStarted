import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import{InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api'

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
