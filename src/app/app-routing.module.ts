import { SignupComponent } from './login/signup/signup.component';
import { SignComponent } from './login/sign/sign.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BooktableComponent } from './booktable/booktable.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home', component:HomeComponent,
  children:[
    {path:'sign',component:SignComponent, title:'TwistedToppings | login'},
    {path:'sign-up',component:SignupComponent, title:'TwistedToppings | login'},
    {path:'book',component:BooktableComponent, title:'TwistedToppings | Book Table'}
  ],
  title:'TwistedToppings | home' },
  {path:'gallery', component:GalleryComponent, title:'TwistedToppings | gallery' },
  {path:'about', component:AboutComponent, title:'TwistedToppings | about'},
  {path:'contact', component:ContactComponent, title:'TwistedToppings | contact'},
  {path:'menu', loadChildren:()=>import('./menu/menu.module').then(m => m.MenuModule)},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
