import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadProgressComponent } from './download-progress/download-progress.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightDirective } from './directives/highlight.directive';
import { SearchComponent } from './search/search.component';
import { AppUnlessDirective } from './directives/app-unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    DownloadProgressComponent,
    HighlightDirective,
    SearchComponent,
    AppUnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
