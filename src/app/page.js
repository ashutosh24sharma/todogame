
"use client"

import react, { useState } from "react";
function page() {
 const [title,settitle]=useState("");
 const [desc,setdesc]=useState("");
 const  [mainTask,setMainTask]=useState([]);
 const submithandler=(e)=>{
  e.preventDefault()
 setMainTask( [...mainTask,{title,desc}])
  settitle("")
  setdesc("")
 console.log(mainTask)
 }
 const deleteHandler=(i)=>{
   let copyTask=[...mainTask];
   copyTask.splice(i,1)
   setMainTask(copyTask)
 }
 let renderTask=<h2 className="font bold mt-5 ml-5 text-3xl text-blue-300">no task available</h2>
 if(mainTask.length>0){
  renderTask=mainTask.map((t,i)=>{
    return (
    <li key={i} className="flex  border-zinc-700  bg-slate-200 m-8 items-center justify-between">
      <h5 className="text-2xl font-semibold">{t.title}</h5>
      <h5 className="text-xl font-semibold ">{t.desc}</h5>
    <button onClick={()=>{deleteHandler(i)}} className="bg-red-600 px-3 py-4 text-white rounded font-bold ">delete</button>
     </li>);
   })
 }
  return (<>
  
  <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">ASHUTOSH TODO LIST</h1>
  <form onSubmit={submithandler}>
  <input required value={title} onChange={(e)=>{settitle(e.target.value)}} type="text" className="text-3xl border-4 px-6 py-8 m-5  border-zinc-900" color="black" placeholder="Enter your task"/>
  <input required value={desc} onChange={(e)=>{setdesc(e.target.value)}} type="text"  className="text-3xl border-4 px-6 py-8 ml-20 border-zinc-900" color="black" placeholder="add description"/>
   <button className=" bg-black font-bold rounded text-3xl border-4 px-5 py-7 ml-48 text-white border-sky-200" color="white">ADD</button>
  </form>
  <hr/>
  <div className=" ">
    <ul>
      {renderTask} 
    </ul>
  </div>

 
  </>);
}

export default page; 