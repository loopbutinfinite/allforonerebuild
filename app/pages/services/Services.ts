export const FetchApiData = async () => {
    const response = await fetch ("https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/");
    const data = await response.json();
    return data;
};