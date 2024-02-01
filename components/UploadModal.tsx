"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";

const UploadModal = () => {

    const uploadModal = useUploadModal();


    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        defaultValues:{
            author:"",
            title:"",
            song:"",
            Image:"",

        }
    });


    const onSubmit: SubmitHandler<FieldValues>= async (values)=>{}

    const onChange = (open: boolean)=>{
        if(!open){
            // 

            uploadModal.onClose();
        }
    }
    return ( 
        <Modal
            title="Add a song"
            description="Upload mp3 file"
            isOpen = {uploadModal.isOpen}
            onChange={onChange}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input/>
            </form>
        </Modal>
     );
}
 
export default UploadModal;