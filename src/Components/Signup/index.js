import React, { Component } from 'react';

import '../Signup/signup.scss';

export default class SignUpComponent extends Component {


    constructor() {
        super();
this.state={
    onactive : false 
}
    }

   


    render() {

        const data  = this.props.location.state.data
console.log("datatatat", this.props.location);



        return (

            <div>
<h2>{data}</h2>
                <h2 className= "_welcome-style">Welcome to Signup page</h2>


            </div>

        )


    }





}