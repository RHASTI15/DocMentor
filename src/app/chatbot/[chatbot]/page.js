'use client';
import React, { useState } from 'react';
export default function titanic({ params }) {
  const [text, setText] = useState('');
  const[message , setmessage]=useState(' ');
    const { chatbot} = params
    const messages = [
      { id: 1, sender: 'other', text: 'Hi what can I help you with?' },
      { id: 2, sender: 'me', text: "How many people died on Titanic?" },
      { id: 3, sender: 'other', text: "549 people died on the Titanic" },
      { id: 4, sender: 'me', text: 'when did Titanic sink?' },
      { id: 5, sender: 'other', text: 'The Titanic sink on April 15,1912' },
      { id: 6, sender: 'me', text: 'how did it happen ' },
      { id: 7, sender: 'other', text: "I'm sorry,but your question is too vague.Could you please provide more details or context?"},
      { id: 8, sender: 'me', text: 'How are you shankar?' },
      { id: 9, sender: 'other', text:'I am fine.How about you?'  },
      { id: 10, sender: 'me', text: "All good.what's going on? "},
      { id: 11, sender: 'other', text: 'I have completed my graduation.I am looking for a job.'},
      { id: 12, sender: 'me', text: 'Ok.Nice' },
    ];
    function handleClick (e){  
      console.log( text)
      setText(prevmessages=>[...prevmessages, messages]);
      setmessage(); 
      messages.push({id:14, sender:'me', text: text})
      console.log(messages)
   
     }
     function handleChange(e){
      setText(e.target.value);
      
     }
    return (
     
       <div>
        <form>
       
        <div className="mt-6 justify-between flex"></div>
      <a href="/chatbot" className="bg-black-500 hover:bg-black-700 text-white font-bold py-2 px-4 border border-black-700 rounded">
      All Chatbots
     </a>
     
          <div className="container mx-auto px-5 sm:px-20 md:px-30 lg:px-80   ">
          <div className=" w-full ">
            <label htmlFor="titanic"  className=" sticky top-0 block mb-2 text-xl text-sm font-large text-white-500 text-center font-bold">{chatbot}.csv</label>
              <div className=" overflow-y-auto p-4 h-[calc(100vh-76px-150px)] ">

        <div className="max-w-md mx-auto h-screen bg-black-100">
        <div className="flex flex-col gap-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === 'me' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`rounded-2xl px-4 py-2 max-w-[70%] text-sm shadow
                ${
                  msg.sender === 'me'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-800'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          </div>
      </div>
      </div>
 <div className="  sticky bottom-0 bg-sky-300 w-full md:w-150 mb-2 pl-3 pr-1 py-1 rounded-2xl border border-gray-200 items-center gap-2 inline-flex justify-between ">
   <div className="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <g id="User Circle">
           <path id="icon" d="M6.05 17.6C6.05 15.3218 8.26619 13.475 11 13.475C13.7338 13.475 15.95 15.3218 15.95 17.6M13.475 8.525C13.475 9.89191 12.3669 11 11 11C9.6331 11 8.525 9.89191 8.525 8.525C8.525 7.1581 9.6331 6.05 11 6.05C12.3669 6.05 13.475 7.1581 13.475 8.525ZM19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C15.5563 2.75 19.25 6.44365 19.25 11Z" stroke="#4F46E5" strokeWidth="1.6" />
        </g>
     </svg>
     <input className="grow shrink basis-0 text-black text-xs font-medium leading-4 focus:outline-none" onChange={handleChange}   placeholder="Type here..."></input>
   </div>
   <div className="flex items-center gap-2">
     <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
     </svg>
  
   
  <button
    className=" w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full"
    onClick={handleClick} > Send
  </button>
 

  </div>
  </div>
  </div>
  </div>
</form>
</div>
       );
}


