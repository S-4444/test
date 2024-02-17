import React from "react";
import {useQuery} from 'react-query';
import axios from 'axios';

const fetchHeros=()=>{
    return axios.get("http://localhost:4000/superheroes")
}

const Component = ()=>{

    const {isLoding , data} = useQuery('super-heroes', fetchHeros)

    if(isLoding){
        return (<h1>Please wait.....</h1>);
    }

    return(
    <>
     <h1>This is the list of super heros</h1>
     {
        data?.data.map((res)=>{
            return (
                <div key={res.id}>
                    <span>{res.name}</span>
                    <span>{res.power}</span>
                </div>
            )
        }
        )
     }
    </>
    )
}

export default Component;