import { useState, useEffect } from "react";
import React from "react";

import EventService from "./EventService";
import AccountService from "./AccountService";
const EventComponent = () => {
  const [eventData, setData] = useState([]);

  useEffect(() => {
    EventService.getData().then((res) => {
      //const responseData = await res.json();

      //console.log(res.data);
      setData(res.data);
    });
  }, []);

  // console.log(eventData);

  function saveOrUpdateEmployee(e) {
    e.preventDefault();
    let valueForm = {
      id: "ood_222",
      name: "to chuc D",
      address: "55555 address",
      startingTime: "2022-09-02T13:28:42.0461588",
      endingTime: "2022-09-02T13:28:42.0461588",
      host: "host",
      id_category: "01",
      description: "No Description",
      background: "No Background",
      totalTicket: 300,
      remainingTicket: 150,
    };
    //console.log("valueForm => " + JSON.stringify(valueForm));
    EventService.createEvent(valueForm).then((res) => {
      //this.props.history.push("/employees");
    });
    // step 5
    // if (this.state.id === "_add") {
    //   EventService.createEvent(valueForm).then((res) => {
    //     //this.props.history.push("/employees");
    //   });
    // }

    // else {
    //   EventService.updateEmployee(employee, this.state.id).then((res) => {
    //     this.props.history.push("/employees");
    //   });
    // }
  }

  function editAccount() {
    let valueEvent = { name: "tri njdfndjs", phone: "0923123213" };
    AccountService.updateEvent(valueEvent, "631309c5fc6d9b97d443a4a7")
      .then((res) => {
        console.log(res);
        console.log("thanh cong");
      })
      .catch(() => {
        console.log("that bai");
      });
  }
  function deleteEvent() {
    //let valueEvent = { name: "tri njdfndjs", phone: "0923123213" };
    EventService.deleteEvent("63138a8cfc6d9b97d46c4c66")
      .then((res) => {
        console.log(res);
        console.log("thanh cong");
      })
      .catch(() => {
        console.log("that bai");
      });
  }
  // console.log(Array.isArray(eventData));
  return (
    <div>
      <h2 className="text-center">Employees List</h2>
      <div className="row">
        <button
          className="btn btn-primary"
          // onClick={this.addEmployee}
        >
          {" "}
          Add Employee
        </button>
      </div>
      <br></br>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Employee First Name</th>
              <th> Employee Last Name</th>
              <th> Employee Email Id</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {eventData.map((data) => (
              <tr key={data.id}>
                <td> {data.name} </td>
                <td> {data.address}</td>
                <td> {data.host}</td>
                <td>
                  <button onClick={editAccount} className="btn btn-info">
                    Update{" "}
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    // onClick={deleteAccount}
                    onClick={deleteEvent}
                    className="btn btn-danger"
                  >
                    Delete{" "}
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    className="btn btn-info"
                  >
                    View{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card-body">
        <form>
          <div className="form-group">
            <label> First Name: </label>
            <input
              placeholder="First Name"
              name="firstName"
              className="form-control"
              //value={this.state.firstName}
              //onChange={this.changeFirstNameHandler}
            />
          </div>
          <div className="form-group">
            <label> Last Name: </label>
            <input
              placeholder="Last Name"
              name="lastName"
              className="form-control"
              //value={this.state.lastName}
              //onChange={this.changeLastNameHandler}
            />
          </div>
          <div className="form-group">
            <label> Email Id: </label>
            <input
              placeholder="Email Address"
              name="emailId"
              className="form-control"
              //value={this.state.emailId}
              //nChange={this.changeEmailHandler}
            />
          </div>

          <button className="btn btn-success" onClick={saveOrUpdateEmployee}>
            Save
          </button>
          <button
            className="btn btn-danger"
            //onClick={this.cancel.bind(this)}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        </form>
        <a href="https://accounts.google.com/o/oauth2/auth?scope=email&redirect_uri=http://localhost:8080/login-google&response_type=code&client_id=247629613749-2h4b2p8s0m20tlji6o3f3q3p9egp2jud.apps.googleusercontent.com&approval_prompt=force">
          Login With Google
        </a>
      </div>
    </div>
  );
};
export default EventComponent;
