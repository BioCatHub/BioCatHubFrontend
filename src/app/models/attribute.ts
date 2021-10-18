/**
 * Model of an attribute.
 */
export class Attribute {

  key: string;
  value: string;

  /**
   * Parses an attribute.
   *
   * @param payload Attribute json payload.
   * @return Parsed Attribute.
   */
  public static deserialize(payload: any): Attribute {
    const attribute = new Attribute();
    attribute.key = payload.key;
    attribute.value = payload.value;
    return attribute;
  }

  /**
   * Marshalls an Attribute.
   *
   * @param attribute Attribute to marshall.
   * @return Marshalled Attribute.
   */
  public static serialize(attribute: Attribute): any {
    return {
      key: attribute.key,
      value: attribute.value,
    };
  }

}
