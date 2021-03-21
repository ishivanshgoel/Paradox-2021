import React,{ useState } from 'react'
import Loader from './Loader'

/**
 * @author ishivanshgoel
 */

function LoaderHook() {
    const [loading, setLoading] = useState(false)

    return (
        [
            (loading)?(
                <Loader/>
            ):null,
            ()=>setLoading(true),
            ()=>setLoading(false)
        ]
    )
}

export default LoaderHook
