import React from 'react'
import { useContext } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { listingDataContext } from '../Context/ListingContext';


function ListingPage3() {
  let navigate = useNavigate()
  let {title, setTitle,
          description, setdescription,
          frontEndImage1, setfrontEndImage1,
          frontEndImage2, setfrontEndImage2,
          frontEndImage3, setfrontEndImage3,
          backEndImage1, setbackEndImage1,
          backEndImage2, setbackEndImage2,
          backEndImage3, setbackEndImage3,
          rent, setRent,
          city, setCity,
          landmark, setLandmark,
          category, setCategory,
          handleAddListing,
          adding,setAdding
        } = useContext(listingDataContext)
  return (
    <div className='w-[100%] h-[100vh] bg-white flex items-center justify-center gap-[10px] flex-col relative overflow-auto'>
      <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center' onClick={() => navigate("/listingpage1")}>
      <FaArrowLeft className='w-[30px] h-[30px] text-[white]' /></div>

      <div className='w-[95%] flex items-start justify-start text-[25px] md:w-[80%] md-[10px]'>
        <h1 className='text-[20px] text-[#272727] md:text-[30px] text-ellipsis text-nowrap overflow-hidden'>
          {`In ${landmark.toUpperCase()}, ${city.toUpperCase()}`}
        </h1>
      </div>
      <div className='w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row '>
        <div className='w-[100%] h-[65%] md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-[2px] '>
          <img src={frontEndImage1} alt="" className='w-[100%]'/>
        </div>
        <div className='w-[100%] h-[50%] flex items-center justify-center md:w-[50%] md:h-[100%] md:flex-col '>
          <div className='w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px]'>
          <img src={frontEndImage2} alt="" className='w-[100%]'/>

          </div>
          <div className='w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px]'>
          <img src={frontEndImage3} alt="" className='w-[100%]'/>

          </div>
        </div>

        
      </div>
      <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px]'>{`${title.toUpperCase()}, ${category.toUpperCase()}, ${landmark.toUpperCase()}`}</div>
      <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px] text-gray-700'>{`${description.toUpperCase()}`}</div>
      <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px]'>{`Rs.${rent}/day`}</div>
      <div className='w-[95%] h-[50px] flex items-center justify-start px-[110px]'>
      <button className='px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg' onClick={handleAddListing} disabled={adding}>{adding? "Adding...":"Add Listing"}</button>
      </div>
    </div>
  )
}

export default ListingPage3