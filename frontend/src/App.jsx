//1 Import areaa
import { useEffect, useState } from 'react'
import './App.css'
import { BASE_URL } from './lib/Helper';
import axios from 'axios';
import Swal from 'sweetalert2'; // ✅ SweetAlert2 import

//2. Function defination area
function App() {
  //2.1 Hooks Area Hooks Variable/Hooks Function
  const [fname,setFname] = useState('');
  const [businessCategory,setBusinessCategory] = useState([]);
  //useEffect(<function>, <dependencyArray>)
  useEffect(()=>{
    //I am going to call api
    try {
        axios.get(`${BASE_URL}/api/business-categories?filters[is_featured][$eq]=true`).then((res)=>{
           // handle success
          console.log(res?.data?.data);
          setBusinessCategory(res?.data?.data);
        }).catch((err)=>{
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  },[]);

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
  //array.map(function(currentValue, index, arr))

  return (
   <>
    <h1>Create Operation</h1>

      <input type="text" name="fname" placeholder="Enter your name" onChange={handleChange} />
      <input type="button" value="send" onClick={sendData} />
      <hr />
      <ul>
        {
          businessCategory.map((cv,idx,arr)=>{
            //Every function may return something
            return <li><a href="#"><img src={cv.icon_url} />{cv.category_name}</a></li>
          })
        }
        
      </ul>

   </>
  )
}

export default App
