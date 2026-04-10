import Image from "next/image";
import React,{useState,useEffect,useReducer} from "react";
import FirstPage from "./book_pages/first_page";
import LastPage from "./book_pages/last_page";
import Page2 from "./book_pages/page_2";
import Page3 from "./book_pages/page_3";
import Page4 from "./book_pages/page_4";
import Page5 from "./book_pages/page_5";
import Page6 from "./book_pages/page_6";
import Page7 from "./book_pages/page_7";
import Page8 from "./book_pages/page_8";
import Page9 from "./book_pages/page_9";
import Page10 from "./book_pages/page_10";
import Page11 from "./book_pages/page_11";

function reducer(state:any, action:any) {
  const pages = [1,2,3,4,5,6,7,8,9,10];
  switch (action.type) {
    case 'increment':
      if (state.count < pages.length) {
        return { count: state.count + 1 };
      }
      return state;
    case 'decrement':
      if(state.count>0){
        return { count: state.count - 1 };
      }
      return state;
    default:
      return state;
  }
}
export default function ProfileSection() {
  const [loading,setLoading]=useState(true);
  const [state, dispatch] = useReducer(reducer, {count:0});
  useEffect(()=>{
    setLoading(false);
  },[]);
  if(loading){
    return (
      <>
        <section className="profile mb-10">
          <div className="container text-center">
            <h6>Loading...</h6>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="profile mb-10">
         <div className="container pr">
          <div className="sec-title text-center">
            <div className="sec-title__top justify-content-center">
              <span className="line-left"></span>
              <h6 className="sec-title__tagline bw-split-in-right">About Us</h6>
              <span className=""></span>
              </div>
              <h3 className="sec-title__title bw-split-in-left">Visionaries behind MBK</h3>
          </div>
             <div className="cover">
              <div className="book">
                <FirstPage  dispatch={dispatch} page={state.count} />
                <LastPage dispatch={dispatch} page={state.count} />
                <Page2 dispatch={dispatch} page={state.count} />
                <Page3 dispatch={dispatch} page={state.count} />
                <Page4 dispatch={dispatch} page={state.count} />
                <Page5 dispatch={dispatch} page={state.count} />
                <Page6 dispatch={dispatch} page={state.count} />
                <Page7 dispatch={dispatch} page={state.count} />
                <Page8 dispatch={dispatch} page={state.count} />
                <Page9 dispatch={dispatch} page={state.count} />
                <Page10 dispatch={dispatch} page={state.count} />
                <Page11 dispatch={dispatch} page={state.count} />

              </div>
            </div>
            <div className="book-controls">
              <button className="book-prev" onClick={()=>dispatch({ type: 'decrement' })}><i className="icon-angle-small-right"></i></button>
              <button className="book-next" onClick={()=>dispatch({ type: 'increment' })}><i className="icon-angle-small-right"></i></button>
            </div>
         </div>
      </section>
    </>
  );
}