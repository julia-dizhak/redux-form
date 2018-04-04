# redux-form

##
reducer - 

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