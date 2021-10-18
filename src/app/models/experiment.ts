import {Enzyme} from './enzyme';
import {Vessel} from './vessel';
import {Condition} from './condition';
import {ExperimentalData} from './experimental-data';
import {User} from './user';

/**
 * Model of an experiment.
 */
export class Experiment {

  title: string;
  description: string;
  enzymes: Enzyme[];
  vessel: Vessel;
  condition: Condition;
  experimentalData: ExperimentalData;
  user: User;

  constructor() {
    this.enzymes = [];
  }

  /**
   * Parses an Experiment.
   *
   * @param payload Experiment json payload.
   * @return Parsed Experiment.
   */
  public static deserialize(payload: any): Experiment {
    const experiment = new Experiment();
    experiment.title = payload.title;
    experiment.description = payload.description;
    experiment.enzymes = payload.enzymes.map(Enzyme.deserialize);
    experiment.vessel = Vessel.deserialize(payload.vessel);
    experiment.condition = Condition.deserialize(payload.condition);
    experiment.experimentalData = ExperimentalData.deserialize(payload.experimentalData);
    experiment.user = User.deserialize(payload.user);
    return experiment;
  }

  /**
   * Marshalls an Experiment.
   *
   * @param experiment Experiment to marshall.
   * @return Marshalled Experiment.
   */
  public static serialize(experiment: Experiment): any {
    return {
      title: experiment.title,
      description: experiment.description,
      enzymes: experiment.enzymes.map(Enzyme.serialize),
      vessel: Vessel.serialize(experiment.vessel),
      condition: Condition.serialize(experiment.condition),
      experimentalData: ExperimentalData.serialize(experiment.experimentalData),
      user: User.serialize(experiment.user)
    };
  }

}
