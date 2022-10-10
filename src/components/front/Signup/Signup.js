import React from 'react';
import "./Signup.css"

export const Signup = () => {
  return (
    <div className='signup'>
        <form className='form' method='get'>
          FIRST NAME:<input type ='text' value=''/><br></br>
          LAST NAME:<input type ='text' value=''/><br></br>
          PASSWORD:<input type ='password' value=''/><br></br>
          GENDER:<input type= "radio" name="Gender" value="Female"/>Female
                 <input type= "radio" name="Gender" value="Male"/>Male
                 <br></br>
          ADDRESS: <textarea className='address' rows={6}  columns={40}></textarea><br></br>
          <button className='signup-button'>REGISTER</button>
        </form>
    </div>
  )
}
 export default Signup;