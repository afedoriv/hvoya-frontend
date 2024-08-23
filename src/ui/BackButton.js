import { TfiAngleLeft } from 'react-icons/tfi';
import Button from './Button';
import { useMoveBack } from '../hooks/useMoveBack';

function BackButton({ defaultPath, styles }) {
    const navigateBack = useMoveBack(defaultPath);

    return (
        <Button styles={styles} onClick={navigateBack}>
            <TfiAngleLeft />
            <span>Back</span>
        </Button>
    );
}

export default BackButton;
