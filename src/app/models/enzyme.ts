import {Attribute} from './attribute';
import {Reaction} from './reaction';

/**
 * Model of an enzyme.
 */
export class Enzyme {

  ecNumber: string;
  name: string;
  type: string;
  variant: string;
  organism: string;
  sequence: string;
  concentration: number;
  unit: string;
  formulation: string;
  method: string;
  others: Attribute[];
  reactions: Reaction[];

  constructor() {
    this.others = [];
  }

  /**
   * Parses an enzyme.
   *
   * @param payload Enzyme json payload.
   * @return Parsed Enzyme.
   */
  public static deserialize(payload: any): Enzyme {
    const enzyme = new Enzyme();
    enzyme.ecNumber = payload.ecNumber;
    enzyme.name = payload.name;
    enzyme.type = payload.type;
    enzyme.variant = payload.variant;
    enzyme.organism = payload.organism;
    enzyme.sequence = payload.sequence;
    enzyme.concentration = payload.concentration;
    enzyme.unit = payload.unit;
    enzyme.formulation = payload.formulation;
    enzyme.method = payload.method;
    enzyme.reactions = payload.reactions.map(Reaction.deserialize);
    enzyme.others = payload.others.map(Attribute.deserialize);
    return enzyme;
  }

  /**
   * Marshalls an Enzyme.
   *
   * @param enzyme Enzyme to marshall.
   * @return Marshalled Enzyme.
   */
  public static serialize(enzyme: Enzyme): any {
    return {
      ecNumber: enzyme.ecNumber,
      name: enzyme.name,
      type: enzyme.type,
      variant: enzyme.variant,
      organism: enzyme.organism,
      sequence: enzyme.sequence,
      concentration: enzyme.concentration,
      unit: enzyme.unit,
      formulation: enzyme.formulation,
      method: enzyme.method,
      reactions: enzyme.reactions.map(Reaction.deserialize),
      others: enzyme.others.map(Attribute.serialize),
    };
  }

  /**
   * Parses a Brenda DB result and returns the corresponding enzyme.
   *
   * @param brendaResult Input Brenda result.
   */
  public static fromBrendaResult(brendaResult: any): Enzyme {
    const enzyme = new Enzyme();
    enzyme.ecNumber = brendaResult.ecNumber;
    enzyme.name = brendaResult.enzymeName;
    return enzyme;
  }

}
