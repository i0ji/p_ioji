import s from './Button.module.scss';

import {useRouter} from 'next/navigation';

export default function Button(props: ButtonPropsModel) {

    const route = useRouter();


    const handleHome = () => {
        route.push('/');
    }
``
    const handleBack = () => {
        if (window.history.length > 1) {
            route.back();
        }
    }

    const buttonHandlers = {
        home: handleHome,
        back: handleBack,
    };


    return (
        <button className={s.commonButton} onClick={buttonHandlers[props.type]}>
            {props.text}
        </button>
    )

}
