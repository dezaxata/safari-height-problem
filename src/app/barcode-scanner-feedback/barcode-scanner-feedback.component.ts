import { Component, Inject, Input, OnInit } from "@angular/core";
import { L10N_LOCALE, L10nLocale } from "angular-l10n";

export enum BarcodeScanFeedback {
  ALREADY_SCANNED,
  SUCCESS,
  FAILURE
}

@Component({
  selector: "app-barcode-scanner-feedback",
  templateUrl: "./barcode-scanner-feedback.component.html",
  styleUrls: ["./barcode-scanner-feedback.component.scss"]
})
export class BarcodeScannerFeedbackComponent {
  private vibrationDurationOnSuccess = 100;
  private vibrationDurationOnWarning = 300;

  showSpinner = false;
  showResult = false;
  scanSuccessful = false;

  @Input()
  scanErrorMessage = "";
  @Input()
  alreadyScannedSnack = "";
  @Input()
  scannedSuccessfulSnack = "";

  constructor() {}

  activateSpinner(): void {
    this.showSpinner = true;
  }

  handleScanResult(feedback: BarcodeScanFeedback): void {
    this.showSpinner = false;
    switch (feedback) {
      case BarcodeScanFeedback.SUCCESS:
        this.scanSuccessful = true;
        this.showResult = true;
        window.navigator.vibrate(this.vibrationDurationOnSuccess);
        break;
      case BarcodeScanFeedback.FAILURE:
        this.scanSuccessful = false;
        this.showResult = true;
        window.navigator.vibrate(this.vibrationDurationOnWarning);
        break;
      case BarcodeScanFeedback.ALREADY_SCANNED:
        this.scanSuccessful = true;
        this.showResult = true;
        window.navigator.vibrate(this.vibrationDurationOnSuccess);
        break;
    }
  }

  removeResultOverlay(): void {
    this.showSpinner = this.showResult = false;
  }
}
