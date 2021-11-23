import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ExperimentFormService} from '../../services/experiment-form.service';
import {Reaction} from '../../../../models/reaction';
import {ReactionService} from '../../../../services/reaction.service';
import {Subscription} from 'rxjs';

// TODO set educts and products in extra table

/**
 * A form component for editing a reaction.
 */
@Component({
  selector: 'bch-reaction-form',
  templateUrl: './reaction-form.component.html',
  styleUrls: ['./reaction-form.component.scss']
})
export class ReactionFormComponent implements OnInit, OnDestroy {

  @Input() form: FormGroup;

  brendaReactions: Reaction[] = [];
  brendaReactionsLoading = false;

  private selectedReactionValueChangesSubscription: Subscription;
  private biocatalystValueChangesSubscription: Subscription;

  constructor(private experimentFormService: ExperimentFormService,
              private fb: FormBuilder,
              private reactionService: ReactionService) {
  }

  /**
   * Subscribes to form events to react on changed values.
   */
  ngOnInit(): void {
    this.biocatalystValueChangesSubscription =
      this.form.get('biocatalyst')?.valueChanges.subscribe((biocatalyst: FormGroup) => {
        if (biocatalyst.get('name')?.value) {
          this.loadReactions(biocatalyst.get('name')?.value);
        }
      }) as Subscription;
    this.selectedReactionValueChangesSubscription =
      this.form.get('selectedReaction')?.valueChanges.subscribe(selectedReaction => {
        if (selectedReaction) {
          this.reactionService.getReaction(selectedReaction.id).subscribe(reactionDetail => {
            reactionDetail.value = selectedReaction.value; // Value is not given by reaction search route
            reactionDetail.id = selectedReaction.id; // ID is not given by reaction search route
            // If we didn't already set a name manually, we take the name from the fetched reaction
            if (!this.form.get('name')?.value) {
              this.form.get('name')?.setValue(reactionDetail.value);
            }
            this.setReactants(reactionDetail);
          });
        }
      }) as Subscription;
  }

  /**
   * Unsubscribes from Observables when the component is destroyed.
   */
  ngOnDestroy() {
    this.selectedReactionValueChangesSubscription.unsubscribe();
    this.biocatalystValueChangesSubscription.unsubscribe();
  }

  /**
   * Returns the list of available biocatalyst FormControls that are selected in the biocatalyst form.
   */
  getBiocatalysts(): FormControl[] {
    const enzymesForm = this.experimentFormService.getExperimentFormSubGroup('biocatalyst');
    return ((enzymesForm.get('enzymes') as FormArray).controls as FormControl[]);
  }

  /**
   * Loads all available reactions for the given EC number.
   *
   * @param ecNumber EC number to fetch reactions for.
   */
  loadReactions(ecNumber: string) {
    this.brendaReactionsLoading = true;
    this.reactionService.getReactionList(ecNumber).subscribe(reactions => {
      this.brendaReactions = reactions;
      this.brendaReactionsLoading = false;
    });
  }

  /**
   * Returns a list or reactant controls.
   */
  reactants(): FormControl[] {
    return ((this.form.get('reactants') as FormArray).controls as FormControl[]);
  }

  setReactants(reaction: Reaction) {
    [...reaction.educts, ...reaction.products].map(reactant => {
      const reactantControl = this.fb.group({
        name: [reactant.name],
        role: [reactant.role],
      });
      (this.form.get('reactants') as FormArray).push(reactantControl);
    });
    console.log(this.reactants());
  }

}
