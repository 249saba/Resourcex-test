import logo from "./assets/logo.png";
import dashboard from "./assets/dashboard.png";
import rocket from "./assets/rocket.png";
import checklist from "./assets/checklist.png";
import exclamation from "./assets/exclamation.png";
import file from "./assets/file.png";
import glass from "./assets/glass.png";
import tech from "./assets/tech.png";
import addPost from "./assets/add-post.png";
import setting from "./assets/setting.png";
import menu from "./assets/menu.png";
import userimage from "./assets/user-image.png";
import navsetting from "./assets/nav-setting.png";
import notification from "./assets/notification.png";
import video from "./assets/video-symbol.png";
import verified from "./assets/verified.png";
import recycle from "./assets/recycle.png";
import remove from "./assets/remove.png";
import navBar from "./navBar";
const App = () => {
  return (
    <>
      <div class="w-[80%] absolute right-0">
        <aside
          id="separator-sidebar"
          class="fixed  top-0 left-0  w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4 overflow-y-auto bg-[#030A1A] dark:bg-gray-800">
            <a
              href="https://flowbite.com/"
              class="flex items-center ps-2.5 mb-5"
            >
              <img src={logo} class="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
            </a>
            <ul class="space-y-2 font-sm">
              <li>
                <a
                  href="#"
                  class="flex items-center p-2  rounded-lg dark:text-white hover:border hover:border-[#3062F9] text-[#FFFFFF]  group"
                >
                  <img
                    src={dashboard}
                    class="h-3 me-2 sm:h-7"
                    alt="Flowbite Logo"
                  />
                  <span class="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-[#FFFFFF]rounded-lg dark:text-white hover:border hover:border-[#3062F9] text-[#FFFFFF] dark:bg-gray-700 group"
                >
                  <img
                    src={rocket}
                    class="h-3 me-3 sm:h-7"
                    alt="Flowbite Logo"
                  />
                  <span class="flex-1 ms-3 whitespace-nowrap">
                    Start Working
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-[#FFFFFF]rounded-lg dark:text-white hover:border hover:border-[#3062F9] text-[#FFFFFF] dark:bg-gray-700 group"
                >
                  <img
                    src={checklist}
                    class="h-3 me-3 sm:h-7"
                    alt="Flowbite Logo"
                  />
                  <span class="flex-1 ms-3 whitespace-nowrap">My Task</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-[#FFFFFF]rounded-lg dark:text-white hover:border hover:border-[#3062F9] text-[#FFFFFF] dark:bg-gray-700 group"
                >
                  <img
                    src={exclamation}
                    class="h-3 me-3 sm:h-7"
                    alt="Flowbite Logo"
                  />
                  <span class="flex-1 ms-3 whitespace-nowrap">Dead Locks</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-[#FFFFFF]rounded-lg dark:text-white hover:border hover:border-[#3062F9] text-[#FFFFFF] dark:bg-gray-700 group"
                >
                  <img src={file} class="h-3 me-3 sm:h-7" alt="Flowbite Logo" />
                  <span class="flex-1 ms-3 whitespace-nowrap">
                    Work Reports
                  </span>
                </a>
              </li>
              <li></li>
            </ul>
            <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-[#383F4A] dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-[#FFFFFF]rounded-lg dark:text-white hover:border hover:border-[#3062F9] text-[#FFFFFF] dark:bg-gray-700 group"
                >
                  <img
                    src={glass}
                    class="h-3 me-3 sm:h-7"
                    alt="Flowbite Logo"
                  />
                  <span class="flex-1 ms-3 whitespace-nowrap">Explore</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-[#FFFFFF]rounded-lg dark:text-white hover:border hover:border-[#3062F9] text-[#FFFFFF] dark:bg-gray-700 group"
                >
                  <img src={tech} class="h-3 me-3 sm:h-7" alt="Flowbite Logo" />
                  <span class="flex-1 ms-3 whitespace-nowrap">Model</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-[#FFFFFF]rounded-lg dark:text-white hover:border hover:border-[#3062F9] text-[#FFFFFF] dark:bg-gray-700 group"
                >
                  <img src={menu} class="h-3 me-3 sm:h-7" alt="Flowbite Logo" />
                  <span class="flex-1 ms-3 whitespace-nowrap">
                    Category/Manufacturer
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-[#FFFFFF]rounded-lg dark:text-white hover:border hover:border-[#3062F9] text-[#FFFFFF] dark:bg-gray-700 group"
                >
                  <img
                    src={addPost}
                    class="h-3 me-3 sm:h-7"
                    alt="Flowbite Logo"
                  />
                  <span class="flex-1 ms-3 whitespace-nowrap">Add Parts</span>
                </a>
              </li>
            </ul>
            <ul class="pt-2 mt-2 space-y-2 font-medium border-t border-[#383F4A] dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-[#FFFFFF]rounded-lg dark:text-white hover:border hover:border-[#3062F9] text-[#FFFFFF] dark:bg-gray-700 group"
                >
                  <img
                    src={setting}
                    class="h-3 me-3 sm:h-7"
                    alt="Flowbite Logo"
                  />
                  <span class="flex-1 ms-3 whitespace-nowrap">Setting</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
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
        <div class="grid grid-cols-2 gap-4 m-2 ">
          <div class="flex w-[688px] h-[82px] items-center justify-evenly bg-[#EEEEEE] p-5">
            <div class="flex flex-col items-start">
              <p class="text-[#0F314B]">Tickets</p>
              <p class="text-[#3062F9]">7839</p>
            </div>
            <div class="flex flex-col items-start">
              <p class="text-[#0F314B]">Model</p>
              <p class="text-[#3062F9]">KECD867XBL00</p>
            </div>
            <div class="flex flex-col items-start">
              <p class="text-[#0F314B]">Parts</p>
              <p class="text-[#3062F9]">120</p>
            </div>
            <div class="flex flex-col items-start">
              <p class="text-[#0F314B]">Visibility</p>
              <p class="text-[#3062F9]">Private</p>
            </div>
            <div class="flex flex-col items-start">
              <p class="text-[#0F314B]">Status</p>
              <p class="text-[#3062F9]">Assigned</p>
            </div>
            <div class="flex flex-col items-start">
              <p class="text-[#0F314B]">Posted</p>
              <p class="text-[#3062F9]">07/28/2023</p>
            </div>
          </div>
          <div class="flex items-end justify-center gap-2 flex-col">
            <label>Change Visibilty</label>

            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span class="ms-3 text-sm font-medium text-[#3062F9] dark:text-gray-300">
                Public
              </span>
            </label>
          </div>
          <div class="flex  w-[688px] flex-col border  p-5 shadow-lg shadow-cyan-[#DEDEDE]">
            <div class="flex items-center p-10 border-b border-b-gray-400 gap-2">
              <div class="h-12 w-12 rounded-full bg-[#F2F5FB] text-[#B3B3B3] flex text-base items-center justify-center">
                MN
              </div>
              <div class="flex flex-col">
                <div class="flex gap-1">
                  {" "}
                  <span class="text-[#171717] font-semibold">
                    Mudassir Nasir
                  </span>
                  <span class="#7E7E7E">07/28/2023</span>
                </div>
                <p class="text-[#3062F9]">This is new ticket</p>
              </div>
            </div>
            <div class="m-8 text-[#050D1F] bg-[#E2E2E2] w-[626px] border border-black-100 p-5 shadow-lg shadow-cyan-[#DEDEDE]">
              <p>Agent at Mar 28, 2024</p>
              <p>Hello Mudassir,</p>
              <p>Thank you for reaching out.</p>
              <br />
              <p>
                In order to help you locate the correct parts and repair
                information, we will need more information about the problem you
                are facing. Please submit a new question with more details, and
                we will be happy to help you. Looking forward to hearing from
                you!
              </p>
              <br />

              <div class="flex items-center gap-4 text-blue-500">
                <img src={video} class="h-5 w-5" />
                <p class="">watch video</p>
                <img src={video} class="h-5 w-5" />
                <p class="">watch video</p>
              </div>
              <p>Related Parts: 123 35</p>
            </div>
            <div class="flex justify-between w-full row">
              <div class="m-8 flex flex-col">
                <h5 class="font-bold">Compose Your Reply</h5>
                <p class="mt-3 text-[#4F4F4F]">Url</p>
                <input class="w-[282px] h-[42px] bg-gray-100" type="text" />
                <div class="flex justify-center rounded-md w-20 bg-gray-100  h-[35px] p-1 items-center gap-3 mt-2">
                  <p>Link1</p>
                  <p class="text-[#D9D9D9]"> X</p>
                </div>
              </div>
              <div class="mt-14 m-8 flex flex-col">
                <p class="mt-3 text-[#4F4F4F]">Related Parts</p>
                <input class="w-[282px] h-[42px] bg-gray-100" type="text" />
                <div class="flex gap-3">
                  <div class="flex justify-center rounded-md w-20 bg-gray-100  h-[35px] p-1 items-center gap-3 mt-2">
                    <p>234</p>
                    <p class="text-[#D9D9D9]"> X</p>
                  </div>
                  <div class="flex justify-center rounded-md w-20 bg-gray-100  h-[35px] p-1 items-center gap-3 mt-2">
                    <p>235</p>
                    <p class="text-[#D9D9D9]"> X</p>
                  </div>
                  <div class="flex justify-center rounded-md w-20 bg-gray-100  h-[35px] p-1 items-center gap-3 mt-2">
                    <p>236</p>
                    <p class="text-[#D9D9D9]"> X</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-14 m-8 flex flex-col">
              <p class=" text-[#4F4F4F]">Your answer goes here</p>
              <input
                class="w-[613px] h-[65px] border border-gray-100 "
                type="text"
              />
              <div class="flex gap-3 items-center justify-between">
                <div class="flex rounded-md w-20 bg-gray-100  h-[35px] p-1 items-center justify-center gap-3 mt-2">
                  <p>234</p>
                  <p class="text-[#D9D9D9]"> X</p>
                </div>
                <button class="flex items-center justify-center h-[34px] bg-blue-500 text-white">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-end justify-start gap-2 flex-col">
            <div class="flex flex-col w-[350px]  bg-[#E2E2E2] p-2 rounded-md">
              <div class="flex justify-between  ">
                <p class="font-semibold">Document Answer</p>
                <div className="flex gap-1 text-white-100">
                  <img src={verified} class="h-5 w-5" />
                  <span>68%</span>
                  <img src={remove} class="h-5 w-5" />
                  <span>68%</span>
                  <img src={recycle} class="h-5 w-5" />
                  <span>68%</span>
                </div>
              </div>
              <p>
                Order to help you locate the correct parts and repair
                information, we will need more information about the problem you
                are facing. Please submit a new question with more details, and
                we will be happy to help you. Looking forward to hearing from
                you!
              </p>
            </div>
            <div class="flex flex-col w-[350px]   mt-2">
              <div class="bg-[#E2E2E2]  p-2 rounded-md">
                <div class="flex justify-between">
                  <p class="font-semibold">Archived Questions</p>
                  <p class="text-blue-500">88% Similiar</p>
                </div>
                <span class="font-semibold">Q :</span>
                <span class="font-semibold">
                  Order to help you locate the correct parts and repair
                </span>
                <br />
                <span class="font-semibold">A :</span>
                <span>
                  information, we will need more information about the problem
                  you are facing. Please submit a new question with more
                  details, and we will be happy to help you.
                </span>
              </div>
              <div class="flex justify-between h-12 bg-[#E2E2E2] p-2 rounded-md mt-1 items-center">
               <p class="font-semibold">Q : Order to help you locate the correct ....</p>
               <p class="text-blue-500">+</p>
              </div>
              <div class="flex justify-between h-12 bg-[#E2E2E2] p-2 rounded-md mt-1 items-center">
               <p class="font-semibold">Q : Order to help you locate the correct ....</p>
               <p class="text-blue-500">+</p>
              </div>
              <div class="flex justify-between h-12 bg-[#E2E2E2] p-2 rounded-md mt-1 items-center">
               <p class="font-semibold">Q : Order to help you locate the correct ....</p>
               <p class="text-blue-500">+</p>
              </div>
              <div class="flex justify-between h-12 bg-[#E2E2E2] p-2 rounded-md mt-1 items-center">
               <p class="font-semibold">Q : Order to help you locate the correct ....</p>
               <p class="text-blue-500">+</p>
              </div>
              <div class="flex flex-col m-2 p-2  rounded-md">
               <div class="flex justify-between rounded-md items-center border-red-400 border p-2">
                  <p class="text-red-600">Unsolve Questions</p>
                  <button class="bg-red-600 text-white">Escalate Ques</button>
                  
               </div>
               <div>Reason for Execution</div>
               <div>
               <input class="h-12 bg-gray-100 w-full" type="text"/>
               </div>
     
              </div>
              <div class="flex gap-3 items-end justify-end">
               <button class="bg-gray-300 rounded-md">Cancel</button>
               <button class="bg-blue-600 rounded-md">Submit</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default App;
