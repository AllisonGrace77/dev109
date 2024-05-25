function validateForm(){

firstName();
lastName();
email();
phone();
username();
password();
address();
city();
state();
country();
zipCode();

if(firstName()&&lastName()&&email()&&phone()&&username()&&
password()&&address()&&city()&&state()&&country()&&zipCode()&&)
    //go to thank you page
else
    //dont go to ty page, display errors

}

function firstName(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var fnValidation = false;

    //2) create variables to read the values from html text inputs
    var firstname = document.getElementById("FirstName").value;

    //3) do the validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in first name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                fnValidation = true;
                console.log("First name valid");
        }

    //4) send error messages 
    document.getElementById("firstNameError").innerHTML = errorMessages;

    //5) return status of each field
    return (fnValidation);
}

function lastName(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var lnValidation = false;

    //2) create variables to read the values from html text inputs
    var lastname = document.getElementById("LastName").value;
    
    //3) do the validation
    if (lastname==="null" || lastname==="" || lastname.length > 50 ) {
        errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
        console.log("Last name invalid — length")
        } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                lnValidation = true;
                console.log("Last name valid");
    }

    //4) send error messages 
    document.getElementById("errorLastName").innerHTML = errorMessages;
    
    //5) return the status of each field
    return(lnValidation);
}

function email(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var emailValidation = false;

    //2) create variables to read the values from html text inputs
    var email = document.getElementById("Email").value;
}

function phone(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var phoneValidation = false;

    //2) create variables to read the values from html text inputs
    var phone = document.getElementById("Phone").value;
    var errorMessage = "";
}

function username(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var unValidation = false;

    //2) create variables to read the values from html text inputs
    var username = document.getElementById("Username").value;
    var errorMessage = "";
}

function password(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var passwordValidation = false;

    //2) create variables to read the values from html text inputs
    var password = document.getElementById("Password").value;
    var errorMessage = "";
}

function address(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var addressValidation = false;
    
    //2) create variables to read the values from html text inputs
    var address = document.getElementById("Address").value;
    var errorMessage = "";
}

function city(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var cityValidation = false;

    //2) create variables to read the values from html text inputs
    var city = document.getElementById("City").value;
    var errorMessage = "";
}

function state(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var stateValidation = false;

    //2) create variables to read the values from html text inputs
    var state = document.getElementById("State").value;
    var errorMessage = "";
}

function country(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var countryValidation = false;
    
    //2) create variables to read the values from html text inputs
    var country = document.getElementById("Country").value;
    var errorMessage = "";
}

function zipCode(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var zipValidation = false;
    
    //2) create variables to read the values from html text inputs
    var zipcode = document.getElementById("ZipCode").value;
    var errorMessage = "";
}    
















//for my reference

function isValid() {
    if (firstName() //&&
       // lastName()
    )
    return true;
    else
        document.getElementById("submitError").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

FirstName.addEventListener('blur', firstName, false);


