import {Attribute} from './attribute';

/**
 * Model of a vessel.
 */
export class Vessel {

  type: string;
  volume: number;
  unit: string;
  others: Attribute[];

  constructor() {
    this.others = [];
  }

  /**
   * Parses a Vessel.
   *
   * @param payload Vessel json payload.
   * @return Parsed Vessel.
   */
  public static deserialize(payload: any): Vessel {
    const vessel = new Vessel();
    vessel.type = payload.type;
    vessel.volume = payload.volume;
    vessel.unit = payload.unit;
    vessel.others = payload.others.map(Attribute.deserialize);
    return vessel;
  }

  /**
   * Marshalls a Vessel.
   *
   * @param vessel Vessel to marshall.
   * @return Marshalled Vessel.
   */
  public static serialize(vessel: Vessel): any {
    return {
      type: vessel.type,
      volume: vessel.volume,
      unit: vessel.unit,
      others: vessel.others.map(Attribute.serialize),
    };
  }

}
