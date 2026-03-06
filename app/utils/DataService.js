const FetchAddTwoNumbers = async (firstUserNum, secondUserNum) => {
    const response = await fetch(`https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/AddingTwoNumbers/Sum/${firstUserNum}/${secondUserNum}`);
    const data = await response.text();
    console.log(data);
    return data;
};



export { FetchAddTwoNumbers };