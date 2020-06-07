import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {RenderFieldInput} from './../common/FormsControls/FormsControls';
import {required, maxLength} from './../../utils/validators/Validators';
import { connect } from 'react-redux';
import {login, logout} from './../../redux/AuthReducer'
import { Redirect } from 'react-router-dom';
import classes from './../common/FormsControls/FormsControls.module.css';

const maxLength25 = maxLength(25);

const LoginForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'} component={RenderFieldInput} validate={[required, maxLength25]} name={'email'}/>
            </div>
            <div>
                <Field placeholder={'password'} type={'password'} component={RenderFieldInput} validate={[required, maxLength25]} name={'pass'}/>
            </div>
            <div> 
                <Field type={'checkbox'} component={'input'} name={'rememberMe'}/>remember me                
            </div>
            {props.error && <div className={classes.error}> {props.error} </div>}
            
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
        props.login(formData.email, formData.pass, formData.rememberMe)
    }

    if (props.isAuth){
        return (<Redirect to={'/profile'}/>)
    }

    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );

}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login, logout}) (Login);