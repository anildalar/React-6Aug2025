//1 Import areaa
import { useState } from 'react'
import './App.css'
import { BASE_URL } from './lib/Helper';
import axios from 'axios';
import Swal from 'sweetalert2'; // ✅ SweetAlert2 import

//2. Function defination area
function App() {
  //2.1
  const [fname,setFname] = useState('');

  //2.2 Function defination area
  let sendData = async ()=>{
    console.log(fname);
    let payload = {
                    "data": {
                      "fname": fname
                    }
                  };
    console.log(payload);

    try{
      const {data} = await axios.post(`${BASE_URL}/api/friends`, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Data sent successfully.',
        });
    }catch(err){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
    }
    
    
  }
  let handleChange = (e)=>{
    // ?.
              //object.property
    console.log(e?.target?.value);
    setFname(e?.target?.value);

    console.log(fname);

  }

  //2.3 Return statemnt
  return (
   <>
    <h1>Create Operation</h1>

      <input type="text" name="fname" placeholder="Enter your name" onChange={handleChange} />
      <input type="button" value="send" onClick={sendData} />
   </>
  )
}

export default App
