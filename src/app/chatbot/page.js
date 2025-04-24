
 import React from "react";
import titanic from "./[chatbot]/page";

const chatbot = () => {
   
  const cards = [
    {id:1,image:"/chatbot.png",title:"Titanic", href:"chatbot/titanic",buttonText: "Go to chatbot"},
    {id:2,image:"/chatbot.png",title:"Test Division",href:"/chatbot/testdivision",buttonText: "Go to chatbot"},
    {id:3,image:"/chatbot.png",title:"Testing",href:"/chatbot/testing",buttonText: "Go to chatbot"},
    {id:4,image:"/chatbot.png",title:"Resume",href:"/chatbot/resume",buttonText: "Go to chatbot"},
    {id:5,image:"/chatbot.png",title:"Titanic",href:"/chatbot/titanic",buttonText: "Go to chatbot"},
    {id:6,image:"/chatbot.png",title:"Test Division",href:"/chatbot/testdivision",buttonText: "Go to chatbot"},
    {id:7,image:"/chatbot.png",title:"Testing",href:"/chatbot/testing",buttonText: "Go to chatbot"},
    {id:8,image:"/chatbot.png",title:"Resume",href:"/chatbot/resume",buttonText: "Go to chatbot"},
  ];

return (
 <div className="text-left px-4">  
  <div className="mt-6 justify-between flex">
     <p className="font-bold">My Chatbots</p>
        <a href="creatchatbot" className="bg-black-500 hover:bg-black-700 text-white font-bold py-2 px-4 border border-black-700 rounded">
         New chatbot
        </a>
        </div>
        
        <div className=" w-full min-h-screen bg-black-100 p-8">
      <div className="text-center sm:text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-full flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-70 m-2.5 overflow-hidden rounded-md flex justify-center items-center"
          >
            
            <img
              src={card.image}
              alt={card.title}
            
              className="w-full h-50 object-cover h-30  w-30"
              
            />
            <div className="p-4">
              <h2 className=" text-center mb-1 text-xl font-semibold text-slate-800">{card.title}</h2>
            </div>
            <button
              href={card.href} className="min-w-10  mb-3 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              <a href={card.href}>{card.buttonText}</a>
             
            </button>
          
          </div>
           
        ))}
         </div>
        </div>
       </div>
    
  
   
  );
};

export default chatbot;






{/* // <div className="flex justify-center p-4 pt-1 gap-2">
//   <div className=" text-center sm:text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> 
//     <div className="  w-full flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-70">
//       <div className="m-2.5 overflow-hidden rounded-md flex justify-center items-center h-100 w-100"> */}
//      {/* {imagedata.map((img) => (
//         <div 
//           key={img.id}
//           className=""
//         >
//      ) 

//     )
// }  */}
     
     












