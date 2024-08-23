import { SUPABASE_STORAGE_URL } from '../constants/config';

export function addAltSrc(image, file, folder) {
    const placeholder = folder
        ? `${SUPABASE_STORAGE_URL}/panels/${folder}/image-${file}.jpg`
        : `${SUPABASE_STORAGE_URL}/covers/${file}.jpg`;

    return {
        ...image,
        placeholder,
    };
}

export function getImageList(images) {
    const {
        alt,
        viewOneSrc: src1,
        viewOnePlaceholder: placeholder1,
        viewTwoSrc: src2,
        viewTwoPlaceholder: placeholder2,
    } = images;

    const imageList = src2
        ? [
              { alt: `${alt} (Image 1)`, src: src1, placeholder: placeholder1 },
              { alt: `${alt} (Image 2)`, src: src2, placeholder: placeholder2 },
          ]
        : [{ alt: `${alt} (Image 1)`, src: src1, placeholder: placeholder1 }];

    return imageList;
}
