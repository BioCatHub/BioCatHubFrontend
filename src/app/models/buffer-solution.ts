/**
 * Model of a buffer solution.
 */
export class BufferSolution {

  type: string;
  concentration: number;
  unit: string;

  /**
   * Parses a buffer solution.
   *
   * @param payload BufferSolution json payload.
   * @return Parsed BufferSolution.
   */
  public static deserialize(payload: any): BufferSolution {
    const bufferSolution = new BufferSolution();
    bufferSolution.type = payload.type;
    bufferSolution.concentration = payload.concentration;
    bufferSolution.unit = payload.unit;
    return bufferSolution;
  }

  /**
   * Marshalls a BufferSolution.
   *
   * @param bufferSolution BufferSolution to marshall.
   * @return Marshalled BufferSolution.
   */
  public static serialize(bufferSolution: BufferSolution): any {
    return {
      type: bufferSolution.type,
      concentration: bufferSolution.concentration,
      unit: bufferSolution.unit,
    };
  }

}
