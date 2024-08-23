import { Toaster as ToasterContainer, toast, ToastBar } from 'react-hot-toast';
import { TfiCheck, TfiClose } from 'react-icons/tfi';
import Box from './Box';
import Button from './Button';

const options = {
    position: 'top-center',
    duration: 5000,
    success: {
        icon: (
            <Box styles="rounded-full bg-studio-800 p-1.5 lg:p-2">
                <span className="sr-only">Success</span>
                <TfiCheck className="text-sm text-studio-100" />
            </Box>
        ),
    },
    error: {
        icon: (
            <Box styles="rounded-full bg-studio-600 p-1.5 lg:p-2">
                <span className="sr-only">Error</span>
                <TfiClose className="text-sm text-studio-100" />
            </Box>
        ),
    },
    style: {
        background: 'transparent',
        padding: 0,
        maxWidth: '500px',
    },
};

function Toaster() {
    return (
        <ToasterContainer gutter={12} toastOptions={options}>
            {(t) => (
                <ToastBar toast={t}>
                    {({ icon, message }) => (
                        <Box styles="pointer-events-auto w-full rounded-lg border border-studio-200 border-opacity-5 bg-studio-100 p-2 shadow-lg 2xs:p-3.5 xs:p-4 sm:px-5">
                            <Box styles="flex items-center space-x-1 3xs:space-x-1.5">
                                {icon}

                                <Box styles="text-[13px] font-thin text-gray-900 3xs:text-[13.5px] 2xs:text-sm lg:text-[14.5px]">
                                    {message}
                                </Box>

                                {t.className === 'notification-control' && (
                                    <Button
                                        styles="p-3"
                                        onClick={() => toast.dismiss(t.id)}
                                        ariaLabel="Close"
                                    >
                                        <TfiClose className="text-sm text-gray-900" />
                                    </Button>
                                )}
                            </Box>
                        </Box>
                    )}
                </ToastBar>
            )}
        </ToasterContainer>
    );
}

export default Toaster;
