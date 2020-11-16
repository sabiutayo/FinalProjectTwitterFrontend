import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { MyTweetsComponent } from './components/my-tweets/my-tweets.component';
import { SearchComponent } from './components/search/search.component';
import { MeComponent } from './components/me/me.component';
import { OthersComponent } from './components/others/others.component';
import { ShellComponent } from './components/shell/shell.component';
import { DataResolverService } from './service/data-resolver.service';
import { SearchTweetsComponent } from './components/search-tweets/search-tweets.component';


const routes: Routes = [{
  path: '',
  component: LoginComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'users',
  component: ShellComponent,
  children: [{
    path: 'me',
    component: MeComponent,
    children: [{
      path: 'feeds',
      component: FeedsComponent
    },{
      path: 'myTweets',
      component: MyTweetsComponent
    },{
      path: 'search',
      component: SearchComponent
    },{
      path: 'searchTweet',
      component: SearchTweetsComponent
    }
    ]
  },{
    path: 'others/:id',
    resolve: { others: DataResolverService },
    component: OthersComponent
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

