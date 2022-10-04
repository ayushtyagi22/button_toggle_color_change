import React, {useState} from 'react';
import './App.css';

function App() {

  const [classname1,setClassname1] = useState("general")
  const [status1,setStatus1] = useState(0)

  const handleClick1 = () => {
    if (status1 === 0) {
      setClassname1("general click1")
      setStatus1(1)
    }
    else {
      setClassname1("general click2")
      setStatus1(0)
    }
  }



  const [classname2,setClassname2] = useState("general")
  const [status2,setStatus2] = useState(0)

  const handleClick2 = () => {
    if (status2 === 0) {
      setClassname2("general click1")
      setStatus2(1)
    }
    else {
      setClassname2("general click2")
      setStatus2(0)
    }
  }

  return (
    <div className="App">
<div className={classname1}>Color of this div will change on clicking button</div><br/><br/>
<button onClick={handleClick1}>Click to change color of above div</button>

<br/><br/><br/><br/>

<div className={classname2} onClick={handleClick2}>Color of this div will change on clicking div itself</div>
    </div>
  );
}

export default App;
