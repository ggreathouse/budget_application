import React, { useState, useEffect } from 'react';
import { serverCalls } from '../api';

export const useGetData = () =>{
    const [budgetData, setData] = useState<any>([]);

    const handleDataFetch = async () =>{
        const result = await serverCalls.get();
        setData(result)
    }

    useEffect( ()=> {
        handleDataFetch();
    }, [])

    return {budgetData, getData:handleDataFetch}
}

export const useGetUser = () =>{
    const [user, setUser] = useState<any | null>(null)

    const getUsername = async () =>{
        const response = await fetch(`/@me`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            }
        })
        setUser(response)
    }
    useEffect( ()=> {
        getUsername();
    }, [])

    return {user, getUser:getUsername}
}