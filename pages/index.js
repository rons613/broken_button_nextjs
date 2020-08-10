import React, { Component, Fragment } from 'react';
import Head from "next/head";
import { Link, Router } from '../routes';

class HomePage extends Component {

  static async getInitialProps(ctx) {
    return { someProp: 'a random prop'};
  }

  state = {
    someState: 'some state'
  };

  changeSomething(clickEvent, oldState) {

    console.log('Button was clicked');

    clickEvent.preventDefault();

    let newState;

    if(oldState == 'some state') {
      newState = 'another state';
    } else {
      newState = 'some state';
    }

    this.setState({ someState: newState });
  }


  render() {

    return (

      <Fragment>

        <Head>
          <title>
            The Home Page
          </title>
        </Head>

        <p>Home Page State: {this.state.someState}</p>
        <p>Initial Prop: {this.props.someProp}</p>

        <div>
          <button onClick={(e) => this.changeSomething(e, this.state.someState)}>
            CHANGE STATE PARAMETER
          </button>
        </div>

      </Fragment>
    );
  }
}

export default HomePage;
