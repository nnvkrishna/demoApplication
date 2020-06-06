import React, { Component } from 'react';


export default class MyTestComponent extends Component {


    constructor() {
        super();

    }

   


    render() {

        var name = this.props.data;
        var name2 = this.props.surname
    

        return (

            <div>

                <h1 style={{color:'red'}}>{name2}</h1>


            </div>

        )


    }





}