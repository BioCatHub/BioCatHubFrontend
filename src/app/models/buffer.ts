/**
 * Model of a buffer.
 */
export class Buffer {

  type: string;
  concentration: number;
  unit: string;

  /**
   * Parses a buffer solution.
   *
   * @param payload Buffer json payload.
   * @return Parsed Buffer.
   */
  public static deserialize(payload: any): Buffer {
    const buffer = new Buffer();
    buffer.type = payload.type;
    buffer.concentration = payload.concentration;
    buffer.unit = payload.unit;
    return buffer;
  }

  /**
   * Marshalls a Buffer.
   *
   * @param buffer Buffer to marshall.
   * @return Marshalled Buffer.
   */
  public static serialize(buffer: Buffer): any {
    return {
      type: buffer.type,
      concentration: buffer.concentration,
      unit: buffer.unit,
    };
  }

}
