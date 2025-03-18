declare global {
    namespace Components {
        interface ButtonPropsModel {
            text: string;
            // FIXME
            // onClick?: () => void;
            type: 'home' | 'back';
        }
    }
}

export {}