{/* //           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <div className="mt-6">  
//               <div className=" text-center sm:text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">  {/* Responsive grid */}
{/* //                   <div>
//                       <div className=" w-full flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-70">
//                           <div className="m-2.5 overflow-hidden rounded-md flex justify-center items-center">
//                               <img className="object-cover" src="/chatbot.png" height={100} width={100} alt="profile-picture"/>
//                           </div>
//                           <div className="p-6 text-center">
//                               <h4 className="mb-1 text-xl font-semibold text-slate-800">
//                                   Titanic
//                               </h4>
//                           </div>
//                           <div className="flex justify-center p-4 pt-1 gap-2">
//                               < a href="chatbot/titanic " className="min-w-10 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
//                                   Go to chatbot 
//                               </a>
//                           </div>
//                       </div>
//                   </div>

//                   <div> 
//                       <div className=" w-full flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-70">
//                           <div className="m-2.5 overflow-hidden rounded-md flex justify-center items-center">
//                               <img className="object-cover" src="/chatbot.png" height={100} width={100} alt="profile-picture"/>
//                           </div>
//                           <div className="p-6 text-center">
//                               <h4 className="mb-1 text-xl font-semibold text-slate-800">
//                                   Test division
//                               </h4>
//                           </div>
//                           <div className="flex justify-center p-4 pt-1 gap-2">
//                               < a href="chatbot/testdivision " className="min-w-10 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
//                                   Go to chatbot
//                               </a>
//                           </div>
//                       </div>
//                   </div>

//                   <div> 
//                       <div className="  w-full flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-70">
//                           <div className="m-2.5 overflow-hidden rounded-md flex justify-center items-center">
//                               <img className="object-cover" src="/chatbot.png" height={100} width={100} alt="profile-picture"/>
//                           </div>
//                           <div className="p-6 text-center">
//                               <h4 className="mb-1 text-xl font-semibold text-slate-800">
//                                   Testing
//                               </h4>
//                           </div>
//                           <div className="flex justify-center p-4 pt-1 gap-2">
//                               < a href="chatbot/testing "className="min-w-10 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
//                               Go to chatbot
//                               </a>
//                           </div>
//                       </div>
//                   </div>

//                   <div> 
//                       <div className=" w-full flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-70">
//                           <div className="m-2.5 overflow-hidden rounded-md flex justify-center items-center">
//                               <img className="object-cover" src="/chatbot.png" height={100} width={100} alt="profile-picture"/>
//                           </div>
//                           <div className="p-6 text-center">
//                               <h4 className="mb-1 text-xl font-semibold text-slate-800">
//                                   Resume
//                               </h4>
//                           </div>
//                           <div className="flex justify-center p-4 pt-1 gap-2">
//                               < a href="chatbot/resume" className="min-w-10 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
//                                  Go to chatbot 
//                                   </a>
//                           </div>
//                       </div>
//                   </div>
//                   <div> 
//                       <div className="  w-full flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-70">
//                           <div className="m-2.5 overflow-hidden rounded-md flex justify-center items-center">
//                               <img className="object-cover" src="/chatbot.png" height={100} width={100} alt="profile-picture"/>
//                           </div>
//                           <div className="p-6 text-center">
//                               <h4 className="mb-1 text-xl font-semibold text-slate-800">
//                                   Titanic
//                               </h4>
//                           </div>
//                           <div className="flex justify-center p-4 pt-1 gap-2">
//                               < a href="chatbot/titanic " className="min-w-10 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
//                                   Go to chatbot
//                               </a>
//                           </div>
//                       </div>
//                   </div>
//                   <div> 
//                       <div className=" w-full flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-70">
//                           <div className="m-2.5 overflow-hidden rounded-md flex justify-center items-center">
//                               <img className="object-cover" src="/chatbot.png" height={100} width={100} alt="profile-picture"/>
//                           </div>
//                           <div className="p-6 text-center">
//                               <h4 className="mb-1 text-xl font-semibold text-slate-800">
//                                   Test division
//                               </h4>
//                           </div>
//                           <div className="flex justify-center p-4 pt-1 gap-2">
//                               < a href="chatbot/testdivision "className="min-w-10 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
//                                   Go to chatbot
//                               </a>
//                           </div>
//                       </div>
//                   </div>
//                   <div> 
//                       <div className=" w-full flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-70">
//                           <div className="m-2.5 overflow-hidden rounded-md flex justify-center items-center">
//                               <img className="object-cover" src="/chatbot.png" height={100} width={100} alt="profile-picture"/>
//                           </div>
//                           <div className="p-6 text-center">
//                               <h4 className="mb-1 text-xl font-semibold text-slate-800">
//                                   Testing
//                               </h4>
//                           </div>
//                           <div className="flex justify-center p-4 pt-1 gap-2">
//                               < a href="chatbot/testing " className="min-w-10 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
//                                   Go to chatbot
//                               </a>
//                           </div>
//                       </div>
//                   </div>
//                   <div> 
//                       <div className=" w-full flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-70">
//                           <div className="m-2.5 overflow-hidden rounded-md flex justify-center items-center">
//                               <img className="object-cover" src="/chatbot.png" height={100} width={100} alt="profile-picture"/>
//                           </div>
//                           <div className="p-6 text-center">
//                               <h4 className="mb-1 text-xl font-semibold text-slate-800">
//                                   Resume
//                               </h4>
//                           </div> */}
{/* //                           <div className="flex justify-center p-4 pt-1 gap-2">
//                               < a href="chatbot/resume"className="min-w-10 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
//                                   Go to chatbot
//                               </a>
//                           </div>
//                       </div>
//                   </div> */}
{/* //               </div>
//           </div>
//       </div> */}



