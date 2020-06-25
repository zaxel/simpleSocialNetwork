import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {RenderFieldInput, CreateField} from './../common/FormsControls/FormsControls';
import {required, maxLength} from './../../utils/validators/Validators';
import { connect } from 'react-redux';
import {login, logout} from './../../redux/AuthReducer'
import { Redirect } from 'react-router-dom';
import classes from './Login.module.css';

const maxLength25 = maxLength(25);

const LoginForm = ({handleSubmit, error, captchaUrl}) =>{
    return (
        <div className={classes.loginForm}>
            <form onSubmit={handleSubmit}>
                {CreateField('email', RenderFieldInput, [required, maxLength25], 'email')}
                {CreateField('password', RenderFieldInput, [required, maxLength25], 'pass', 'password')}
                <label className={classes.loginLabel}>
                    {CreateField(null, 'input', [], 'rememberMe', 'checkbox', null, ' remember me')}
                </label>
                
                {captchaUrl && <img className={classes.captchaImg} src={captchaUrl} alt="captcha"></img>}
                {captchaUrl && <div>{CreateField('please enter the symbols', RenderFieldInput, [required], 'captchaInput')}</div>}
                {error && <div className={classes.error}> {error} </div>}
                <div>
                    <button>LOGIN</button>
                </div>
            </form>
        </div>
       
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
        <div className={classes.loginFormContainer}>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );

}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login}) (Login);