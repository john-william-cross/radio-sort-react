import React from "react";

function Fruit(props) {
   console.log(props);
   return (
      <div>
         <h4 className="text-primary">
            {props.fruit.name} ({props.fruit.rating})
         </h4>
      </div>
   );
}

export default Fruit;
//test comment
