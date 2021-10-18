import {Attribute} from './attribute';
import {BufferSolution} from './buffer-solution';

/**
 * Model of a condition.
 */
export class Condition {
  temp: number;
  unit: string;
  ph: number;
  buffer: BufferSolution;
  others: Attribute[];

  constructor() {
    this.others = [];
  }

  /**
   * Parses a condition.
   *
   * @param payload Condition json payload.
   * @return Parsed Condition.
   */
  public static deserialize(payload: any): Condition {
    const condition = new Condition();
    condition.temp = payload.temp;
    condition.unit = payload.unit;
    condition.ph = payload.ph;
    condition.buffer = payload.buffer;
    condition.others = payload.others.map(Attribute.deserialize);
    return condition;
  }

  /**
   * Marshalls a Condition.
   *
   * @param condition Condition to marshall.
   * @return Marshalled Condition.
   */
  public static serialize(condition: Condition): any {
    return {
      temp: condition.temp,
      unit: condition.unit,
      ph: condition.ph,
      buffer: condition.buffer,
      others: condition.others.map(Attribute.serialize),
    };
  }

}
