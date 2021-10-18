import {Measurement} from './measurement';
import {Parameter} from './parameter';

/**
 * Model of an additional experiment.
 */
export class AdditionalExperiment {

  changedParameter: Parameter;
  measurements: Measurement[];

  /**
   * Parses an AdditionalExperiment.
   *
   * @param payload AdditionalExperiment json payload.
   * @return Parsed AdditionalExperiment.
   */
  public static deserialize(payload: any): AdditionalExperiment {
    const additionalExperiment = new AdditionalExperiment();
    additionalExperiment.changedParameter = Parameter.deserialize(payload.changedParameter);
    additionalExperiment.measurements = payload.measurements.map(Measurement.deserialize);
    return additionalExperiment;
  }

  /**
   * Marshalls an AdditionalExperiment.
   *
   * @param additionalExperiment AdditionalExperiment to marshall.
   * @return Marshalled AdditionalExperiment.
   */
  public static serialize(additionalExperiment: AdditionalExperiment): any {
    return {
      changedParameter: Parameter.serialize(additionalExperiment.changedParameter),
      measurements: additionalExperiment.measurements.map(Measurement.serialize),
    };
  }

}
