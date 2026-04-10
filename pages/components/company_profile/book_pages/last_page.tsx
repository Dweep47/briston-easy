import Image from "next/image";
import React,{useState,useEffect} from "react";

export default function LastPage({dispatch,page}:{dispatch:any,page:number}) {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(false);
  },[]);
  if(loading){
    return (
      <>
       <label className="book__page book__page--4 th-bg d-flex justify-content-center align-items-center">
          <h6>Loading ...</h6>
       </label>
      </>
    )
  }

  return (
    <>
      <label  className={ `book__page book__page--4 th-bg`} onClick={()=>dispatch({ type: 'increment' })}>
        <div className="page__content-1  ptx df-c">
            <h2 className="text-white w-100 text-center">The End</h2>
        </div>
      </label>
    </>
  );
}