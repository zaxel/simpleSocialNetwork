import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {RenderFieldInput} from './../common/FormsControls/FormsControls';
import {required, maxLength} from './../../utils/validators/Validators';

const maxLength15 = maxLength(15);

const LoginForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} component={RenderFieldInput} validate={[required, maxLength15]} name={'login'}/>
            </div>
            <div>
                <Field placeholder={'password'} component={RenderFieldInput} validate={[required, maxLength15]} name={'pass'}/>
            </div>
            <div> 
                <Field type={'checkbox'} component={'input'} name={'rememberMe'}/>remember me                
            </div>
            <div>
                <button>LOGIN</button>
            </div>
        </form>
    );

}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) =>{
    const onSubmit = (formData) =>{
        console.log(formData);
    }

    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );

}

export default Login;