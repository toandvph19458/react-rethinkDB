// ReoderTable.js
import { Draggable } from "react-beautiful-dnd";

const ReoderTable = ({ row, index }) => {
  return (
    <Draggable draggableId={row?.id.toString()} index={index}>
      {(provided) => (
        <tr
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {Object.values(row).map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
          ))}
        </tr>
      )}
    </Draggable>
  );
};

export default ReoderTable;
