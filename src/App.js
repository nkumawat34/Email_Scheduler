import axios from 'axios';
import React, { useState } from 'react';

const EmailScheduler = () => {
  const [senderEmail, setSenderEmail] = useState('');
 
  const [emailFields, setEmailFields] = useState([{ email: '', subject: '', body: '', timeDelay: '' }]);

 
  const addEmailField = () => {
    setEmailFields([...emailFields, { email: document.getElementById("reciever").value, subject: document.getElementById("subject").value, body: document.getElementById("body").value, timeDelay: document.getElementById("timedelay").value }]);
    
  };

  const scheduleEmails = () => {
   
    axios.get("https://api-email-scheduler.onrender.com/email",{
      params:{
        param1:emailFields
      }
    })
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Email Scheduler</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Write Sender's Email</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="senderEmail" className="form-label">Sender's Email:</label>
                  <input type="email" className="form-control" id="senderEmail" value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Add Emails to Schedule</h3>
              <form>
                
                  <div>
                    <div className="mb-3">
                      <label className="form-label">Receiver Email:</label>
                      <input type="email" className="form-control" id="reciever" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Subject:</label>
                      <input type="text" className="form-control" id="subject" required />
                    </div>
                    <div className="mb-3">
                      <label  className="form-label">Body:</label>
                      <input type="text" className="form-control" id="body" required />
                    </div>
                    <div className="mb-3">
                      <label  className="form-label">Time Delay (ms):</label>
                      <input type="number" className="form-control" id="timedelay" required />
                    </div>
                  </div>
              
              </form>
              <button className="btn btn-primary mt-4" onClick={addEmailField}>Add Email</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Scheduled Emails</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Receiver Email</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Time Delay (ms)</th>
                  </tr>
                </thead>
                <tbody>
                  {emailFields.map((email, index) => (
                    <tr key={index}>
                      <td>{email.email}</td>
                      <td>{email.subject}</td>
                      <td>{email.timeDelay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="btn btn-primary mt-4" onClick={scheduleEmails}>Schedule Emails</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailScheduler;
