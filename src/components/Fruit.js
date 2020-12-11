import React from "react";
import { addExclamationPoint } from "../utils/helpers";
import format from "date-fns/format";

export default function Fruit(props) {
   console.log("The props we passed from the parent component: ", props);
   return (
      <div>
         <h1>
            {props.fruit.name}
            {/* example of adding a function */}
            {addExclamationPoint()}
         </h1>
         <p>{format(props.fruit.createdAt, "MMM. d, yyyy")}</p>
      </div>
   );
}
