import { createContext, useState } from 'react';
import Open from '../components/modal/Open';
import Window from '../components/modal/Window';

const ModalContext = createContext();

function ModalProvider({ children }) {
    const [elementName, setElementName] = useState('');

    const closeWindow = () => setElementName('');
    const openWindow = setElementName;

    return (
        <ModalContext.Provider
            value={{
                elementName,
                closeWindow,
                openWindow,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

ModalProvider.Open = Open;
ModalProvider.Window = Window;

export { ModalContext, ModalProvider };
