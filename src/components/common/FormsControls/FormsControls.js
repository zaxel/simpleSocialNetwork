import React from 'react';
import classes from './FormsControls.module.css';
import { Field } from 'redux-form';

export const RequiredFieldTextarea = ({input, type, meta: { touched, error, warning } }) => (
  <div>
    <textarea {...input} placeholder={'some text from formsControls'} type={type} />
    {touched &&
      ((error && <span className={classes.error}>{error}</span>) ||
        (warning && <span className={classes.warning}>{warning}</span>))}
  </div>
)
 
export const RenderFieldInput = ({input, type, meta: { touched, error, warning }, ...props }) => (
  <div>
    <input {...input} {...props} type={type} />
    {touched &&
      ((error && <span className={classes.error}>{error}</span>) ||
        (warning && <span className={classes.warning}>{warning}</span>))}
  </div>
)
 
export const CreateField =(placeholder, component, validate, name, type ={}, text ='') => {
  return(
    <div>
      <Field placeholder={placeholder} component={component} validate={validate} name={name} type={type}/>{text}
    </div>
  )
}