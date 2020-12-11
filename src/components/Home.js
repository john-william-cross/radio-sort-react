import React from "react";
import "../style/master.scss";
import Fruit from "../components/Fruit";
import "../style/master.scss";
// importing from data folder
import { fruits } from "../data/fruits";

console.log("Here's the list of fruits: ", fruits);

// to add local state to a functional component, change it to a class

export default class Home extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         fruits: fruits,
         fruitOrder: "A-Z",
      };
      // console.log(props);
   }

   setFruitOrder(e) {
      console.log(e.target.value);
      this.setState({ fruitOrder: e.target.value });
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
                        name="fruit-order"
                        id="a-z"
                        value="A-Z"
                        checked={this.state.fruitOrder === "A-Z"}
                        onChange={(e) => {
                           this.setFruitOrder(e);
                        }}
                     />
                     <label className="form-check-label" htmlFor="A-Z">
                        A-Z
                     </label>
                  </div>
                  <div className="form-check form-check-inline">
                     <input
                        className="form-check-input"
                        type="radio"
                        name="fruit-order"
                        id="z-a"
                        value="Z-A"
                        checked={this.state.fruitOrder === "Z-A"}
                        onChange={(e) => {
                           this.setFruitOrder(e);
                        }}
                     />
                     <label className="form-check-label" htmlFor="z-a">
                        Z-A
                     </label>
                  </div>

                  {this.state.fruits.map((fruit) => {
                     return <Fruit fruit={fruit} key={fruit.id} />; // fruit is being passed as props of the Fruit component. Passing fruit like this {fruit} passes all properties of a fruit object
                  })}
               </div>
            </div>
         </div>
      );
   }
}
