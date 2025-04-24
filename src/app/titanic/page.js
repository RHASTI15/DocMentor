import chatbot from "../chatbot/page";

export default function Titanic() {

//     <div>
//       <form>
//         <div className="container mx-auto px-5 sm:px-20 md:px-30 lg:px-80   ">
//           <div className=" w-full ">
//            <label for="titanic"  className=" sticky top-0 block mb-2 text-xl text-sm font-large text-white-500 text-center font-bold">{chatbot}.csv</label>
//              <div className=" overflow-y-auto p-4 h-[calc(100vh-76px-150px)] ">
//              <div className="w-full">
//               <div className="grid pb-1">
//                 <div className="flex gap-2.5 mb-4">
//                  <div className="flex gap-2.5 justify-end pb-1">
//                    <div className="grid">
//                     <div className="w-max grid">
//                       <div className="px-3.5 py-2 bg-gray-100 rounded justify-start  items-center gap-3 inline-flex">
//                           <h5 className="text-gray-900 text-sm font-normal leading-snug">Hi What can I help you with?</h5>
//             </div>
//              </div>
//              </div>
//               </div>
//                 </div>
//                   </div>
//                   </div>
//     <div className="flex gap-2.5 justify-end pb-1">
//      <div className="">
//       <div className="px-2 py-2 bg-indigo-600 rounded">
//        <h2 className="text-white text-sm font-normal leading-snug">How many people died on titanic?</h2>
//     </div>
//      </div>
//       </div>
//   <div className="w-full">
//     <div className="flex gap-2.5 mb-4">
//      <div className="w-max grid">
//        <div className="flex gap-2.5 justify-end pb-1">
//         <div className="px-3.5 py-2 bg-gray-100 rounded justify-start  items-center gap-3 inline-flex">
//            <h5 className="text-gray-900 text-sm font-normal leading-snug">549 people died on the Titanic</h5>
//        </div>
//        </div>
//        </div>
//        </div>
//        </div>
// <div className="flex gap-2.5 justify-end pb-1">
//   <div className="">
//   <div className="grid mb-2">
//   <div className="px-3 py-2 bg-indigo-600 rounded">
//       <h2 className="text-white text-sm font-normal leading-snug">When did titanic sink?</h2>
// </div>
//   </div>
//   </div>
//   </div>
// <div className="w-full">
//   <div className="flex gap-2.5 mb-4">
//    <div className="flex gap-2.5 justify-end pb-1">
//     <div className="grid">
//       <div className="w-max grid">
//         <div className="px-3.5 py-2 bg-gray-100 rounded justify-start  items-center gap-3 inline-flex">
//          <h5 className="text-gray-900 text-sm font-normal leading-snug">The Titanic sank on April 15,1912.</h5>
//        </div>
//         </div>
//          </div>
//            </div>
//              </div>
// <div class="flex gap-2.5 justify-end pb-1">
// <div class="">
//   <div class="grid mb-2">
//      <div class="px-3 py-2 bg-indigo-600 rounded">
//       <h2 class="text-white text-sm font-normal leading-snug">How did it happen?</h2>
//     </div>
//      </div>
//        </div>
//           </div>
// <div class="w-full">
// <div class="flex gap-1 mb-2">
//     <div class="grid">
//     <div class="flex gap-2.5 justify-end pb-1">
//        <div class="px-3 py-2 bg-gray-100 rounded justify-start  items-center gap-3 inline-flex">
//          <h5 class="text-gray-900 text-sm font-normal leading-snug">I'm sorry,but your question is too vague.Could you please provide more details or context?</h5>
//        </div>
//          </div>
//            </div>
//              </div>
//        </div>
//        </div>
// <div class="flex gap-2.5 justify-end pb-1">
//      <div class="">
//      <div class="px-2 py-2 bg-indigo-600 rounded">
//       <h2 class="text-white text-sm font-normal leading-snug">How are you shankar?</h2>
//     </div>
//      </div>
//   </div>
//    <div class="flex gap-2.5 mb-4">
//     <div class="w-max grid">
//     <div class="flex gap-2.5 justify-end pb-1">
//         <div class="px-3.5 py-2 bg-gray-100 rounded justify-start  items-center gap-3 inline-flex">
//          <h5 class="text-gray-900 text-sm font-normal leading-snug">I am fine.How about you?</h5>
//        </div>
//         </div>
//       </div>
// </div>
// <div class="flex gap-2.5 justify-end pb-1">
//      <div class="">
//      <div class="px-2 py-2 bg-indigo-600 rounded">
//       <h2 class="text-white text-sm font-normal leading-snug">All good.What's going on?</h2>
//     </div>
//      </div>
//   </div>
//   <div class="flex gap-2.5 mb-4">
//     <div class="w-max grid">
//     <div class="flex gap-2.5 justify-end pb-1">
//         <div class="px-3.5 py-2 bg-gray-100 rounded justify-start  items-center gap-3 inline-flex">
//          <h5 class="text-gray-900 text-sm font-normal leading-snug">I have completed my graduation.I am looking or a job.</h5>
//        </div>
//         </div>
//       </div>
// </div>
// <div class="flex gap-2.5 justify-end pb-1">
//      <div class="">
//      <div class="px-2 py-2 bg-indigo-600 rounded">
//       <h2 class="text-white text-sm font-normal leading-snug">I worked for two years in johnny motors.Now I have joined my father's business.</h2>
//     </div>
//      </div>
//   </div>
//   </div>

// <div class="  sticky bottom-0 bg-sky-300 w-full md:w-155 mb-2 pl-3 pr-1 py-1 rounded-2xl border border-gray-200 items-center gap-2 inline-flex justify-between ">
// <div class="flex items-center gap-2">
//   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
//     <g id="User Circle">
//       <path id="icon" d="M6.05 17.6C6.05 15.3218 8.26619 13.475 11 13.475C13.7338 13.475 15.95 15.3218 15.95 17.6M13.475 8.525C13.475 9.89191 12.3669 11 11 11C9.6331 11 8.525 9.89191 8.525 8.525C8.525 7.1581 9.6331 6.05 11 6.05C12.3669 6.05 13.475 7.1581 13.475 8.525ZM19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C15.5563 2.75 19.25 6.44365 19.25 11Z" stroke="#4F46E5" stroke-width="1.6" />
//     </g>
//   </svg>
//   <input class="grow shrink basis-0 text-black text-xs font-medium leading-4 focus:outline-none" placeholder="Type here..."></input>
// </div>
// <div class="flex items-center gap-2">
//   <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
//     <g id="Attach 01">
//       <g id="Vector">
//         <path d="M14.9332 7.79175L8.77551 14.323C8.23854 14.8925 7.36794 14.8926 6.83097 14.323C6.294 13.7535 6.294 12.83 6.83097 12.2605L12.9887 5.72925M12.3423 6.41676L13.6387 5.04176C14.7126 3.90267 16.4538 3.90267 17.5277 5.04176C18.6017 6.18085 18.6017 8.02767 17.5277 9.16676L16.2314 10.5418M16.8778 9.85425L10.72 16.3855C9.10912 18.0941 6.49732 18.0941 4.88641 16.3855C3.27549 14.6769 3.27549 11.9066 4.88641 10.198L11.0441 3.66675" stroke="#9CA3AF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
//         <path d="M14.9332 7.79175L8.77551 14.323C8.23854 14.8925 7.36794 14.8926 6.83097 14.323C6.294 13.7535 6.294 12.83 6.83097 12.2605L12.9887 5.72925M12.3423 6.41676L13.6387 5.04176C14.7126 3.90267 16.4538 3.90267 17.5277 5.04176C18.6017 6.18085 18.6017 8.02767 17.5277 9.16676L16.2314 10.5418M16.8778 9.85425L10.72 16.3855C9.10912 18.0941 6.49732 18.0941 4.88641 16.3855C3.27549 14.6769 3.27549 11.9066 4.88641 10.198L11.0441 3.66675" stroke="black" stroke-opacity="0.2" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
//         <path d="M14.9332 7.79175L8.77551 14.323C8.23854 14.8925 7.36794 14.8926 6.83097 14.323C6.294 13.7535 6.294 12.83 6.83097 12.2605L12.9887 5.72925M12.3423 6.41676L13.6387 5.04176C14.7126 3.90267 16.4538 3.90267 17.5277 5.04176C18.6017 6.18085 18.6017 8.02767 17.5277 9.16676L16.2314 10.5418M16.8778 9.85425L10.72 16.3855C9.10912 18.0941 6.49732 18.0941 4.88641 16.3855C3.27549 14.6769 3.27549 11.9066 4.88641 10.198L11.0441 3.66675" stroke="black" stroke-opacity="0.2" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
//       </g>
//     </g>
//   </svg>
//   <button class="items-center flex px-3 py-2 bg-indigo-600 rounded-full shadow ">
//       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//          <g id="Send 01">
//            <path id="icon" d="M9.04071 6.959L6.54227 9.45744M6.89902 10.0724L7.03391 10.3054C8.31034 12.5102 8.94855 13.6125 9.80584 13.5252C10.6631 13.4379 11.0659 12.2295 11.8715 9.81261L13.0272 6.34566C13.7631 4.13794 14.1311 3.03408 13.5484 2.45139C12.9657 1.8687 11.8618 2.23666 9.65409 2.97257L6.18714 4.12822C3.77029 4.93383 2.56187 5.33664 2.47454 6.19392C2.38721 7.0512 3.48957 7.68941 5.69431 8.96584L5.92731 9.10074C6.23326 9.27786 6.38623 9.36643 6.50978 9.48998C6.63333 9.61352 6.72189 9.7665 6.89902 10.0724Z" stroke="white" stroke-width="1.6" stroke-linecap="round" />
//          </g>
//        </svg>
//     <h3 class="text-white text-xs font-semibold leading-4 px-2">Send</h3>
//   </button>
//  </div>
//    </div>
//       </div>
//          </div>
// </form>
//           </div>

  const messages = [
    { id: 1, sender: 'me', text: 'Hey, how are you?' },
    { id: 2, sender: 'other', text: "I'm good! You?" },
    { id: 3, sender: 'me', text: "I'm doing great too!" },
    { id: 4, sender: 'other', text: 'Awesome to hear!' },
  ];

  return (
    <div className="mt-6 justify-between flex">
    <a href="creatchatbot" className="bg-black-500 hover:bg-black-700 text-white font-bold py-2 px-4 border border-black-700 rounded">
    All Chatbots
   </a>
    <div className="max-w-md mx-auto h-screen bg-gray-100 p-4 overflow-y-auto">
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
                  ? 'bg-green-500 text-white'
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
  );



}