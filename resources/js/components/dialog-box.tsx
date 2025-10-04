import { Check, X } from "lucide-react"

interface DialogBoxProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    route: () => void;
}

export const DialogBox = ({open, onClose, children, route} : DialogBoxProps) => {
    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors cursor-default ${open ? 'visible bg-white/20' : 'invisible'}`}>
            <div onClick={(e) => e.stopPropagation()} className={`flex flex-col justify-center items-center bg-background rounded-xl shadow py-6 px-15 transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
                {children}
                <div className="flex flex-col justify-between items-center mt-7 gap-5 lg:flex-row lg:gap-20">
                    <button className="flex justify-center items-center bg-green-600 rounded-sm px-30 py-2 cursor-pointer hover:bg-green-500 lg:px-10 lg:py-2" onClick={route} type="button">
                        <Check className="text-white size-7"/>
                    </button>
                    <button className="flex justify-center items-center bg-red-600 rounded-sm px-30 py-2 cursor-pointer hover:bg-red-500 lg:px-10 lg:py-2" onClick={onClose} type="button">
                        <X className="text-white size-7"/>
                    </button>
                </div>
            </div>
        </div>        
    )
}