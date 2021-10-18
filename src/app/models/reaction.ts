import {Reactant} from './reactant';

/**
 * Model of a reaction.
 */
export class Reaction {

  value: string;
  educts: Reactant[];
  products: Reactant[];

  constructor() {
    this.educts = [];
    this.products = [];
  }

  /**
   * Parses a Reaction.
   *
   * @param payload Reaction json payload.
   * @return Parsed Reaction.
   */
  public static deserialize(payload: any): Reaction {
    const reaction = new Reaction();
    reaction.value = payload.value;
    reaction.educts = payload.educts.map(Reactant.deserialize);
    reaction.products = payload.products.map(Reactant.deserialize);
    return reaction;
  }

  /**
   * Marshalls a Reaction.
   *
   * @param reaction Reaction to marshall.
   * @return Marshalled Reaction.
   */
  public static serialize(reaction: Reaction): any {
    return {
      value: reaction.value,
      educts: reaction.educts.map(Reactant.serialize),
      products: reaction.products.map(Reactant.serialize),
    };
  }

}
