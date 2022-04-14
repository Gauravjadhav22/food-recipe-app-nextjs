import '../styles/globals.css'
import { useState } from 'react'
function MyApp({ Component, pageProps }) {
  const [query,setQuery] = useState("gaurav")
  const [req,setReq] = useState(false)
  return( 

    <Component {...pageProps} />
    )
  
}

export default MyApp
