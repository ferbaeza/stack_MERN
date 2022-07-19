import React, { Component } from "react";
const URL = "http://localhost:3000/api/";
class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      _id: "",
      tasks: [],
    };
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  addTask(e) {
    //console.log(this.state);
    e.preventDefault();
    fetch(URL+'newtask',{
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          window.M.toast({html: `Tarea ${this.state.title} guardada`});
          this.setState({title: '', description: ''});
          this.fetchTasks();
        })
        .catch(err => console.error(err));
    }

    deleteTask(id){
        console.log(`La tarea es la ${id}`)
        console.log(`${URL}deletetask/${id}`)
    }
    
    editTask(id){
        console.log(`La tarea es la ${id}`)

    }
    // deleteTask(id){
    //     fetch(URL+'deletetask/'+id,{
    //         method: 'DELETE',
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json'
    //         }
    //       })
    //         .then(res => res.json())
    //         .then(data => {
    //           console.log(data);
    //           M.toast({html: 'Task deleted'});
    //           this.fetchTasks();
    //         });
    //     }
    //   }
  

  fetchTasks() {
    fetch(URL + "gettask")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ tasks: data.data });
        console.log(this.state.tasks);
      });
  }

  componentDidMount() {
    this.fetchTasks();
  }

  render() {
    return (
      <div>
        <nav className="cyan darken-4">
          <div class="nav-wrapper ">
            <a href="/" class="center brand-logo">
              Logo
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col s5">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={this.addTask}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          name="title"
                          onChange={this.handleChange}
                          type="text"
                          placeholder="Titulo"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea
                          name="description"
                          onChange={this.handleChange}
                          placeholder="Descripcion"
                          className="materialize-textarea"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <button class="btn cyan darken-3 col s12">
                        Save
                        <i class="material-icons right">send</i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div>
          <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  { 
                    this.state.tasks.map(task => {
                      return (
                        <tr key={task._id}>
                          <td>{task.title}</td>
                          <td>{task.description}</td>
                          <td>
                            <button onClick={() => this.deleteTask(task._id)} className="btn red darken-4">
                              <i className="material-icons">delete</i> 
                            </button>
                            <button onClick={() => this.editTask(task._id)} className="btn yellow lighten-1" style={{margin: '4px'}}>
                              <i className="material-icons">edit</i>
                            </button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
