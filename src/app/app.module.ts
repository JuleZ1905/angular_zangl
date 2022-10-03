import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { DetailComponent } from './detail/detail.component';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './store/tasks.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({tasks: taskReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
