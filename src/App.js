/*
import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div>
      <center>
     <form>
      <fieldset>
      <legend>BioData</legend>
         <label>Name : 
          <input type="name" name="name"/></label>
          <br></br>
          <br></br>
          <br></br>
         <label>Email :
          <input type="email" name="email"/></label>
          <br></br>
          <br></br>
          <br></br>
          <label>Phone Number :
            <input type="number" name="number"/>
          </label>
          <br></br>
          <br></br>
          <br></br>
          <label>Roll Number : <input type="text" name="number"/></label>
          <br></br>
          <br></br>
          <br></br>
          <label>DOB : <input type="date" name="number"/></label>
          <br></br>
          <br></br>
          <label>gender : <input type="radio" id="gender" name ="gender" value="Male"/>Male</label>
          <input type="radio" id="gender" name ="gender" value="Female"/>Female
          <br></br>
          <br></br>
          <label>Hobbies : <input type="checkbox" name="hobbies" id="hobbies" value="Cricket"/>Cricket</label>
          <input type="checkbox" name="hobbies" id="hobbies" value="Drawing"/>Drawing
          <input type="checkbox" name="hobbies" id="hobbies" value="Sleeping"/>Sleeping
          <br></br>
          <br></br>
          <label>Select your State : </label>
          <select>
            <option value="TamilNadu">TamilNadu</option>
            <option value="India">India</option>
            <option value="Asia">Asia</option>
            <option value="World">World</option>
          </select>
          <br></br>
          <br></br>
          <label>Comments : </label>
          <textarea rows="10" cols="30"></textarea>
          <br></br>
          <br></br>
          <button>Submit</button>

      </fieldset>
     </form>
      </center>

    </div>
  )
}
*/
// import SignInSide from "./Component/Day6/Demo";

import ComponentLifeCycle from "./Component/Day 8/ComponentLifeCycle";

// import Car from "./Component/Day 8/Car";
// import ErrorBoundary1 from "./Component/Day 8/ErrorBoundary1";


// import ArrowFunction from "./Component/ArrowFunction.js";
// import ClassComponent from "./Component/ClassComponent.js";
// import FunctionalComponent from "./Component/FunctionalComponent.js";
// import OneExport from "./Component/OneExport.js";
// import PropsFunctional from "./Props.js/PropsFunctional.js";
// import PropsClass from "./Props.js/PropsClass.js";
// import PropsFunctionalEx1 from "./Props.js/PropsFunctionalEx1.js";
// import ArrowProps from "./Props.js/ArrowProps.js";
// import StateClassCom from "./Props.js/StateClassCom.js";
// import StateFunction from "./Props.js/StateFunction.js";
// import StateHoldObject from "./Props.js/StateHoldObject.js";
// import Parent from "./Props.js/ParentChildCommunication.js";
// import TwoWayBinding from "./Props.js/TwoWayBinding.js";
// import DynamicRendering from "./Props.js/DynamicRendering.js";
// import List from "./Component/Day6/List.js";
// import BasicButtons from "./Component/Day6/Demo.js";


export default function App()
{
  return (
    <div>
      {/* <FunctionalComponent/>
      <ClassComponent/>
      <OneExport/>
      <ArrowFunction/>
      <PropsFunctional name = "Akash" degree = "IT"></PropsFunctional>
      <PropsClass college = "SKCT"/>
      <PropsFunctionalEx1 college = "IRTT" place = "Erode"/>
      <ArrowProps place = "Svalbard"/>
      <StateClassCom></StateClassCom>
      <StateFunction/>
      <StateHoldObject/>
      <Parent></Parent>
      <TwoWayBinding/>
      <DynamicRendering/>
      <List/> */}
      {/* <BasicButtons></BasicButtons> */}
      {/* <StandardImageList/> */}
      {/* <BasicButtons/> */}
      {/* <SignInSide/> */}
      {/* <ErrorBoundary1>
        <Car carName="Thar"></Car>
      </ErrorBoundary1> */}

      <ComponentLifeCycle></ComponentLifeCycle>
    </div>
  )
}