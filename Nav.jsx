import React, { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { authDataContext } from '../Context/AuthContext';
import axios from 'axios';
import { userDataContext } from '../Context/UserContext';


function Nav() {
    let [showpopup,setShowpopup] = useState(false)
    let {userData, setUserData} = useContext(userDataContext)
    let navigate = useNavigate()
    let {serverUrl} = useContext(authDataContext)

    const handleLogout = async () => {
        try{
            let result = await axios.post(serverUrl + "/api/auth/logout",{withCredentials:true}) 
            setUserData(null)
            console.log(result)
        }catch(error){
            console.log(error)
        }
    }
  return (
    <>
      {/* Navigation Bar */}
      <div className='w-[100vw] min-h-[80px] border-b border-[#dcdcdc] px-[40px] flex items-center justify-between md:px-[40px]'>

        {/* Left: Logo */}
        <div>
          <img src={logo} alt="Logo" className='w-[130px]' />
        </div>

        {/* Center: Search */}
        <div className='w-[35%] relative hidden md:block'>
          <input
            type="text"
            placeholder="Any Where | Any Location | Any City"
            className='w-full px-[30px] py-[10px] border-2 border-[#bdbaba] outline-none rounded-full text-[17px]'
          />
          <button className='absolute p-2 rounded-full bg-red-500 right-[3%] top-[2.5px]'>
            <FaSearch className='w-[20px] h-[24px] text-white' />
          </button>
        </div>

        {/* Right: User Options */}
        <div className='flex items-center justify-center gap-3 relative'> 
          <span className='text-[18px] cursor-pointer rounded-full hover:bg-[#ded9d9] px-3 py-2 hidden md:block' onClick={()=>navigate("/listingpage1")}>List your home</span>
          <button className='px-5 py-2 flex items-center gap-2 border border-[#8d8c8c] rounded-full hover:shadow-lg' onClick={()=>setShowpopup(prev=>!prev)}>
            <span><GiHamburgerMenu className='w-5 h-5' /></span>
            {userData == null && <span><CgProfile className='w-6 h-6' /></span>}
            {userData != null && <span className='w-[30px] h-[30px] bg-[#080808] text-[white] rounded-full flex items-center justify-center'>{userData?.name.slice(0,1)} </span>}
          </button>
          {showpopup && <div className='w-[220px] h-[250px] absolute bg-slate-50 top-[110%] right-[3%] border-[1px] border-[#aaa9a9] z-10 rounded-lg'>
            <ul className='w-[100%] h-[100%] text-[17px] flex items-start justify-around flex-col py-[10px]'>
                {!userData && <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer' onClick={()=>{navigate("/login");
                setShowpopup(false)}}>Login</li>}
                {userData && <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer'onClick={()=>{handleLogout();
                setShowpopup(false)}}>Logout</li>}
                <div className='w-[100%] h-[1px] bg-[#c1c0c0]'></div>
                <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer' onClick={()=>{navigate("/listingpage1");
                setShowpopup(false)}}>List your Home</li>
                <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer'>My Listing</li>
                <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer'>Check booking</li>
            </ul>

          </div>}
        </div>
        
      </div>
      <div className='w-[100%] h-[60px] flex items-center justify-center block md:hidden'>
        <div className='w-[80%] relative '>
          <input
            type="text"
            placeholder="Any Where | Any Location | Any City"
            className='w-full px-[30px] py-[10px] border-2 border-[#bdbaba] outline-none rounded-full text-[17px]'
          />
          <button className='absolute p-2 rounded-full bg-red-500 right-[3%] top-[2.5px]'>
            <FaSearch className='w-[20px] h-[24px] text-white' />
          </button>
        </div>
      </div>
      

      {/* Trending Section */}
      <div className='w-[100vw] h-[85px] bg-white flex items-center justify-start cursor-pointer gap-[40px] overflow-auto md:justify-center px-[15px]'>
        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
        <MdWhatshot className='w-[30px] h-[30px] text-[black] ' />
        <h3>Trending</h3>
        </div>
        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] '>
        <GiFamilyHouse  className='w-[30px] h-[30px] text-[black] ' />
        <h3>Villa</h3>
        </div>
        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] text-nowrap'>
        <FaTreeCity className='w-[30px] h-[30px] text-[black] ' />
        <h3>Farm House</h3>
        </div>
        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] text-nowrap'>
        <MdOutlinePool className='w-[30px] h-[30px] text-[black] ' />
        <h3>Pool House</h3>
        </div>
        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
        <MdBedroomParent className='w-[30px] h-[30px] text-[black] ' />
        <h3>Rooms</h3>
        </div>
        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
        <BiBuildingHouse className='w-[30px] h-[30px] text-[black] ' />
        <h3>Flat</h3>
        </div>
        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
        <IoBedOutline className='w-[30px] h-[30px] text-[black] ' />
        <h3>PG</h3>
        </div>
        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
        <GiWoodCabin className='w-[30px] h-[30px] text-[black] ' />
        <h3>Cabins</h3>
        </div>
        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]'>
        <SiHomeassistantcommunitystore className='w-[30px] h-[30px] text-[black] ' />
        <h3>Shops</h3>
        </div>
       </div>
      
    </>
  );
}

export default Nav;
