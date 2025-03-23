import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

export default function Friends({title, description, completed, onToggleCompleted}) {
    
        let descriptionText = (!description) ? 'Recent Friend' : description;
        let completedText = (completed) ? 'Completed' : 'Not Completed';
        let buttonClass = `btn btn-${(completed) ? 'success' : 'danger'}`;
            

        return (
            
          <div className="friends-list p-3 mb-5 d-flex justify-content-between rounded">
              <div>
                <h5>{title}</h5>
                <p>{descriptionText}</p>
              </div>

              <button 
                  className={buttonClass}
                  onClick={() => onToggleCompleted()}
              >{completedText}</button>
          </div>
                  
        );
    }
