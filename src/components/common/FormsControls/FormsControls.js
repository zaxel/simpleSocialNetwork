import React from 'react';
import classes from './FormsControls.module.css';

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
 

//   export default renderFieldTextarea;