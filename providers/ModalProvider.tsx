"use client";

import {useEffect, useState} from "react";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
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
            <AuthModal/>
            <UploadModal/>
        </>
    )
}


export default ModalProvider;   