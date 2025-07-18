import React, { createContext } from 'react'
import { useState } from 'react'
export const authDataContext = createContext()
function AuthContext({children}) {
  let serverUrl = "http://localhost:8000"

  let [loading,setLoading] = useState(false)
  let value={
    serverUrl,
    loading,setLoading
  }
  return (
    <div>
      <authDataContext.Provider value={value}>
        {children}
      </authDataContext.Provider>
      </div>
  )
}

export default AuthContext


// import React, { createContext } from 'react'
// export const AuthDataContext = createContext()

// function AuthContext({Children}) {
//     let serverUrl = "http://localhost:8000"

//     let value={
//         serverUrl
//     }
//   return (
//     <div>
//         <AuthDataContext.Provider value={value}>
//             {Children}
//         </AuthDataContext.Provider>
//     </div>
//   )
// }

// export default AuthContext