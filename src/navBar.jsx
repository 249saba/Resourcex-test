import React from 'react'
import userimage from "./assets/user-image.png";
import navsetting from "./assets/nav-setting.png";
import notification from "./assets/notification.png";
function navBar() {
  return (
          <nav class="bg-white border-b-2 border-b-[#DEDEDE] shadow-lg shadow-cyan-[#DEDEDE] dark:bg-gray-900 ">
          <div class=" flex    items-center  justify-between     p-4">
            <form class=" w-64   p-4">
              <select
                id="countries"
                class="w-full border border-[#BBCCFF] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-[#BBCCFF] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white bg-[#BBCCFF]"
              >
                <option selected>Custom Support</option>
              </select>
            </form>
            <div class="flex gap-3 items-center justify-center">
              <img class="h-10 w-10  rounded-full" src={navsetting} />
              <img class="h-10 w-10  rounded-full" src={notification} />
              <img class="h-10 w-10  rounded-full" src={userimage} />
            </div>
          </div>
        </nav>
  
  )
}

export default navBar;
