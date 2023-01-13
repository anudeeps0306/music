import React from 'react'
import axios, { AxiosRequestConfig } from 'axios';
import {useState} from 'react'

type Props = {}


const Posts = (props: Props) => {
    const [data,setData] = useState();

    const options: AxiosRequestConfig = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/search',
        params: {term: 'kiss the rain', locale: 'en-US', offset: '0', limit: '5'},
        headers: {
          'X-RapidAPI-Key': 'cdc5759467msh1d3c95c2d5e51dbp15ff6fjsnf40caf25cc62',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };
    
    
    axios.request<any>(options).then(response => {
        setData(response.data.artists);
        console.log(response.data);
        }).catch(error => {
            console.error(error);
    });

  return (
    <div>
        {/* {data ? <h1>data.</h1>} */}
    </div>
  )
}

export default Posts