
import * as React from 'react';
import Navbar from './components/navbar';
import './style.scss'

const App = () => {
  
  return (
      <div className="root">
        <Navbar />
      </div>
  )
}

export default App;


// Prompt: Assume that you have been given a CSV file of constituent data. 
// The header row is Email,FirstName,LastName,ZipCode. Create a web page that reads the data from a data store of your 
// choice and displays it using a simple React application.