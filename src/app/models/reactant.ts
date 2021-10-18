import {Attribute} from './attribute';

/**
 * Model of a reactant.
 */
export class Reactant {

  id: string;
  name: string;
  role: string;
  concentration: number;
  unit: string;
  purity: string;
  supplier: string;
  formula: string;
  smiles: string;
  imageUrl: string;
  others: Attribute[];

  constructor() {
    this.others = [];
  }

  /**
   * Parses a Reactant.
   *
   * @param payload Reactant json payload.
   * @return Parsed Reactant.
   */
  public static deserialize(payload: any): Reactant {
    const reactant = new Reactant();
    reactant.id = payload.id;
    reactant.name = payload.name;
    reactant.role = payload.role;
    reactant.concentration = payload.concentration;
    reactant.unit = payload.unit;
    reactant.purity = payload.purity;
    reactant.supplier = payload.supplier;
    reactant.formula = payload.formula;
    reactant.smiles = payload.smiles;
    reactant.imageUrl = payload.imageUrl;
    reactant.others = payload.others.map(Attribute.deserialize);
    return reactant;
  }

  /**
   * Marshalls a Reactant.
   *
   * @param reactant Reactant to marshall.
   * @return Marshalled Reactant.
   */
  public static serialize(reactant: Reactant): any {
    return {
      id: reactant.id,
      name: reactant.name,
      role: reactant.role,
      concentration: reactant.concentration,
      unit: reactant.unit,
      purity: reactant.purity,
      supplier: reactant.supplier,
      formula: reactant.formula,
      smiles: reactant.smiles,
      imageUrl: reactant.imageUrl,
      others: reactant.others.map(Attribute.serialize),
    };
  }

}
