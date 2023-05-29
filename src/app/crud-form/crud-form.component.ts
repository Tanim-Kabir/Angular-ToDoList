import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent {
  textFieldPlaceholer: readonly string[] = ['Input Name Value', 'Search by Name', 'Delete by Name'];
  submitButtonPlaceholer: readonly string[] = ['Submit', 'Search', 'Edit', 'Delete'];
  textFieldValue: string = this.textFieldPlaceholer[0];
  submitButtonValue: string = this.submitButtonPlaceholer[0];

  checkboxValue: boolean = false;
  checkbox1Value: boolean = false;
  checkbox2Value: boolean = false;
  checkbox3Value: boolean = false;



  onSubmit() {
      this.textFieldValue = this.textFieldPlaceholer[1];
      this.submitButtonValue = this.submitButtonPlaceholer[1];
    // Perform any other actions upon form submission
  }
  onCheckboxChange(event: any, additionalValue: string) {
    if (this.checkbox1Value == true ){
      /*switch (additionalValue) {
        case 'Search':
          this.submitButtonValue = this.submitButtonPlaceholer[1];
          console.log('Checkbox value:', this.checkbox1Value);
          break;
        case 'Edit':
          this.submitButtonValue = this.submitButtonPlaceholer[2];
          console.log('Checkbox value:', this.checkbox2Value);
          break;
        case 'Delete':
          this.submitButtonValue = this.submitButtonPlaceholer[3];
          console.log('Checkbox value:', this.checkbox3Value);
          break;
      }*/
      console.log('Inside If', this.checkbox1Value, additionalValue);
    }
    else {
      //this.submitButtonValue = this.submitButtonPlaceholer[0];
      console.log('Outside If', this.checkbox1Value, additionalValue);
    }
    //console.log('Checkbox value:', this.checkbox1Value, additionalValue);
    //console.log('Additional value:', additionalValue);
  }

}
