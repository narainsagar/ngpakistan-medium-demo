import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  info(message: string) {
    console.info(message);
  }

  warn(message: string) {
    console.warn(message);
  }

  error(message: string) {
    console.error(message);
  }

  log(message: string) {
    console.log(message);
  }

  debug(message: string) {
    console.debug(message);
  }

}
