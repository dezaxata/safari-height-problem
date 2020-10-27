import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { BreakpointObserver } from "@angular/cdk/layout";

@Injectable({
  providedIn: "root"
})
export class ResponsiveService {
  private deviceTypeSubject = new BehaviorSubject("default");
  private xtraSmallScreen = "(max-width: 599px)";
  private smallScreen = "(max-width: 1023px)";
  private mediumScreen = "(max-width: 1439px)";
  private largeScreen = "(max-width: 1919px)";

  public deviceType: string;

  constructor(private breakpointObserver: BreakpointObserver) {}

  deviceTypeChanged() {
    this.deviceTypeSubject.next(this.deviceType);
  }

  getCurrentDeviceType(): Observable<string> {
    return this.deviceTypeSubject.asObservable();
  }

  public checkDeviceType() {
    if (this.isTouchDevice()) {
      this.deviceType = "touch";
    } else {
      this.deviceType = "standard";
    }
    this.deviceTypeChanged();
  }

  private isTouchDevice() {
    return window.matchMedia("(pointer: coarse)").matches;
  }

  isXtraSmall(): boolean {
    return this.breakpointObserver.isMatched(this.xtraSmallScreen);
  }

  isSmall(): boolean {
    return this.breakpointObserver.isMatched(this.smallScreen);
  }

  isMedium(): boolean {
    return this.breakpointObserver.isMatched(this.mediumScreen);
  }

  isLarge(): boolean {
    return this.breakpointObserver.isMatched(this.largeScreen);
  }
}
