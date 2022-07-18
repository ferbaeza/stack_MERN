import React, { Component } from 'react';

class App extends Component {
    
    addTask(e){
        console.log('Adding Task')
        e.preventDefault();
    }
    render(){
        return (
          <div>
            <nav className='grey darken-2'>
              <div class="nav-wrapper ">
                <a href="/" class="center brand-logo">
                  Logo
                </a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                  <li>
                    <a href="collapsible.html">Home</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className='container'>
                <div className='row'>
                    <div className='col s5'>
                        <div className='card'>
                            <div className='card-content'>
                                <form onSubmit={this.addTask}>
                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <input type="text" placeholder="Titulo"/>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <textarea placeholder='Descripcion' className='materialize-textarea'></textarea>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <button class='btn grey darken-4 col s12'>
                                            Save
                                            <i class="material-icons right">send</i>
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>

            </div>

          </div>
        );
    }

}

export default App;