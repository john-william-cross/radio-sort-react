import React from "react";
import { addExclamationPoint } from "../utils/helpers";
import format from "date-fns/format";

export default class Fruit extends React.Component {
   // constructor method always fires first
   constructor(props) {
      super(props); // super allows access to this, which gives us access to the entire component
      // this.state = {
      //    isHoveredOver: false,
      // }; // the state of this individual project component
   }

   // setIsHoveredOver() {
   //    //named to tell me which piece/property of state is set

   //    console.log("Ok, let's change the isHoveredOver state to true");
   // }

   render() {
      console.log(
         "The props we passed from the parent component: ",
         this.props
      );
      return (
         <div>
            <h1>
               {this.props.fruit.name}
               {/* example of adding a function */}
               {addExclamationPoint()}
            </h1>
            <p>{format(this.props.fruit.createdAt, "MMM. d, yyyy")}</p>
         </div>
      );
   }
}

// you can't add state to a functional component, you have to convert it to a class.

// remember when you say this.props, you're referring to the whole class, which has access to the props
