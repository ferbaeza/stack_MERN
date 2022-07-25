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
    e.preventDefault();
    if(this.state._id){
        fetch(`/api/updatetask/${this.state._id}`,{
            method:"PUT",
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description
            }),
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
        })
        .then(res=>res.json())
        .then(data=>{
            window.M.toast({html: "Tarea actualizada correctamente"});
            this.setState({title:'', description:'', _id:''});
            this.fetchTasks();
        })

    }else{
    fetch("/api/newtask", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.M.toast({ html: `${this.state.title} guardada correctamente` });
        this.setState({ title: "", description: "" })
        this.fetchTasks();
      })
      .catch((err) => console.error(err))
  }
}

  deleteTask(id) {
    console.log(`La tarea es la ${id}`);
    console.log(`/api/deletetask/${id}`);
    fetch(`/api/deletetask/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        M.toast({ html: `Tarea eliminada correctamente` });
        this.fetchTasks();
      });
  }

  editTask(id){
    console.log(`La tarea es la ${id}`);
    fetch(`/api/gettaskbyid/${id}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        this.setState({
            title:data.data.title,
            description:data.data.description,
            _id:data.data._id
        })

    })

  }

  fetchTasks() {
    fetch("/api/gettask")
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
              Simple ToDo App
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
            </ul>
          </div>
        </nav>
        
        <div className="container m4" >
          <div className="row" >
            <div className="col s5">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={this.addTask}>
                    <div className="row">
                        <div className="input-field col s12">
                        <input
                          id="titulo"
                          class="input-field"
                          name="title"
                          onChange={this.handleChange}
                          value={this.state.title}
                          type="text"
                          placeholder="Titulo"
                          />

                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea
                          id="descripcion"
                          name="description"
                          value={this.state.description}
                          onChange={this.handleChange}
                          className="materialize-textarea"
                          placeholder="Descripcion de la Tarea"

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
            <div className="col s7">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tasks.map((task) => {
                  return (
                    <tr key={task._id}>
                      <td>{task.title}</td>
                      <td>{task.description}</td>
                      <td>
                        <button
                          onClick={() => this.deleteTask(task._id)}
                          className="btn red darken-4"
                        >
                          <i className="material-icons">delete</i>
                        </button>
                        <button
                          onClick={() => this.editTask(task._id)}
                          className="btn yellow lighten-1"
                          style={{ margin: "4px" }}
                        >
                          <i className="material-icons">edit</i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
/**
 * <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tasks.map((task) => {
                  return (
                    <tr key={task._id}>
                      <td>{task.title}</td>
                      <td>{task.description}</td>
                      <td>
                        <button
                          onClick={() => this.deleteTask(task._id)}
                          className="btn red darken-4"
                        >
                          <i className="material-icons">delete</i>
                        </button>
                        <button
                          onClick={() => this.editTask(task._id)}
                          className="btn yellow lighten-1"
                          style={{ margin: "4px" }}
                        >
                          <i className="material-icons">edit</i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
 */