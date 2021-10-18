/**
 * Model of a pH value.
 */
export class PH {

  measuredIn: string;
  value: number;

  /**
   * Parses a PH value.
   *
   * @param payload PH json payload.
   * @return Parsed PH.
   */
  public static deserialize(payload: any): PH {
    const pH = new PH();
    pH.measuredIn = payload.measuredIn;
    pH.value = payload.value;
    return pH;
  }

  /**
   * Marshalls a PH value.
   *
   * @param pH PH to marshall.
   * @return Marshalled PH.
   */
  public static serialize(pH: PH): any {
    return {
      measuredIn: pH.measuredIn,
      value: pH.value,
    };
  }

}
