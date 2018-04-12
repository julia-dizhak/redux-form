import { reduxForm } from 'redux-form';
import ContactForm from './Form';
import { compose } from 'redux';

export default compose(
    reduxForm({
        // a unique name for the form
        form: 'contact-form'
    })
)(ContactForm);
