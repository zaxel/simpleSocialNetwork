import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {RenderFieldInput, CreateField} from './../common/FormsControls/FormsControls';
import {required, maxLength} from './../../utils/validators/Validators';
import { connect } from 'react-redux';
import {login, logout} from './../../redux/AuthReducer'
import { Redirect } from 'react-router-dom';
import classes from './../common/FormsControls/FormsControls.module.css';

const maxLength25 = maxLength(25);

const LoginForm = ({handleSubmit, error, captchaUrl}) =>{
    return (
        <form onSubmit={handleSubmit}>
            {CreateField('email', RenderFieldInput, [required, maxLength25], 'email')}
            {CreateField('password', RenderFieldInput, [required, maxLength25], 'pass', 'password')}
            {CreateField(null, 'input', [], 'rememberMe', 'checkbox', null, 'remember me')}
            
            {captchaUrl && <img src={captchaUrl} alt="captcha"></img>}
            {captchaUrl && <div>{CreateField('please enter the symbols', RenderFieldInput, [required], 'captchaInput')}</div>}
            {error && <div className={classes.error}> {error} </div>}
            <div>
                <button>LOGIN</button>
            </div>
        </form>
    );

}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) =>{
    const onSubmit = (formData) =>{
        // console.log(formData);
        props.login(formData.email, formData.pass, formData.rememberMe, formData.captchaInput)
    }

    if (props.isAuth){
        return (<Redirect to={'/profile'}/>)
    }

    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </>
    );

}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login}) (Login);