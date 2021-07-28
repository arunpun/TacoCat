//Get user's input
function getValue() {

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let returnObj = palindromeCheck(userString);

    displayMessage(returnObj);
}

//Palindrome check
function palindromeCheck(userString) {
    //To lower case and remove spaces and special characters
    userString = userString.toLowerCase();
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    let revString = [];
    let returnObj = {};

    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }

    if (revString == userString) {
        returnObj.msg = "You entered a palindrome!";
    } else {
        returnObj.msg = `${userString} is not a palindrome!`;
    }

    returnObj.reversed = revString;

    return returnObj;
}

//Display message to the user
function displayMessage(returnObj) {
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("message").innerHTML = `Your phrase reversed is ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}