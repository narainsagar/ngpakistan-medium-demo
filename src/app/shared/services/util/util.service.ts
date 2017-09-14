import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class UtilService {

  errorMessage = '';

  constructor(private toastr: ToastsManager) { }

  // generic trigger function for alerts.
  notify(data: {
      type: string, // valid: info, success, error, warning, custom
      message: string,
      title?: string,
      options?: Object
  }) {
      if (!data) { return; }
      return this.toastr[data.type](data.message, data.title || '', data.options || {}); // it returns: Promise<Toast>
  }

}
