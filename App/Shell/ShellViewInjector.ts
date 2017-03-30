import { Component, ViewContainerRef } from "@angular/core";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { ShellViewModel } from "./ShellViewModel";

@Component({
    selector: "shell-view",
    templateUrl: "./ShellView.html"
})
export class ShellViewInjector extends ShellViewModel
{

    public constructor(toaster: ToastsManager,
        vRef: ViewContainerRef)
    {
        super();
        toaster.setRootViewContainerRef(vRef);
    }
}