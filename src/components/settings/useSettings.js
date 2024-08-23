import { useQuery } from '@tanstack/react-query';
import { getSettings } from '../../services/apiSettings';
import { addAltSrc } from '../../utils/helpers/image';
import { getValuesByKey, generateList } from '../../utils/helpers/helpers';

export function useSettings() {
    const {
        isLoading,
        data: {
            aboutImg,
            altImg,
            categoryImgSet,
            categoryList,
            collectionList,
            contactImg,
            contactImgSet,
            contactImgSet2,
            faqsImg,
            slideImgSet,
            shopImg,
            subjectList,
        } = {},
        error,
    } = useQuery({
        queryKey: ['website-settings'],
        queryFn: getSettings,
    });

    const aboutImage = addAltSrc(aboutImg, 'about');
    const altImage = addAltSrc(altImg, 'not-found');
    const contactImage = addAltSrc(contactImg, 'contact');
    const faqsImage = addAltSrc(faqsImg, 'faqs');
    const shopImage = addAltSrc(shopImg, 'shop');

    const slides = generateList(slideImgSet, 1);
    const categoryImages = generateList(categoryImgSet);
    const contactPanel1 = generateList(contactImgSet);
    const contactPanel2 = generateList(contactImgSet2);

    const categories = getValuesByKey(categoryList, 'category');
    const subjects = getValuesByKey(subjectList, 'subject');
    const collections = getValuesByKey(collectionList, 'collection');

    return {
        isLoading,
        error,
        aboutImage,
        altImage,
        categories,
        categoryImages,
        collections,
        contactImage,
        contactPanel1,
        contactPanel2,
        faqsImage,
        slides,
        shopImage,
        subjects,
    };
}
