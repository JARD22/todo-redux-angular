import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Ngrx
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from '@ngrx/store';
import { _todoReducer } from './todos/todo.reducers';
import { appReducers } from './app.reducer';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot( appReducers ),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      // trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      // traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
