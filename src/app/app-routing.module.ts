import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'hotlist', loadChildren: 'src/app/hotlist/hotlist.module#HotlistModule' },
  { path: 'library', loadChildren: 'src/app/library/library.module#LibraryModule' },
  { path: 'search', loadChildren: 'src/app/search/search.module#SearchModule' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
