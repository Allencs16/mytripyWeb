import { HttpParams } from '@angular/common/http';

export class AddHttpParams<T> {
  constructor(private resource: T) {}

  createParams(): HttpParams {
    if (!this.resource) {
      return new HttpParams();
    }

    const paramsValue: { [param: string]: string } = {};

    for (const prop in this.resource) {
      if (Object.prototype.hasOwnProperty.call(this.resource, prop)) {
        const value = this.resource[prop];

        if (typeof value === 'number' && Number(value) === 0) {
          paramsValue[prop] = String(value);
        } else if (typeof value === 'boolean') {
          paramsValue[prop] = String(value);
        }
      }
    }

    return new HttpParams({ fromObject: paramsValue });
  }
}