"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {

    const uploadModal = useUploadModal();
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
            Form
        </Modal>
     );
}
 
export default UploadModal;