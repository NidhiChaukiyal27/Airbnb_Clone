import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'
import { authDataContext } from './AuthContext'
import { useNavigate } from 'react-router-dom'

export const listingDataContext = createContext()

function ListingContext({ children }) {
    let navigate = useNavigate()
    let [title, setTitle] = useState("")
    let [description, setdescription] = useState("")
    let [frontEndImage1, setfrontEndImage1] = useState(null)
    let [frontEndImage2, setfrontEndImage2] = useState(null)
    let [frontEndImage3, setfrontEndImage3] = useState(null)
    let [backEndImage1, setbackEndImage1] = useState(null)
    let [backEndImage2, setbackEndImage2] = useState(null)
    let [backEndImage3, setbackEndImage3] = useState(null)
    let [rent, setRent] = useState("")
    let [city, setCity] = useState("")
    let [landmark, setLandmark] = useState("")
    let [category, setCategory] = useState("")
    let [adding, setAdding] = useState(false)

    let {serverUrl} = useContext(authDataContext)






    const handleAddListing = async () => {
        setAdding(true)
        try {
            let formData = new FormData()
            formData.append("title", title)
            formData.append("image1", backEndImage1)
            formData.append("image2", backEndImage2)
            formData.append("image3", backEndImage3)
            formData.append("description", description)
            formData.append("rent", rent)
            formData.append("city", city)
            formData.append("landmark", landmark)
            formData.append("category", category)

            let result = await axios.post(serverUrl + "/api/listing/add", formData,{withCredentials:true})
            setAdding(false)

            console.log(result)
            navigate("/")
            setTitle("")
            setdescription("")
            setfrontEndImage1(null)
            setfrontEndImage2(null)
            setfrontEndImage3(null)
            setbackEndImage1(null)
            setbackEndImage2(null)
            setbackEndImage3(null)
            setRent("")
            setCity("")
            setLandmark("")
            setCategory("")


        } catch (error) {
            setAdding(false)
            console.log(error)


        }
    }




    let value = {
        title, setTitle,
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
        setAdding,adding
    }
    return (
        <div>
            <listingDataContext.Provider value={value}>
                {children}
            </listingDataContext.Provider>
        </div>
    )
}

export default ListingContext