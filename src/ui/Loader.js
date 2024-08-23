import { ModalProvider } from '../contexts/ModalContext';

function Loader() {
    return (
        <ModalProvider.Window windowName="loader">
            <div className="loader"></div>
        </ModalProvider.Window>
    );
}

export default Loader;
