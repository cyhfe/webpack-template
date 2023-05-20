// import _ from "lodash";
// import Print from "./print";
// import { shake } from "./shake";

// function component() {
//   const element = document.createElement("div");
//   const btn = document.createElement("button");

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(["Hello", "webpack"], " ");
//   btn.innerHTML = "Click me and check the console!";
//   element.onclick = Print.bind(null, "Hello webpacks!");

//   element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());

import { bake } from "./shake";

bake();
