"use client";

import { useEffect } from "react";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";

import {Auth} from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";


const AuthModal = () => {

    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const {session} = useSessionContext();
    const {onClose, isOpen}  = useAuthModal();

    const onChange = (open: boolean) =>{
        if(!open) 
            onClose();
    }


    // this use useEffect is to close the AuthModal when the user is logged in successfully

    useEffect(()=>{
        if(session){
            router.refresh();
            onClose();
        }
    },[session,router,onClose]);

    return ( 
        <Modal
            title="Welcome back to Cosmic"
            description="Login in to your account to continue."
            isOpen={isOpen}
            onChange={onChange}
        >
            <Auth
                supabaseClient={supabaseClient}
                theme= "dark"
                magicLink={true}
                providers={['github','google']}
                appearance={{
                    theme: ThemeSupa,
                    variables:{
                        default:{
                            colors:{
                                brand:'#404040',
                                brandAccent: '#22c55e'
                            }
                        }
                    }
                }}
            />
        </Modal>
     );
}
 
export default AuthModal;