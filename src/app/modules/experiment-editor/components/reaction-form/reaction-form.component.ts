import {AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ExperimentFormService} from '../../services/experiment-form.service';
import {Reaction} from '../../../../models/reaction';
import {ReactionService} from '../../../../services/reaction.service';
import {Subscription} from 'rxjs';
import {Reactant} from '../../../../models/reactant';

/**
 * A form component for editing a reaction.
 */
@Component({
  selector: 'bch-reaction-form',
  templateUrl: './reaction-form.component.html',
  styleUrls: ['./reaction-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReactionFormComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() form: FormGroup;

  brendaReactions: Reaction[] = [];
  brendaReactionsLoading = false;

  private selectedReactionValueChangesSubscription: Subscription;
  private biocatalystValueChangesSubscription: Subscription;

  constructor(private experimentFormService: ExperimentFormService,
              private fb: FormBuilder,
              private cdr: ChangeDetectorRef,
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
   * Makes sure the progress bar shows the correct value.
   */
  ngAfterViewInit() {
    this.cdr.detectChanges();
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

  /**
   * Sets the list of reactants in the form after a reaction has been selected from the dropdown.
   *
   * @param reaction Reactions from which to take the reactants.
   */
  setReactants(reaction: Reaction) {
    (this.form.get('reactants') as FormArray).clear();
    [...reaction.educts, ...reaction.products].map(reactant => {
      this.addReactant(reactant);
    });
  }

  /**
   * Adds a new reactant to the reactants array.
   *
   * @param reactant Reactant to add as FormGroup.
   */
  addReactant(reactant = new Reactant()) {
    const reactantControl = this.fb.group({
      name: [reactant.name, [Validators.required]],
      role: [reactant.role, [Validators.required]],
      supplier: [null],
      concentration: [null, [Validators.required]],
      unit: ['g/L', [Validators.required]],
      purity: [null],
      formula: [null, [Validators.required]],
      smiles: [reactant.smiles, [Validators.required]],
      inchi: [null],
    });
    (this.form.get('reactants') as FormArray).push(reactantControl);
  }

  /**
   * Deletes the reactant from the form array.
   *
   * @param reactant Reactant to delete.
   */
  deleteReactant(reactant: AbstractControl) {
    const reactants = this.form.get('reactants') as FormArray;
    for (let i = 0; i < reactants.length; i++) {
      if (reactants.at(i) === reactant) {
        reactants.removeAt(i);
        break;
      }
    }
  }

}
