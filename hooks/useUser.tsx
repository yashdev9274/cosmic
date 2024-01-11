import { Subscription, UserDetails } from "@/types";
import { useUser as useSupaUser, User, useSessionContext } from "@supabase/auth-helpers-react";
import { createContext, useState } from "react";

type UserContextType ={
    accessToken: string | null;
    user: User | null;
    userDetails: UserDetails | null;
    isLoading: boolean;
    subscription: Subscription | null;

};


export const UserContext = createContext<UserContextType | undefined>(
    undefined
  );



export interface Props{
    [propName: string]: any;
}


export const MyUserContextProvider = (props: Props)  => {

    const {session, isLoading: isLoadingUser, supabaseClient: supabase } = useSessionContext();

    const user = useSupaUser();
    const accessToken = session?.access_token ?? null;
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [subscription, setSubscription] = useState<Subscription | null>(null);

    const getUserDetails = () => supabase.from('users').select('*').single();
    const getSubscription =()=>
    supabase
        .from('subscriptions')
        .select('*,prices(*,products(*))')
        .in('status', ['trailing','active' ])
        .single();


}