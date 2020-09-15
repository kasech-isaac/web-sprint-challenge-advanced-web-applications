import React, { useState} from "react";
// import axios from "axios";
import { useHistory} from "react-router-dom";
import { axiosWithAuth } from "./util/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};
const addlColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [colorToAdd, setColorToAdd] = useState(addlColor);
  const { push } = useHistory();
  // const { id } = useParams();


  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();

    axiosWithAuth()
    .put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
    .then((res) => {
    
      console.log("color editted", res.data)
     
      updateColors(colors.map(color => {
        if (color.id === res.id) {
          return res.data;
        }
        return color;
      }))
      push("/api/colors");
    })
    .catch((err) => {
      console.log("colorlist", err);
    })
  };

  const deleteColor = color => {
    // make a delete request to delete this color
    axiosWithAuth()
    ///api/colors/123
    .delete(`http://localhost:5000/api/colors/${color.id}`)
    .then((res) => {
      console.log("Deleted Color ID", res.data);
      //  editColor(res.data);
      const newItems = colors.filter(e => e.id !== color.id)
      updateColors(newItems);
    })
    .catch((err) => {
      console.log("error in colorlist", err)
    })
  };


  const handleChange = (e) => {
    setColorToAdd({
        [e.target.name]: e.target.value
      })
    };
  

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
     
    </div>
  );
};

export default ColorList;
