import { PlusCircle, RadioButton } from "phosphor-react"
import {FileDotted} from "phosphor-react"
import {Upload} from "phosphor-react"
import {User} from "phosphor-react"
import {Note} from "phosphor-react"



const Sidebar = () =>{
    return(
        <div className="h-screen w-60 bg-gray-800 fixed top-0 left-0">
            {/* User Details */}
            <div className="text-white text-sm hover:bg-gray-700 w-full py-4 px-5 flex items-center">
               <User  size={16}/>
               <div className="relative left-3">Username</div> 
            </div>

            {/* Status */}
            <div className="mt-1 flex flex-col gap-0.5">
                <div className="text-white text-sm hover:bg-gray-700 ml-1.5 py-2 px-3 w-11/12 rounded flex items-center">
                <RadioButton size={16}/>
                   <div className="ml-2">All</div> 
                </div>
                <div className="text-white text-sm hover:bg-gray-700 ml-1.5 py-2 px-3 w-11/12 rounded flex items-center">
                    <FileDotted size={16}/>
                   <div className="ml-2">Drafts</div>                 
                </div>
                <div className="text-white text-sm hover:bg-gray-700 ml-1.5 py-2 px-3 w-11/12 rounded flex items-center">
                    <Upload size={16}/>
                   <div className="ml-2">Published</div>                 
                </div>
            </div>

            {/* Scrollbar Section*/}
            <div className="w-full h-2/3 mt-10 overflow-auto scroll">
                {/* Note Section */}
                <div>
                    <div className="hover:bg-gray-700 ml-1.5 py-2 w-11/12 rounded flex px-3 items-center">
                        <Note size={18} className="text-white"/>
                        <div className="text-white text-sm ml-2">40 day fasti...</div>
                    </div>
                    <div className="hover:bg-gray-700 ml-1.5 py-2 w-11/12 rounded flex px-3 items-center">
                        <Note size={18} className="text-white"/>
                        <div className="text-white text-sm ml-2">10 steps to Prob...</div>
                    </div>
                    <div className="hover:bg-gray-700 ml-1.5 py-2 w-11/12 rounded flex px-3 items-center">
                        <Note size={18} className="text-white"/>
                        <div className="text-white text-sm ml-2">Diaries of an Emo kid</div>
                    </div>
                    <div className="hover:bg-gray-700 ml-1.5 py-2 w-11/12 rounded flex px-3 items-center">
                        <Note size={18} className="text-white"/>
                        <div className="text-white text-sm ml-2">How to boost IQ</div>
                    </div>
                    <div className="hover:bg-gray-700 ml-1.5 py-2 w-11/12 rounded flex px-3 items-center">
                        <Note size={18} className="text-white"/>
                        <div className="text-white text-sm ml-2">{"2023 > 2022"}</div>
                    </div>
                    <div className="hover:bg-gray-700 ml-1.5 py-2 w-11/12 rounded flex px-3 items-center mt-2">
                        <PlusCircle size={18} className="text-white"/>
                        <div className="text-white text-sm ml-2">Add note</div>
                    </div>
                </div>
                {/* Tools and Utilities */}
                <div className="w-full hover:bg-gray-700 absolute bottom-0 left-0 py-3 flex">
                    <div className="text-white ml-4">Settings</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar