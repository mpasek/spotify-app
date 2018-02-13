import { BaseModel } from './base.model';

export class Checkbox extends BaseModel<boolean> {
  controlType = 'checkbox';
}
