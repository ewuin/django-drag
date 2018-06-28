import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import { Droppable,Draggable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';

const uuid = shortid.generate;

// a little function to help us with reordering the result
const reorder =  (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (draggableStyle, isDragging) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  border:"2px solid black",
  margin: "10px",
  padding: "4px",
  width:"300px",

  background: isDragging ? 'lightgreen' : 'grey'

});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'pink' : 'blue',

});



var ulStyle={
  border:"2px solid black",
  margin: "10px",
  padding: "4px",
  width:"300px"
}

const Table = ({ data }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
    <div className="column">
      <h2 className="subtitle">
        Showing <strong>{data.length} items</strong>
      </h2>
      <table className="table is-striped">
        <thead>
          <tr>
            {Object.entries(data[0]).map(el => <th key={uuid()}>{el[0]}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map(el => (
            <tr key={el.id}>
              {Object.entries(el).map(el => <td key={uuid()}>{el[1]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>


      <DragDropContext
      //  onDragStart={this.onDragStart}
      //  onDragUpdate={this.onDragUpdate}
       onDragEnd={console.log("END2 ")}
      >
      <Droppable droppableId="droppable-1" type="ListItem">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'white' }}
            {...provided.droppableProps}
          >
{data.map((el,index) => (  <Draggable
               key={el.id}
               draggableId={el.id}
               index={index}
             >
               {(provided, snapshot) => (
                 <div>
                 <div  style={ulStyle}
                     ref={provided.innerRef}
                     {...provided.dragHandleProps}
                     {...provided.draggableProps}
                     style={getItemStyle(
                       provided.draggableProps.style,
                       snapshot.isDragging
                     )}
                   >
                    {//Object.entries(el).map(el =><li key={uuid()}>{el[1]}</li>)}
}
<li>TEST</li>
                      </div>
                        </div>
                      )}
                   </Draggable>
                    ))}
          </div>
        )}
      </Droppable>
</DragDropContext>

    </div> //body wrapper div
  );

Table.propTypes = {
  data: PropTypes.array.isRequired
};
export default Table;
