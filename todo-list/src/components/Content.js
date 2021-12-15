import React, {Component} from 'react';

class Content extends Component {

  constructor(props) {
    super(props);
    this.task = React.createRef();
  }

  render() {
      return (
          <div className="row">
            <form onSubmit={(event) => {
              event.preventDefault();
              this.props.createTask(this.task.current.value);
              this.task.current.value = '';
            }}>
              <div className="form-group">
                <textarea 
                className="form-control" 
                id="TaskContent" 
                rows="3"
                placeholder="Add task..."
                ref={this.task}
                required
                >
                </textarea>
              </div>
              <div className="form-group row mt-4">
                <div className="col-sm-3">
                  <button type="submit" className="btn btn-primary">Create Task</button>
                </div>
              </div>
            </form>

            <br/>

            <div className="mt-5">
              <h2>
                Task List
              </h2>
            </div>

            <div className="mt-2">
              <ul className="list-group">
                {this.props.tasks.map((task, idx) => {
                  return(
                    <div key={idx}>
                      <li className="list-group-item">
                        <div className="row">
                          <div className="col-sm-1 text-center check-box">
                            <input
                            type="checkbox" 
                            name={task.Id}
                            defaultChecked={task.Done}
                            onClick={(event) => {
                              // call the markAsDone method from props
                              let taskId = event.target.name;
                              this.props.markAsDone(taskId)
                            }}
                            />
                          </div>
                          <div className="col content-class">
                            {task.Content}
                          </div>
                        </div>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
      )
  }
}

export default Content;