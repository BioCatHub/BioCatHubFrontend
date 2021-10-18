/**
 * Model of a replicate.
 */
export class Replicate {

  xValue: number;
  yValues: number[];

  constructor() {
    this.yValues = [];
  }

  /**
   * Parses a Replicate.
   *
   * @param payload Replicate json payload.
   * @return Parsed Replicate.
   */
  public static deserialize(payload: any): Replicate {
    const replicate = new Replicate();
    replicate.xValue = payload.xValue;
    replicate.yValues = payload.yValues;
    return replicate;
  }

  /**
   * Marshalls a Replicate.
   *
   * @param replicate Replicate to marshall.
   * @return Marshalled Replicate.
   */
  public static serialize(replicate: Replicate): any {
    return {
      xValue: replicate.xValue,
      yValues: replicate.yValues,
    };
  }

}
