import ErrorDetails from './ErrorDetails';
import { ModalProvider } from '../../contexts/ModalContext';

const modalWindowStyles = {
    container:
        'relative z-50 bg-studio-100 rounded-lg border border-gray-900 border-opacity-5 shadow-lg h-fit max-w-[225px] 4xs:max-w-[250px] 3xs:max-w-[290px] 2xs:max-w-[370px] xs:max-w-[480px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 2xs:-translate-y-3/4 p-2 4xs:py-5 3xs:px-4 2xs:py-6 2xs:px-5  xs:pt-8',
    button: 'cursor-pointer text-gray-900 text-sm p-3 absolute top-2 right-2 4xs:top-5 3xs:right-4 2xs:top-6 2xs:right-5 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-studio-300 focus:transition focus:ease-linear transition-all ease-linear hover:text-studio-600 active:text-gray-900',
};

function ErrorMessage({ error }) {
    return (
        <ModalProvider.Window
            windowName="error-message"
            styles={modalWindowStyles}
        >
            <ErrorDetails error={error} />
        </ModalProvider.Window>
    );
}

export default ErrorMessage;
