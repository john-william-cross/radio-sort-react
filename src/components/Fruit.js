import React from "react";
import { addExclamationPoint } from "../utils/helpers";

export default function Fruit(props) {
   console.log("The props we passed from the parent component: ", props);
   return (
      <h1>
         {props.fruit.name}
         {/* example of adding a function */}
         {addExclamationPoint()}
      </h1>
   );
}
