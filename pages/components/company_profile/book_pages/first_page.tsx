import Image from "next/image";
import React,{useState,useEffect} from "react";

export default function FirstPage({dispatch,page}:{dispatch:any,page:number}) {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(false);
  },[]);
  if(loading){
    return (
      <>
       <label className="book__page book__page--1 d-flex justify-content-center align-items-center">
          <h6>Loading ...</h6>
       </label>
      </>
    )
  }

  return (
    <>
      <label className="book__page book__page--1" onClick={()=>dispatch({ type: 'decrement' })}>
          <img src="/images/profile/01(565x800).jpg" alt="" />
      </label>
    </>
  );
}