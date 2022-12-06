import React, { useState } from 'react';
import * as RToast from '@radix-ui/react-toast';
import { ToastItemProps} from './types';
import { useDispatch } from 'react-redux';
import * as Main from '@_redux/main';


export default function ToastItem(props: ToastItemProps) {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(true);

    const handlerClose = (open: boolean) => {
        dispatch(Main.updateGlobalError(props.key))
        setOpen(open)
    }

    return <>
        <RToast.Root className='rtoast-root' open={open} onOpenChange={handlerClose}>
            <RToast.Title className='rtoast-title' >{props.title}</RToast.Title>
            <RToast.Description className='rtoast-description'>{props.description}</RToast.Description>
            <RToast.Close aria-label="Close">
                <span aria-hidden>×</span>
            </RToast.Close>
        </RToast.Root>
    </>
}