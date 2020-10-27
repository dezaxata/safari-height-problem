import { Component, VERSION, ViewChild } from "@angular/core";
import { BarcodeScannerDialogComponent } from "./barcode-scanner-dialog/barcode-scanner-dialog.component";
import { DialogConfigService } from "./services/dialog-config.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  @ViewChild("barcodeScannerDialog")
  barcodeScannerDialog: BarcodeScannerDialogComponent;

  constructor() {}

  openDialog() {
    this.barcodeScannerDialog.openDialog();
  }
}
