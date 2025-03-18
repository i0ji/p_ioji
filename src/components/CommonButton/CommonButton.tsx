'use client'

import s from './CommonButton.module.scss';
import {useRouter} from "next/navigation";

export default function CommonButton(props: Components.ButtonPropsModel) {


    const router = useRouter();

    const handleHome = () => {
        router.push('/'); // Перенаправляем на начальную страницу
    };

    const handleBack = () => {
        console.log('back')
    }


    const buttonHandlers = {
        home: handleHome,
        back: handleBack,
    };

    return (
        <button className={s.commonButton} onClick={buttonHandlers[props.type]}>
            text
        </button>
    )

}
