export default function Home() {
 'use client'
 return (
  <>
    <div className="flex justify-center items-center">
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
        <div className="p-4">
          <h5 className="  text-center mb-2 text-slate-800 text-xl font-semibold">
            Custom ChatGPT for your data
          </h5>
          <p className="  text-center text-slate-600 leading-normal font-light">
            Just upload your documents or add a link to your website and get a ChatGPT-like chatbot for your data.Then add it as a widget to your website or chat with it through the API. 
          </p>
      <div className=" text-center ">
          < a href="chatbot" className=" rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Build Your Chatbot
          </a>
     </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center">
        <div className=" text-center p-4 ">
          <h6 className=" font-bold text-white-600/100 dark:text-whites-400/100">
            Video Demo
          </h6>
          <div className="flex justify-center items-center">
          <p className="text-white-600/100 dark:text-whites-400/100">
          Creating a chatbot for Hyundai Bot by crawling the website and training the AI on its content.I can then embed the chatbot on the website!
          </p>
        </div>
        <div className=" flex justify-center items-center">
        
          <video className="h-half w-half rounded-lg" controls autoPlay>
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>

      </div>
    </div>
  </>
  )
}


