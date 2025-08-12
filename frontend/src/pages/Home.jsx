//1. Import area
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BACKEND_URL } from '../lib/Helper';


//2. Function definatoin area
 function Home() {
    //2.1 Hooks area  Hooks Variable/Hooks Function
    const [appInfo,setAppInfo] = useState([]);

    useEffect(()=>{
        //alert("The page is loaded successfully");

        //Define
        const fetchAppInfo = async () => {
            //Call The api
                try {
                    //Always call the api in TryCatch BLock
                    const response = await axios.get('http://localhost:1337/api/app-info?populate=*');
                    
                    //console.log(response?.data?.data);
                    setAppInfo(response?.data?.data);
                } catch (error) {
                    console.log('ok');
                }
        }
        //2. Call
        fetchAppInfo();

    },[]);

    //2.2
    //http://localhost:1337/api/app-info?populate=*

    //2.3 Return Statement
    return (
        <>
            <h1></h1>
            <img width={200} src={BACKEND_URL+appInfo?.app_logo?.url} />
            {console.log('Backend URL >>>>>>>',BACKEND_URL)}
            {console.log(appInfo?.app_logo?.url)}
           
        </>
    )
}


//3. Export area

export default Home;
