import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DownloadProgressComponent } from './download-progress/download-progress.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'home', component: AppComponent },
  { path: 'progress', component: DownloadProgressComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: SearchComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function hi()
{
  {
    
  }
}
