import react,  {Component} from 'react';
import Header from "./Header.js";

class App extends Component {
  render () {

  return ( 
    <div >
      <Header/>
      <button>
          Add
      </button>
      <div>
          <span>Name</span> <br/>
          <span>Phone Number</span>
      </div>
      {/* <lable htmlfor="name">Name : </lable>
      <input id="name" type="text" placeholder="Type Here" defaultValue ={x+y}/> */}
    </div> 
    
    ) ;
  }
}

export default App;
