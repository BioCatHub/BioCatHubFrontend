import {Attribute} from './attribute';
import {Buffer} from './buffer';
import {PH} from './ph';
import {Temperature} from './temperature';
import {Solvent} from './solvent';

/**
 * Model of a condition.
 */
export class Condition {

  type: string;
  temperature: Temperature;
  unit: string;
  pHs: PH[];
  buffers: Buffer[];
  solvents: Solvent[];
  reactionSystem: string;
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
    condition.type = payload.type;
    condition.unit = payload.unit;
    condition.temperature = Temperature.deserialize(payload.temperature);
    condition.pHs = payload.pHs.map(PH.deserialize);
    condition.reactionSystem = payload.reactionSystem;
    condition.buffers = payload.buffers.map(Buffer.deserialize);
    condition.solvents = payload.solvents.map(Solvent.deserialize);
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
      type: condition.type,
      temperature: Temperature.serialize(condition.temperature),
      unit: condition.unit,
      pHs: condition.pHs.map(PH.serialize),
      reactionSystem: condition.reactionSystem,
      buffers: condition.buffers.map(Buffer.serialize),
      solvents: condition.solvents.map(Solvent.serialize),
      others: condition.others.map(Attribute.serialize),
    };
  }

}
