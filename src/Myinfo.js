import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Myinfo(){
  return(
    <div>
      <h>Deema Aalswiti</h>
      <p>16yo</p>
      <ul>
        <li>math</li>
        <li>programming</li>
        <li>chimestry</li>
      </ul>

    </div>
  )
}
ReactDOM.render(<Myinfo/>,document.getElementById("root"))
export default Myinfo