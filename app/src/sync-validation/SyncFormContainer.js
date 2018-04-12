import { reduxForm } from 'redux-form';
import SyncValidationForm from './SyncForm';
//import { compose } from 'redux';

export default reduxForm({
    form: 'sync-validation-form',  // a unique identifier for this form
    validate,                // <--- validation function given to redux-form
     warn                     // <--- warning function given to redux-form
})(SyncValidationForm)