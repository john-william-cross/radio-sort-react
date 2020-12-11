import React from "react";

function Fruit(props) {
   console.log("The props we passed from the parent component: ", props);
   return <h1>{props.fruit.name}</h1>;
}

export default Fruit;
//test comment
