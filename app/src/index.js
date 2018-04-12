import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore, combineReducers, compose as reduxCompose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Values } from "redux-form-website-template";
import registerServiceWorker from './registerServiceWorker';

//import FormContainer from './simple-form/FormContainer';
import ContactForm from './simple-form/Form';

//import SyncValidationForm from './sync-validation/SyncFormContainer';
import SyncValidationForm from './sync-validation/SyncForm';

import showResults from './utils/showResults';

const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer
});

const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(rootReducer);

const onSubmit = (data) => {
    console.log(data)
}
// const FormContainerComponent = (props) => {
//     return <FormContainer onSubmit={onSubmit} {...props} />;
// }
    
render(
    <Provider store={store}>

        {/* <div className="wrap" style={{ padding: 15 }}>
            <h2>Simple Form</h2>
            <ContactForm onSubmit={showResults} />
            <Values form="contact-form" />
        </div> */}

        <div className="wrap" style={{ padding: 15 }}>
            <h2>Synchronous Validation Form</h2>
            <SyncValidationForm onSubmit={showResults} />
            <Values form="sync-validation-form" />
        </div>

        {/* <div>
            <h1>Simple Form</h1>
            <Router>
                <Route exact path='/simple-form' component={FormContainerComponent} />
            </Router>


            <div className="values">
                <Values form="contact-from" />
            </div>
        </div>     */}
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();
