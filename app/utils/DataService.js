const FetchAddTwoNumbers = async (firstUserNum, secondUserNum) => {
    const response = await fetch(`https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/AddingTwoNumbers/Sum/${firstUserNum}/${secondUserNum}`);
    const data = await response.text();
    console.log(data);
    return data;
};

const FetchGreaterThanLessThan = async (firstNum, secondNum) => {
    const response = await fetch(`https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/GreaterThanLessThan/Result/${firstNum}/${secondNum}`);
    const data = await response.text();
    return data;
}

const FetchHelloWorld = async (name) => {
    const response = await fetch(`https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/HelloWorld/Greeting/${name}`);
    const data = await response.text();
    return data;
};

const FetchMadLib = async (name, occupation, object) => {
    const response = await fetch(`https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/MadLib/MadLib/${name}/${occupation}/${object}`);
    const data = await response.text();
    return data;
};

const FetchAskingQuestions = async (questionOne, questionTwo) => {
    const response = await fetch(`https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/AskingQuestions/Responses/${questionOne}/${questionTwo}`);
    const data = await response.text();
    return data;
};

const FetchMagic8Ball = async (question) => {
    const response = await fetch(`https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/Magic8Ball/Magic8/${question}`);
    const data = response.text();
    return data;
};

const FetchReverseItAlphanumeric = async (userString) => {
    const response = await fetch(`https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/ReverseItAlphanumeric/Alphanumeric/${userString}`);
    const data = response.text();
    return data;
};

const FetchReverseItNumbersOnly = async (userNum) => {
    const response = await fetch(`https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/ReverseItNumbersOnly/srebmuN/${userNum}`);
    const data = await response.text();
    return data;
};

const FetchOddOrEven = async (number) => {
    const response = await fetch(`https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/OddOrEven/Result/${number}`);
    const data = response.text();
    return data;
};

const FetchRestaurantPicker = async (foodSelection) => {
    const response = await fetch(`https://allforoneapibe-bthaa3dfd2aabpgm.westus3-01.azurewebsites.net/RestaurantPicker/Restaurant/${foodSelection}`);
    const data = await response.text();
    return data;
};

export { FetchAddTwoNumbers, FetchGreaterThanLessThan, FetchHelloWorld, FetchMadLib, FetchAskingQuestions, FetchMagic8Ball, FetchReverseItAlphanumeric, FetchReverseItNumbersOnly, FetchOddOrEven, FetchRestaurantPicker };