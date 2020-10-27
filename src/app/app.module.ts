import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ContentDialogComponent } from "./content-dialog/content-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { BarcodeScannerDialogComponent } from "./barcode-scanner-dialog/barcode-scanner-dialog.component";
import { BarcodeScannerFeedbackComponent } from "./barcode-scanner-feedback/barcode-scanner-feedback.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [BrowserModule, FormsModule, MatDialogModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ContentDialogComponent,
    BarcodeScannerDialogComponent,
    BarcodeScannerFeedbackComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
