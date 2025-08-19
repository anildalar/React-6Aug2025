//1. Import area
import { useEffect, useState } from 'react';
import { BACKEND_URL } from '../lib/Helper';
import { Link } from 'react-router-dom';
//import something form somelib
import axios from 'axios';
//const axios = require('axios');
//2. Function definatoin area
 function Home() {
    //2.1 Hooks area  Hooks Variable/Hooks Function
    const [businessDetail,setBusinessDetail] = useState([]);

    useEffect(()=>{
        //Call the api

        try {
            //use axios is promise Chain
            axios.get(`${BACKEND_URL}/api/business-details`)
            .then(function (response) {
                // handle success
                console.log(response?.data?.data);
                setBusinessDetail(response?.data?.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

        } catch (error) {
            console.log(error);
        }

    },[]);

    //2.2
    //http://localhost:1337/api/app-info?populate=*

    //2.3 Return Statement
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>BusinessId</th>
                        <th>BusinessName</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //array.map(function(currentValue, index, arr), thisValue)
                        businessDetail.map((cv,idx,arr)=>{
                            return <tr key={idx}>
                                        <td>1</td>
                                        <td>
                                            <a href={`/businessdetail/${cv.documentId}`}>{cv.business_name}</a>
                                        </td>
                                    </tr>
                        })
                    }
                       
                </tbody>    
            </table>  
           
        </>
    )
}


//3. Export area

export default Home;
