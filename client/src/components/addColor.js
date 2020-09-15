import React from 'react';
import { axiosWithAuth } from "./util/axiosWithAuth";

class addlColor extends React.Component {
    state = {
        addlColor: {
            color: "",
            code:  "" 
        }
      };
     
    
      handleChange = (e) => {
        this.setState({
            addlColor: {
            ...this.state.addlColor,
            [e.target.name]: e.target.value
          }
        });
      };

      submitHandler=e=>{
        e.preventDefault();
        axiosWithAuth()
        .post('/api/colors',this.state.addlColor)
        .then(res=> 
            {
                this.setState({
                    color: "",
            code:  "" 
             });
             console.log(res)
             
            }
            )
            .catch(err=> console.log(err))

       
    };
    render() {
        return (
          <div>
              <h1>Add Color</h1>
        <form className="form" onSubmit={this.submitHandler}>
<label className="lable" >
color name:
<input className="input"
       type="text"
       name="color"
       placeholder="color name"
       value={this.state.addlColor.color}
        onChange={this.handleChange}
     
     />
       </label>

        <label> 
        hex code: 
     <input className="input"
       type="text"
       name="code"
       placeholder="Hex code"
       value={this.state.addlColor.code}
       onChange={this.handleChange}
     /> 
      </label> 
      <button>Add Color</button>
</form>
          </div>

        );
      }
}
 
export default addlColor;
