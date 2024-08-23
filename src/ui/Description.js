import Box from './Box';
import Text from './Text';
import { isEqual as isEmpty, transformString } from '../utils/helpers/helpers';

function Description({ description, styles }) {
    return (
        <Box styles={styles.container}>
            {description.map((paragraph, index) =>
                isEmpty(paragraph, '') ? (
                    <br key={`description-line-${index}`} />
                ) : (
                    <Text
                        text={paragraph}
                        styles={styles.text}
                        key={`description-line-${transformString(paragraph)}}`}
                    />
                ),
            )}
        </Box>
    );
}

export default Description;
