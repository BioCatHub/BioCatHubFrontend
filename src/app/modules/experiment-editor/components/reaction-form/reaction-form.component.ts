import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ExperimentFormService} from '../../services/experiment-form.service';
import {Reaction} from '../../../../models/reaction';
import {ReactionService} from '../../../../services/reaction.service';

// TODO set reaction value = name?
// TODO set educts and products in extra table

@Component({
  selector: 'bch-reaction-form',
  templateUrl: './reaction-form.component.html',
  styleUrls: ['./reaction-form.component.scss']
})
export class ReactionFormComponent implements OnInit {

  @Input() form: FormGroup;

  brendaReactions: Reaction[] = [];
  brendaReactionsLoading = false;

  constructor(private experimentFormService: ExperimentFormService,
              private reactionService: ReactionService) {
  }

  ngOnInit(): void {
    this.form.get('biocatalyst')?.valueChanges.subscribe((biocatalyst: FormGroup) => {
      if (biocatalyst.get('name')?.value) {
        this.loadReactions(biocatalyst.get('name')?.value);
      }
    });
    this.form.get('selectedReaction')?.valueChanges.subscribe(selectedReaction => {
      if (selectedReaction) {
        this.reactionService.getReaction(selectedReaction.id).subscribe(reactionDetail => {
          console.log(reactionDetail);
        });
      }
    });
  }

  getBiocatalysts(): FormControl[] {
    const enzymesForm = this.experimentFormService.getExperimentFormSubGroup('biocatalyst');
    return ((enzymesForm.get('enzymes') as FormArray).controls as FormControl[]);
  }

  loadReactions(ecNumber: string) {
    this.brendaReactionsLoading = true;
    this.reactionService.getReactionList(ecNumber).subscribe(reactions => {
      this.brendaReactions = reactions;
      this.brendaReactionsLoading = false;
    });
  }

}
