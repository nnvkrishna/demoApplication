import React, { Component } from 'react';

import '../Login/login.scss';
import MyTestComponent from '../MyTest'

export default class LoginComponent extends Component {


    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            ProfileName: "krishna reddy",
            status: false
        }
    }



    signUp = () => {
        var val = this.state.email
        this.props.history.push('/signup', { data: val })
    }

    myFun = () => {
        this.setState({ name: "Reddy" })
        console.log("email", this.state.email);

    }

    active = () => {
        this.setState({ status: true })
    }

    inActive = () => {
        this.setState({ status: false })
    }




    render() {

        var data = "hello";

        return (

            <div>
                <h1>Login</h1>

                {/* <h2>My name is : {this.state.name}</h2> */}

                {/* <input type="test"
                    placeholder="Enter email"
                    // value={this.state.email}
                    // name='Email'
                    onChange={e => this.setState({ email: e.target.value })}

                />

                <br></br>

                <MyTestComponent
                    data={this.state.ProfileName}
                    surname="nandyala"
                /> */}

<div className = "main1">

    <div className="signin">
        jhasldhasdh
    </div>
    
</div>

<div className = "main2">
<div className="signin">
        jhasldhasdh
    </div>
    </div>
                {/* <h3>{data}</h3> */}

                {/* <button type="button" className="btn btn-primary signin"
                    onClick={this.myFun}
                >myName</button> */}

                <h2 className={this.state.status ? "active-style" : "inactive-style"}>MY Status</h2>

                <button type="button" className="btn btn-primary signin"
                    onClick={this.active}
                >Active</button>&nbsp;

                <button type="button" className="btn btn-primary signin"
                    onClick={this.inActive}
                >InActive</button>

                <br></br>
                <br></br>

                {/* <button type="button" className="btn btn-primary signin"
                    onClick={this.signUp}
                >Signup</button> */}

            </div>










        )


    }





}