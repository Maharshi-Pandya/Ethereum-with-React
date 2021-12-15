import React, {Component} from 'react';

class Content extends Component {
    render() {
        return (
            <div className="row">
              <form>
                <div className="form-group">
                  <textarea 
                  className="form-control" 
                  id="TaskContent" 
                  rows="3"
                  placeholder="Add task...">
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

              <div className="mt-2 col-md-6">
                <ul className="list-group">
                  {this.props.tasks.map((task, idx) => {
                    return(
                      <div key={idx}>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-1 text-center">
                              <input type="checkbox" />
                            </div>
                            <div className="col">
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