import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import DisplayMountain from './DisplayMountain';
import DisplayBeach from './DisplayBeach';
import DisplayBirds from './DisplayBirds';
import DisplayFood from './DisplayFood';
import { useState } from 'react';
import { useRef } from 'react';
function App() {

  // Setting the value true and false for the button so that when particular button get selected,div can set the image of that only 
  // like when mountain button get clicked the image of only mountain can be visible , achieved this by using usestate function where we 
  // set the all image false except the domain one 
  const[showAll,setShowAll]=useState(true);
const All=()=>{
  setShowAll(true);
  setShowMountain(false);
     setShowBeach(false);
     setShowBirds(false);
     setShowFood(false);
}
  const[showMountain,setShowMountain]=useState(false);
  const Mountain =()=>{
    setShowAll(false);
     setShowMountain(true);
     setShowBeach(false);
     setShowBirds(false);
     setShowFood(false);
  }
  const[showBeach,setShowBeach]=useState(false);
  const Beach =()=>{
    setShowAll(false);
     setShowBeach(true);
     setShowBirds(false);
     setShowFood(false);
     setShowMountain(false);

  }
  const[showFood,setShowFood]=useState(false);
  const Food =()=>{
     setShowFood(true);
     setShowBeach(false);
     setShowBirds(false);
    setShowAll(false);
     setShowMountain(false);
  }
  const[showBirds,setShowBirds]=useState(false);
  const Birds =()=>{
     setShowBirds(true);
     setShowBeach(false);
     setShowAll(false);
     setShowFood(false);
     setShowMountain(false);
  } 
    // in below code we use useRef to get the input value of the searchbox
   const searchBoxref=useRef(null);
  const Result =()=>{
    const innerhtml=searchBoxref.current.value;
    if(innerhtml==="Mountain" || innerhtml==="mountain")
     Mountain();
     else if(innerhtml==="Beach" || innerhtml==="beach") Beach();
     else if(innerhtml==="Birds" || innerhtml==="birds") Birds();
     else if(innerhtml==="Food" || innerhtml==="food")  Food();
     else return(
      document.getElementById("root").innerHTML="<h1>Sorry item not found</h1>"
     )
    }
    
  
  return (
    <div className="App">
      {/* Title */}
     <h1>Snap Shot</h1>

     {/* Search button */}
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Collapse id="navbarScroll">
       <input type='text' ref={searchBoxref}/>
            <Button onClick={Result} variant="outline-success">Search</Button>
         
          </Navbar.Collapse>
          </Container>
    </Navbar>
  

  {/* // Filter button
  //Categories */}
  <div id='categories' style={{marginTop:"12px", backgroundColor:"purple", height:"100px"}}>
  <button id='btn' onClick={Mountain}>Mountain</button>
  <button id='btn' onClick={Beach}>Beach</button>
  <button id='btn' onClick={Birds}>Birds</button>
  <button id='btn' onClick={Food}>Food</button>
  <button id='btn' onClick={All}>All</button>
  </div>

  {/* Div where we show the image */}
  <div id='root'>
  {/* By this we want to show the all image initially */}
     {showAll && <div id='all'>   
      <DisplayBeach/>
      <DisplayBirds/>
      <DisplayFood/>
      <DisplayMountain/>
      </div>}
    {showMountain && <div id='item'> <DisplayMountain/></div>}  
    {showBirds && <div id='item'> <DisplayBirds/></div>}
    {showFood && <div id='item'> <DisplayFood/></div>}
    {showBeach && <div id='item'> <DisplayBeach/></div>}
    
  
  </div>
    </div>
    
  );
}

export default App;
