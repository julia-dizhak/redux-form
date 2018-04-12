# redux-form

## Translations
reducer - преобразователь

## Overview
To connect your React form components to your Redux store you'll need the following pieces from the redux-form package:

Redux Reducer: formReducer,
React HOC reduxForm() and <Field /> component.

reducer - 
formReducer	reducer	function that tells how to update the Redux store based on changes coming from the application; those changes are described by Redux actions;

reduxForm()	HOC - 
function that takes configuration object and returns a new function; use it to wrap your form component and bind user interaction to dispatch of Redux actions;

<Field /> -
component that lives inside your wrapped form component; use it to connect the input components to the redux-form logic;


### Examples

#### Simple (Contact) Form
The simplest form. Demonstrates how to attach standard inputs to Redux.

#### Synchronous Validation
How to add synchronous client-side validation to your form.
There are two ways to provide synchronous client-side validation to your form.

The first is to provide redux-form with a validation function that takes an object of form values and returns an object of errors. This is done by providing the validation function to the decorator as a config parameter, or to the decorated form component as a prop.

The second is to use individual validators for each field. See Field-Level Validation Example.