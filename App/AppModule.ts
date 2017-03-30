import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./AppRoutingModule";

import { ShellViewInjector } from "./Shell/ShellViewInjector";

import { AppInsightsModule } from "ng2-appinsights";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppInsightsModule,
        AppRoutingModule
    ],
    declarations: [
        ShellViewInjector
    ],
    bootstrap: [ShellViewInjector]
})
export class AppModule
{

    public constructor()
    {

    }
}
