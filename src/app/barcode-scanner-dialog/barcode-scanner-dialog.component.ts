import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from "@angular/core";
import { Subscription } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { L10N_LOCALE, L10nLocale } from "angular-l10n";
import { ContentDialogComponent } from "../content-dialog/content-dialog.component";
import { DialogConfigService } from "../services/dialog-config.service";
import { BarcodeScannerFeedbackComponent } from "../barcode-scanner-feedback/barcode-scanner-feedback.component";

@Component({
  selector: "app-barcode-scanner-dialog",
  templateUrl: "./barcode-scanner-dialog.component.html",
  styleUrls: ["./barcode-scanner-dialog.component.scss"]
})
export class BarcodeScannerDialogComponent {
  matDialogRef;
  numberOfBarcodesScanned = 0;
  dialogIsOpen: boolean;
  cameraFound = true;
  cameraPermission = true;

  @ViewChild("barcodeScannerTemplate") templateRef: TemplateRef<
    ContentDialogComponent
  >;
  @ViewChild("feedbackComponent")
  feedbackComponent: BarcodeScannerFeedbackComponent;

  @Input()
  headerTitle: string;
  @Input()
  scannedItemsLabel: string;
  @Input()
  scanErrorMessage: string;
  @Input()
  alreadyScannedSnack: string;
  @Input()
  scannedSuccessfulSnack: string;

  @Output() barcodeValueScanned = new EventEmitter();

  constructor(
    public dialog: MatDialog,
    public dialogConfigService: DialogConfigService
  ) {}

  noCameraAvailable() {
    this.cameraFound = false;
  }

  noCameraPermission() {
    this.cameraPermission = false;
  }

  openDialog() {
    this.numberOfBarcodesScanned = 0;
    console.log("In here");
    this.matDialogRef = this.dialog.open(
      this.templateRef,
      this.dialogConfigService.getDialogConfiguration("729px", "544px", false)
    );
    this.dialogIsOpen = true;
  }

  closeDialog() {
    this.dialogIsOpen = false;
    this.matDialogRef.close();
  }

  barcodeScanned(barcodeValue) {
    this.feedbackComponent.activateSpinner();
    this.barcodeValueScanned.emit(barcodeValue);
  }
}
