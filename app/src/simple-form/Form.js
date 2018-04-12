import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
// const handleSubmit = (data) => {
//     console.log(data)
// }

function ContactForm(props) {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ padding: 15 }}>
                <label>
                    First Name
                    <Field 
                        name="firstName" 
                        component="input" 
                        placeholder="First Name"
                        type="text" 
                    />
                </label>
            </div>

            <div>
                <label>
                    Last Name
                    <Field
                        name="lastName"
                        component="input"
                        type="text"
                        placeholder="Last Name"
                    />
                </label>
            </div>

            <div>
                <label>
                    Email
                    <Field
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Email"
                    />
                </label>
            </div>

            <div>
                <label>Sex</label>
                <div>
                <label>
                    <Field name="sex" component="input" type="radio" value="male" />
                    {' '}
                    Male
                </label>
                <label>
                    <Field name="sex" component="input" type="radio" value="female" />
                    {' '}
                    Female
                </label>
                </div>
            </div>

            <div>
                <label>Favorite Color</label>
                <div>
                    <Field name="favoriteColor" component="select">
                        <option />
                        <option value="ff0000">Red</option>
                        <option value="00ff00">Green</option>
                        <option value="0000ff">Blue</option>
                    </Field>
                </div>
            </div>

            <div>
                <label>
                    Employed
                    <Field
                        name="employed"
                        id="employed"
                        component="input"
                        type="checkbox"
                    />
                </label>    
            </div>

            <div>
                <label>
                    Notes
                    <Field name="notes" component="textarea" />
                </label>
            </div>

            <div>
                <button 
                    type="submit" 
                    disabled={pristine || submitting}>
                    Submit
                </button>
                <button 
                    type="button" 
                    disabled={pristine || submitting} 
                    onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'contact-form', // a unique identifier for this form
  })(ContactForm);
  