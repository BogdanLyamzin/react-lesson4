import {Component} from "react";

import FormField from "../../../../shared/components/FormField/FormField";

import styles from "./RegisterForm.module.css";

import {fields} from "./fields";

import {initialState} from "./initialState";
class RegisterForm extends Component {

    state = {...initialState}

    handleChange = ({target})=>{
        const {name, value, checked} = target;
        this.setState({
            [name]: name === fields.agreeToTerms.name ? checked : value
        });
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({...initialState});
    }

    render(){

        return (
            <form>
                <FormField {...fields.username} value={this.state.username} onChange={this.handleChange} />
                <FormField {...fields.email} value={this.state.email} onChange={this.handleChange} />
                <FormField {...fields.password} value={this.state.password} onChange={this.handleChange} />
                <FormField {...fields.repeatPassword} value={this.state.repeatPassword} onChange={this.handleChange} />
                <FormField {...fields.agreeToTerms} value={this.state.agreeToTerms} checked={this.state.agreeToTerms} onChange={this.handleChange} />
                <FormField {...fields.submit} />
            </form>
        )
    }
}

export default RegisterForm;