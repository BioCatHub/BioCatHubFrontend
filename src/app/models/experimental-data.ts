import {Measurement} from './measurement';

/**
 * Model of experimental data.
 */
export class ExperimentalData {

  measurements: Measurement[];

  constructor() {
    this.measurements = [];
  }

  /**
   * Parses ExperimentalData.
   *
   * @param payload ExperimentalData json payload.
   * @return Parsed ExperimentalData.
   */
  public static deserialize(payload: any): ExperimentalData {
    const experimentalData = new ExperimentalData();
    experimentalData.measurements = payload.measurements.map(Measurement.deserialize);
    return experimentalData;
  }

  /**
   * Marshalls ExperimentalData.
   *
   * @param experimentalData ExperimentalData to marshall.
   * @return Marshalled ExperimentalData.
   */
  public static serialize(experimentalData: ExperimentalData): any {
    return {
      measurements: experimentalData.measurements.map(Measurement.serialize),
    };
  }

}
