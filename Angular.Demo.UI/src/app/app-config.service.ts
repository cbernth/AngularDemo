import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { forkJoin } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private isBrowser: boolean;
  public appConfig: AppConfig = <AppConfig>{};

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  loadAppConfig(): Promise<AppConfig> {
    var hostUrl: string = this.isBrowser ? '' : environment.hostUrl;
    var apiUrl: string = hostUrl + '/api';
    return new Promise(
      (resolve, reject) => {
        forkJoin({
          appConfig: this.http.get<AppConfigFile>(hostUrl + '/assets/appConfig.json')
          // add parallel async requests here in the form:
          // otherRequest: this.http.get<OtherRequest>(apiUrl + '/Other/Get')
          // The forkJoin will resolve when the last of the requests have resolved
        }).subscribe(
          result => {
            this.setAppConfig(this.isBrowser, hostUrl, apiUrl, result.appConfig);
            resolve(this.appConfig);
          },
          error => {
            console.error('AppConfigService.loadAppConfig()', error);
            this.setAppConfig(this.isBrowser, hostUrl, apiUrl, null);
            reject(this.appConfig);
          }
        );
      }
    );
  }

  private setAppConfig(isBrowser: boolean, hostUrl: string, apiUrl: string, appConfigFile: AppConfigFile | null): void {
    this.appConfig = {
      isBrowser: isBrowser,
      hostUrl: hostUrl,
      apiUrl: apiUrl,
      appConfigFile: appConfigFile,
      locale: this.getUsersLocale('window.navigator not found!')
    };
  }

  private getUsersLocale(defaultValue: string): string {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
      return defaultValue;
    }
    const wn = window.navigator as any;
    let lang = wn.languages ? wn.languages[0] : defaultValue;
    lang = lang || wn.language || wn.browserLanguage || wn.userLanguage;
    return lang;
  }

}

export interface AppConfigFile {
  readonly appTitle: string,
  readonly somestring: string,
  readonly someint: number
}

export interface AppConfig {
  readonly isBrowser: boolean,
  readonly hostUrl: string,
  readonly apiUrl: string,
  readonly appConfigFile: AppConfigFile | null,
  readonly locale: string
}
