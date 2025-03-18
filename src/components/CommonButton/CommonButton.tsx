import s from './CommonButton.module.scss';

export default function CommonButton(props: Components.ButtonPropsModel) {


    const handleHome = () => {
        console.log('HOME')
    }

    const handleBack = () => {
        console.log('BACK')
    }

    const buttonHandlers = {
        home: handleHome,
        back: handleBack,
    };

    return (
        <button className={s.commonButton} onClick={buttonHandlers[props.type]}>
            {props?.text}
        </button>
    )

}
