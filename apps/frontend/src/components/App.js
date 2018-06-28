import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import { DragDropContext } from 'react-beautiful-dnd';

//const App = () => (
  //<DataProvider endpoint="api/lists/"
    //           render={data => <Table data={data} />} />
//);

class App extends React.Component{
  constructor(props){
    super(props);
    this.onDragEnd = this.onDragStart.bind(this);
    this.onDragStart = this.onDragUpdate.bind(this);
    this.onDragUpdate = this.onDragEnd.bind(this);
  }

  reorder =  (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  onDragStart = () => {
      console.log("drag START")
      console.log(this.start)
      console.log(start.draggableID)

    };
    onDragUpdate = () => {
      console.log("drag UPDATE")
    }
    onDragEnd (result) {
      console.log("END Drag")
      // dropped outside the list

      if(!result.destination) {
         return;
      }
      //const items = reorder(
     //this.state.items,
     //result.source.index,
     //result.destination.index)

     //this.setState({
     //items
   //});
    }




    render() {
      return (

        <DataProvider endpoint="api/lists/"
                     render={data => <Table data={data} />} />
      );
    }

}

const wrapper = document.getElementById("app");
console.log(wrapper)
wrapper ? ReactDOM.render(<App />, wrapper): null
