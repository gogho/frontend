import React, { Component } from 'react';
import ProgrammingLanguage from './ProgrammingLanguage';

class VoteApp extends Component {
  render () {    
    return (
      <main role="main">
        <div class="jumbotron">
          <div class="container">
            <h1 class="display-3">Foode Vote v2</h1>
            ❤ DevOps 2020 v2.10.3
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <ProgrammingLanguage id="go" logo="go.png"/>
            </div>
            <div class="col-md-4">
              <ProgrammingLanguage id="java" logo="java.png"/>
            </div>
            <div class="col-md-4">
              <ProgrammingLanguage id="nodejs" logo="nodejs.png"/>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default VoteApp;