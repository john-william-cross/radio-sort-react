import React from "react";
import "../style/master.scss";
import Fruit from "../components/Fruit";
import "../style/master.scss";
// importing from data folder
import { fruits } from "../data/fruits";

console.log("Here's the list of fruits: ", fruits);

// to add local state to a functional component, change it to a class

export default class Home extends React.Component {
   constructor() {
      super();
      this.state = {};
   }

   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-12 mt-4">
                  <div className="form-check form-check-inline">
                     <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="alphabeticalAsc"
                        value="A-Z"
                     />
                     <label
                        className="form-check-label"
                        htmlFor="alphabeticalAsc"
                     >
                        A-Z
                     </label>
                  </div>
                  <div className="form-check form-check-inline">
                     <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="alphabeticalDesc"
                        value="Z-A"
                     />
                     <label
                        className="form-check-label"
                        htmlFor="alphabeticalDesc"
                     >
                        Z-A
                     </label>
                  </div>

                  {fruits.map((fruit) => {
                     return <Fruit fruit={fruit} key={fruit.id} />; // fruit is being passed as props of the Fruit component. Passing fruit like this {fruit} passes all properties of a fruit object
                  })}
               </div>
            </div>
         </div>
      );
   }
}
