import { BrowserModule } from '@angular/platform-browser';    
import { NgModule } from '@angular/core';    
import { FormsModule  } from '@angular/forms';    
import { RouterModule , Routes ,  } from '@angular/router';    
import { ImageService } from './image.service';    
import { AppComponent } from './app.component';    
import { GalleryComponent } from './image-gallery/image-gallery.component';     
import { ImageDetailComponent } from './image-details/image-details.component';     
import { FilterimagesPipe  } from "./filterimages.pipe"    
import { HttpClientModule } from '@angular/common/http'; 
import { GetinfoService  } from './getinfo.service';    


var routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'image/1', component:  ImageDetailComponent },
  { path: 'image/2', component:  ImageDetailComponent },
  { path: 'image/3', component:  ImageDetailComponent },
  { path: 'image/4', component:  ImageDetailComponent },
  { path: 'image/5', component:  ImageDetailComponent },
  { path: 'image/6', component:  ImageDetailComponent },
  { path: 'image/7', component:  ImageDetailComponent },
  { path: 'image/8', component:  ImageDetailComponent },
  { path: 'image/9', component:  ImageDetailComponent },
  { path: 'image/10', component:  ImageDetailComponent },
  { path: 'image/11', component:  ImageDetailComponent },
  { path: 'image/12', component:  ImageDetailComponent },
  { path: 'image/13', component:  ImageDetailComponent },
  { path: 'image/14', component:  ImageDetailComponent },
  { path: 'image/15', component:  ImageDetailComponent },
  { path: 'image/16', component:  ImageDetailComponent },
  { path: 'image/17', component:  ImageDetailComponent }


];




@NgModule({    
  declarations: [    
    AppComponent,    
    GalleryComponent,     
    ImageDetailComponent,    
    FilterimagesPipe    
  ],    
  imports: [    
    BrowserModule,   
    HttpClientModule, 
    FormsModule,    
    RouterModule.forRoot(routes)    
  ],    
  providers: [ImageService, FilterimagesPipe,GetinfoService],    
  bootstrap: [AppComponent]    
})    
export class AppModule {


  constructor(private imageService: ImageService, private GetinfoService : GetinfoService) { 


    this.imageService.get_paths()  
   this.GetinfoService.cam_list()

   console.log("aaa")

  }
 }   