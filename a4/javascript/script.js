function validateForm(form){

firstName(); //done
lastName(); //done
email(); //basics done
phone(); //done
username(); //done
password(); //done
address(); //done
city(); //done
state(); //basics done
country(); //basics done
zipCode(); //done

if(firstName()&&lastName()&&email()&&phone()&&username()&&
password()&&address()&&city()&&state()&&country()&&zipCode())
    //go to thank you page
else
    form.preventDefault()

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

    //3) do the validation
    if (email==="null" || email==="" ) {
        errorMessages += "<p>The email is required</p>";
        console.log("Email is invalid — required")
        } 
        else {
                addressValidation = true;
                console.log("Address valid");
    }
    //4) send error messages 
    document.getElementById("errorEmail").innerHTML = errorMessages;

    //5) return the status of each field
    return(emailValidation);
}

function phone(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var phoneValidation = false;

    //2) create variables to read the values from html text inputs
    var phone = document.getElementById("Phone").value;
    var errorMessage = "";

    //3) do the validation
     if (phone==="null" || phone==="" || phone.length > 15 ) {
        errorMessages += "<p>The phone number is required and cannot be over 15 charachters</p>";
        console.log("Phone is invalid — length")
        } else if (lastname.match("^[0-9]+$")===null) 
            errorMessages += "<p>Invalid caracter in phone number (accepts only numbers)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                phoneValidation = true;
                console.log("Last name valid");
    }
    //4) send error messages 
    document.getElementById("errorPhone").innerHTML = errorMessages;

    //5) return the status of each field
    return(phoneValidation);
}

function username(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var unValidation = false;

    //2) create variables to read the values from html text inputs
    var username = document.getElementById("Username").value;
    var errorMessage = "";

    //3) do the validation
    if (username==="null" || username==="" || username.length > 12 ) {
        errorMessages += "<p>The username is required and cannot be over 12 charachters</p>";
        console.log("Username is invalid — length")
        } 
        else {
                unValidation = true;
                console.log("Username valid");
    }
    //4) send error messages 
    document.getElementById("errorUsername").innerHTML = errorMessages;
    
    //5) return the status of each field
    return(unValidation);
}

function password(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var passwordValidation = false;

    //2) create variables to read the values from html text inputs
    var password = document.getElementById("Password").value;
    var errorMessage = "";

    //3) do the validation
    if (password==="null" || password==="" || password.length > 7 ) {
        errorMessages += "<p>The password is required and cannot be over 7 charachters</p>";
        console.log("Password is invalid — length")
        } 
        else {
                passwordValidation = true;
                console.log("Password valid");
    }
    
    //4) send error messages 
    document.getElementById("errorPassword").innerHTML = errorMessages;
    
    //5) return the status of each field
    return(passwordValidation);
}

function address(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var addressValidation = false;
    
    //2) create variables to read the values from html text inputs
    var address = document.getElementById("Address").value;
    var errorMessage = "";

    //3) do the validation
    if (password==="null" || password==="" ) {
        errorMessages += "<p>The address is required</p>";
        console.log("Address is invalid — required")
        } 
        else {
                addressValidation = true;
                console.log("Address valid");
    }
    
    //4) send error messages 
    document.getElementById("errorAddress").innerHTML = errorMessages;
    
    //5) return the status of each field
    return(addressValidation);
}

function city(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var cityValidation = false;

    //2) create variables to read the values from html text inputs
    var city = document.getElementById("City").value;
    var errorMessage = "";

    //3) do the validation
    if (city==="null" || city==="" ) {
        errorMessages += "<p>The city is required</p>";
        console.log("City is invalid — required")
        } 
        else {
                cityValidation = true;
                console.log("City valid");
    }
    
    //4) send error messages 
    document.getElementById("errorCity").innerHTML = errorMessages;
    
    //5) return the status of each field
    return(cityValidation);
}

function state(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var stateValidation = false;

    //2) create variables to read the values from html text inputs
    var state = document.getElementById("State").value;
    var errorMessage = "";

    //3) do the validation
     stateValidation=true;
    
    //4) send error messages 
    
    //5) return the status of each field
    return(stateValidation);
}

function country(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var countryValidation = false;
    
    //2) create variables to read the values from html text inputs
    var country = document.getElementById("Country").value;
    var errorMessage = "";

    //3) do the validation
    if (password==="null" || password==="" ) {
        errorMessages += "<p>The country is required</p>";
        console.log("Country is invalid — required")
        } 
        else {
                countryValidation = true;
                console.log("Country valid");
    }

    //4) send error messages 
    document.getElementById("errorCountry").innerHTML = errorMessages;
    
    //5) return the status of each field
    return(countryValidation);
}

function zipCode(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var zipValidation = false;
    
    //2) create variables to read the values from html text inputs
    var zipcode = document.getElementById("ZipCode").value;
    var errorMessage = "";

    //3) do the validation
    var country = document.getElementById("country").value;
        if (country === "USA){
            if (zipcode==="null" || zipcode==="" || zipcode.length > 5 ) {
        errorMessages += "<p>The zip code is required and cannot be over 5 charachters</p>";
        console.log("Zip code is invalid — length")
        } 
        else
            zipValidation = true;
            }
        else
            zipValidation = true;
    //4) send error messages 
    document.getElementById("errorZipCode").innerHTML = errorMessages;
    
    //5) return the status of each field
    return(zipValidation);
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


