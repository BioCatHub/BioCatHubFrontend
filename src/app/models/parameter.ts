/**
 * Model of a Parameter.
 */
export class Parameter {

  parameterName: string;
  parameterValue: any;

  /**
   * Parses a Parameter.
   *
   * @param payload Parameter json payload.
   * @return Parsed Parameter.
   */
  public static deserialize(payload: any): Parameter {
    const parameter = new Parameter();
    parameter.parameterName = payload.parameterName;
    parameter.parameterValue = payload.parameterValue;
    return parameter;
  }

  /**
   * Marshalls a Parameter.
   *
   * @param parameter Parameter to marshall.
   * @return Marshalled Parameter.
   */
  public static serialize(parameter: Parameter): any {
    return {
      parameterName: parameter.parameterName,
      parameterValue: parameter.parameterValue,
    };
  }

}
