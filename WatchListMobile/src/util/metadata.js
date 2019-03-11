export const imgSrcField = "imgSrc";
export const recordTypeField = 'recordType';
export const recordNameField = 'name';

export function getImgSrcFromPath(posterPath)
{
    const baseURL = 'https://image.tmdb.org/t/p/w92';
    return baseURL + posterPath;
}
