import React from "react";
import "../style/master.scss";
import Fruit from "../components/Fruit";
import "../style/master.scss";
// importing from data folder
import { fruits } from "../data/fruits";

console.log("Here's the list of fruits: ", fruits);

export default function Home() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-2 offset-5 mt-4">
               <div className="form-check form-check-inline">
                  <input
                     className="form-check-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="alphabeticalAsc"
                     value="A-Z"
                  />
                  <label className="form-check-label" htmlFor="alphabeticalAsc">
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
                  return <Fruit fruit={fruit} key={fruit.id} />;
               })}
            </div>
         </div>
      </div>
   );
}
