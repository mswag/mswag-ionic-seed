import { Injectable } from '@angular/core';

@Injectable()
export class EnvironmentProvider {
  IONIC_ENV: string | undefined;
  PROJECT_ENV: string | undefined;
  VERSION: {
    revision: string | undefined;
    author: string | undefined;
    branch: string | undefined;
    tag: string | undefined;
    date: string | undefined;
  };
  constructor() {
    this.IONIC_ENV = process.env.IONIC_ENV || undefined;
    this.PROJECT_ENV = process.env.PROJECT_ENV || undefined;
    this.VERSION = {
      revision: undefined,
      author: undefined,
      branch: undefined,
      tag: undefined,
      date: undefined,
    };
    let version: string | undefined = undefined;
    if (process.env.VERSION) {
      version = process.env.VERSION;
    }
    if (version) {
      this.VERSION = Object.assign(this.VERSION, version);
    }
    console.log('IONIC_ENV: ', this.IONIC_ENV);
    console.log('PROJECT_ENV: ', this.PROJECT_ENV);
    console.log('VERSION: ', this.VERSION);
  }
}
