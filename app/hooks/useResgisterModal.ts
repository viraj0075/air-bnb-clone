import {create} from 'zustand';

interface ResgisterModalStore
{
    isOpen:boolean;
    onOpen : () => void;
    onClose : () => void;
}
const useResgisterModal = create<ResgisterModalStore>((set) => ({
    isOpen:true,
    onOpen:() => set({isOpen:true}),
    onClose:() => set({isOpen:false}),
}))

export default useResgisterModal;