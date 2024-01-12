"use client";

import {useEffect, useState} from "react";

// interface ModalProviderProps {
//     products: ProductWithPeriod[];
// }

const ModalProvider = () =>{
    const [isMounted, setIsMounted]  = useState(false);

    useEffect(()=>{
        setIsMounted(true);
    },[]);

    if(!isMounted){
        return null;
    }

    return(
        <>
            Modals
        </>
    )
}


export default ModalProvider;   