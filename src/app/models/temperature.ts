/**
 * Model of a temperature.
 */
export class Temperature {

  unit: string;
  value: number;

  /**
   * Parses a Temperature.
   *
   * @param payload Temperature json payload.
   * @return Parsed Temperature.
   */
  public static deserialize(payload: any): Temperature {
    const temperature = new Temperature();
    temperature.unit = payload.unit;
    temperature.value = payload.value;
    return temperature;
  }

  /**
   * Marshalls a Temperature.
   *
   * @param temperature Temperature to marshall.
   * @return Marshalled Temperature.
   */
  public static serialize(temperature: Temperature): any {
    return {
      unit: temperature.unit,
      value: temperature.value,
    };
  }

}
