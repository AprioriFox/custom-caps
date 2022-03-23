import React from 'react';
import { Home } from '../home';
import axios from "axios";
import { useDispatch } from "react-redux";
import  { useEffect, useState } from "react";
import { setCaps } from '../../redux/actions/caps';

const App = () => {
    // const dispatch = useDispatch()
    // useEffect(() =>{
    //   axios.get('http://localhost:3000/db.json').then(({ data }) => {
    //      dispatch(setCaps(data.pizzas))
    //   })
    // },[])
    // const dispatch = useDispatch()
    const dispatch =  useDispatch()
    // const [ items , setItems ] = useState([])
     useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            dispatch(setCaps(data.caps)) 
            console.log(data)
        })
    },[])

    // console.log(items);
   
    return ( 
        <div>
            <Home />
        </div>
    );
}

export default App;
