import { Injectable } from "@angular/core";
import { ResponsiveService } from "./responsive.service";

@Injectable({
  providedIn: "root"
})
export class DialogConfigService {
  constructor(private responsiveService: ResponsiveService) {}

  /**
   * This method provides a configuration object for a MatDialog
   *
   * @param width - the dialog width on screens greater than xtraSmall
   * @param height - the dialog height on screens greater than xtraSmall
   * @param autofocus - this determines if the first focusable field is automatically focused when opening the dialog
   */
  getDialogConfiguration(width: string, height: string, autofocus: boolean) {
    let dialogWidth = width;
    let dialogHeight = height;
    if (this.responsiveService.isXtraSmall()) {
      console.log("is extra small")
      dialogWidth = dialogHeight = "100vh";
    }
    return {
      maxWidth: "100vw",
      width: dialogWidth,
      height: dialogHeight,
      panelClass: "custom-dialog",
      backdropClass: "custom-dialog-backdrop",
      autoFocus: autofocus
    };
  }
}
