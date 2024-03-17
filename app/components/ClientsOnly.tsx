'use client'
import {Children, useEffect, useState} from 'react';

interface ClientsOnlyProps
{
    children:React.ReactNode;
}

const  ClientsOnly:React.FC<ClientsOnlyProps> = ({
    children
}) =>
{
    const [hasMounted,setHasMounted] =  useState(false);
    useEffect(()=>
    {
     setHasMounted(true);
    },[]);
    if(!hasMounted)
    {
        return null; 
    }  
    return(
      <>
       {Children}
      </>
    );
}
export default ClientsOnly