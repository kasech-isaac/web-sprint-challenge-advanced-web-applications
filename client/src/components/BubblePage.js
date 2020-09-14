import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { axiosWithAuth } from "./util/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

// fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
class  BubblePage extends Component {
  state = {
    colorList:[]
  };
componentDidMount (){
  this.clolerLists();
}
  
  clolerLists =()=>{
    axiosWithAuth().get(`/api/colors`)
   .then(res=>{
    this.setState({colorList:res.data})
    console.log(res.data)
})
    .catch(err => console.log(err));
  }
  
 
render(){
  return (
    <div>
      <ColorList colors={this.colorList} updateColors={this.colorList} />
      <Bubbles colors={this.colorList} />
    </div>
  );
}
};

export default BubblePage;
