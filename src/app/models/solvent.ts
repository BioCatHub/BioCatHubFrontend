import {SolventSpec} from './solvent-spec';

/**
 * Model of a Solvent.
 */
export class Solvent {

  aqueous: SolventSpec[];
  organic: SolventSpec[];

  /**
   * Parses a Solvent.
   *
   * @param payload Solvent json payload.
   * @return Parsed Solvent.
   */
  public static deserialize(payload: any): Solvent {
    const solvent = new Solvent();
    solvent.aqueous = payload.aqueous.map(SolventSpec.deserialize);
    solvent.organic = payload.organic.map(SolventSpec.deserialize);
    return solvent;
  }

  /**
   * Marshalls a Solvent.
   *
   * @param solvent Solvent to marshall.
   * @return Marshalled Solvent.
   */
  public static serialize(solvent: Solvent): any {
    return {
      aqueous: solvent.aqueous.map(SolventSpec.serialize),
      organic: solvent.organic.map(SolventSpec.serialize),
    };
  }

}
