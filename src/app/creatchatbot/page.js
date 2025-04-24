export default function createchatbot() {
    return (

       
      <form>
        <div class="container mx-auto px-5 sm:px-20 md:px-30 lg:px-80">
        
    <div class=" grid gap-6 mb-6 md:grid-cols-1 mt-8 sm:w-150"> 
    <div class=" w-full flex gap-x-3 ">
      
    <p class=" text-1xl text-gray-900 dark:text-white ">Select Category of Chatbot</p>
  <div class="flex">
    <input type="radio" name="radio" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="radio" ></input>
    <label for="radio" class="text-sm text-white-500 ms-2">CSV</label>
  </div>

  <div class="flex">
    <input type="radio" name="radio" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="radio"></input>
    <label for="radio" class="text-sm text-white-500 ms-2">PDF</label>
  </div>

  <div class="flex">
    <input type="radio" name="radio" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="radio"></input>
    <label for="radio" class="text-sm text-white-500 ms-2">Text</label>
  </div>

  <div class="flex">
    <input type="radio" name="radio" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="radio"></input>
    <label for="radio" class="text-sm text-white-500 ms-2">Docx</label>
  </div>

  <div class="flex">
    <input type="radio" name="radio" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="radio"></input>
    <label for="radio" class="text-sm text-white-500 ms-2">Doc</label>
  </div>
</div>

        <div class="w-full">
            <label for="name" class=" block mb-2 text-sm font-medium text-white-500 ">Name</label>
            <input type="text" id="name" class=" md:w-150 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter chatbot name" required />
            
            </div>
            
        <div >
            <label for="Description" class="block mb-2 text-sm font-medium text-white-500  ">Description</label>
            <input type="text" id="Description" class=" md:w-150 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter description" required />
        </div>
        <div>
        <label class="block mb-2 text-sm font-medium text-white-500" for="file_input">Upload Document File(s)</label>
        <input class="  md:w-150 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="file_input" type="file"></input>
        <p class="block mb-2 text-sm font-medium text-white-500" for="file_input">NOTE:.doc,.docx,.txt,.pdf file accepted.</p>
        </div>
        </div>
        <div class="text-center mb-4">
           <button type='button' className ="w-full md:w-150 flex justify-center p-2  py-2.5 px-0 text-sm bg-indigo-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700">Create Chatbot</button>
        </div>
     </div>
        </form>
   
        
         
      
            )
            }