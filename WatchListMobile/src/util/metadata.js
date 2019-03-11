export const imgSrcField = "imgSrc";
export const recordTypeField = 'recordType';
export const recordNameField = 'name';
export const imgThumbnailWidth = 90;
export const imgThumbnailHeight = 125;

export function getImgSrcFromPath(posterPath)
{
    if (posterPath)
    {
        const baseURL = 'https://image.tmdb.org/t/p/w92';
        return baseURL + posterPath;
    }
    return null;
}
