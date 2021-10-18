import {Replicate} from './replicate';

/**
 * Model of a measurement.
 */
export class Measurement {

  reagent: string;
  xUnit: string;
  xName: string;
  yUnit: string;
  yName: string;
  replicates: Replicate[];
  notes: string;
  plotStyle: string;

  constructor(measurement?: Measurement) {
    this.replicates = measurement?.replicates || new Array<Replicate>();
    this.plotStyle = 'point';
  }

  /**
   * Parses a Measurement.
   *
   * @param payload Measurement json payload.
   * @return Parsed Measurement.
   */
  public static deserialize(payload: any): Measurement {
    const measurement = new Measurement();
    measurement.reagent = payload.reagent;
    measurement.xUnit = payload.xUnit;
    measurement.xName = payload.xName;
    measurement.yUnit = payload.yUnit;
    measurement.yName = payload.yName;
    measurement.replicates = payload.replicates.map(Replicate.deserialize);
    measurement.notes = payload.notes;
    measurement.plotStyle = payload.plotStyle;
    return measurement;
  }

  /**
   * Marshalls an Measurement.
   *
   * @param measurement Measurement to marshall.
   * @return Marshalled Measurement.
   */
  public static serialize(measurement: Measurement): any {
    return {
      reagent: measurement.reagent,
      xUnit: measurement.xUnit,
      xName: measurement.xName,
      yUnit: measurement.yUnit,
      yName: measurement.yName,
      replicates: measurement.replicates.map(Replicate.serialize),
      notes: measurement.notes,
      plotStyle: measurement.plotStyle
    };
  }

}
