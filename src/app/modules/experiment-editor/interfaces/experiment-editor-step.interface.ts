/**
 * Defines the parts of an experiment editor step that are needed for the ngFor iterator in the template.
 */
export interface ExperimentEditorStep {
  formControlName: string;
  title: string;
  pathSegment: string;
}
