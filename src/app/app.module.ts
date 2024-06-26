import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

@NgModule ({
    declarations: [			
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule, 
      ],
      providers: [ ],
      bootstrap: [AppComponent]

})


export class AppModule { }