import { useState } from "react";
import colors from "./ThemePattern";


const UsxThems = () => {
  const [newColor, setNewColor] = useState(colors[1])

 const nextThem = (movement: number) => {
  const currentIndex = colors.indexOf(newColor);
  let newIndex = currentIndex + movement;


  if (newIndex >= colors.length) {
    newIndex = newIndex % colors.length; 
  } else if (newIndex < 0) {
    newIndex = colors.length - 1;
  }

  setNewColor(colors[newIndex]);
}; 

    return { them: newColor, nextThem };

};
export default UsxThems;
