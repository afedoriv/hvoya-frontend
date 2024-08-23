import supabase from './supabase';

export async function getSettings() {
    const { data, error } = await supabase
        .from('website-settings')
        .select(
            'aboutImg:aboutImage(alt, src), altImg:altImage(alt, src), contactImg:contactImage(alt, src), faqsImg:faqsImage(alt, src), shopImg:shopImage(alt, src), slideImgSet:imageList1( image1(alt, src), image2(alt, src), image3(alt, src), image4(alt, src) ), categoryImgSet:imageList2( image1(alt, src), image2(alt, src), image3(alt, src), image4(alt, src) ), contactImgSet:imageList3( image1(alt, src), image2(alt, src), image3(alt, src), image4(alt, src) ), contactImgSet2:imageList4( image1(alt, src), image2(alt, src), image3(alt, src), image4(alt, src) ), categoryList:product-categories(category:categoryName), collectionList:collections(collection:collectionName), subjectList:user-message-subjects(subject:subjectName)',
        )
        .single();

    if (error) {
        console.error(error);
        throw new Error('Settings could not be loaded.');
    }

    return data;
}
