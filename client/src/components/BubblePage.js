import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from '../Util/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import {getColorsFetch} from '../Util/getColorsFetch';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  
  useEffect(() => {
    getColorsFetch()
    .then(res => {
      setColorList(res.data); 
    })
    .catch(err => console.log(err));
  }, [])
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
