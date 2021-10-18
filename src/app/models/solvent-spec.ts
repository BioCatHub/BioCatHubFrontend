/**
 * Model of a SolventSpec.
 */
export class SolventSpec {

  type: string;
  concentration: number;
  unit: string;

  /**
   * Parses a SolventSpec.
   *
   * @param payload SolventSpec json payload.
   * @return Parsed SolventSpec.
   */
  public static deserialize(payload: any): SolventSpec {
    const solventSpec = new SolventSpec();
    solventSpec.type = payload.type;
    solventSpec.concentration = payload.concentration;
    solventSpec.unit = payload.unit;
    return solventSpec;
  }

  /**
   * Marshalls a SolventSpec.
   *
   * @param solventSpec SolventSpec to marshall.
   * @return Marshalled SolventSpec.
   */
  public static serialize(solventSpec: SolventSpec): any {
    return {
      type: solventSpec.type,
      concentration: solventSpec.concentration,
      unit: solventSpec.unit,
    };
  }

}
