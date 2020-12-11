import React from "react";
import { addExclamationPoint } from "../utils/helpers";
import format from "date-fns/format";

export default class Fruit extends React.Component {
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
