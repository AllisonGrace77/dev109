function validateForm(form){
console.log("validating form...");
console.log(firstName()); //done
console.log(lastName()); //done
console.log(email()); //basics done
console.log(phone()); //done
console.log(username()); //done
console.log(password()); //done
console.log(address()); //done
console.log(city()); //done
console.log(state()); //basics done
console.log(country()); //basics done
console.log(zipCode()); //done 

if(!(firstName()&&lastName()&&email()&&phone()&&username()&&password()&&address()&&city()&&state()&&country()&&zipCode())){
    event.preventDefault();
    console.log("NOT VALID");
    return false;
  }
else{
    console.log("VALID");
   // document.getElementById("myForm").submit();
    return true;
}
}

function firstName(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var fnValidation = false;

    //2) create variables to read the values from html text inputs
    var firstname = document.getElementById("FirstName").value;
    var errorMessage = "";

    //3) do the validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessage += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessage += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                fnValidation = true;
                console.log("First name valid");
        }

    //4) send error messages 
    document.getElementById("firstNameError").innerHTML = errorMessage;

    //5) return status of each field
    return (fnValidation);
}

function lastName(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var lnValidation = false;

    //2) create variables to read the values from html text inputs
    var lastname = document.getElementById("LastName").value;
    var errorMessage = "";
    
    //3) do the validation
    if (lastname==="null" || lastname==="" || lastname.length > 50 ) {
        errorMessage += "<p>The last name is required and cannot be greater than 50 characters</p>";
        console.log("Last name invalid — length")
        } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessage += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                lnValidation = true;
                console.log("Last name valid");
    }

    //4) send error messages 
    document.getElementById("lastNameError").innerHTML = errorMessage;
    
    //5) return the status of each field
    return(lnValidation);
}

function email(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var emailValidation = false;

    //2) create variables to read the values from html text inputs
    var email = document.getElementById("Email").value;
    var errorMessage = "";

    //3) do the validation
    if (email==="null" || email==="" ) {
        errorMessage += "<p>The email is required</p>";
        console.log("Email is invalid — required");
        } 
        else if (email.match('@')===null){
        errorMessage += "<p>Please include an @ symbol</p>";
        console.log("Email is invalid — @");
        }
        else if (email.match('.com')===null && email.match('.net')===null && email.match('.edu')===null){
            errorMessage += "<p>Please include either '.com', '.net', or '.edu' in your email</p>";
            console.log("Email is invalid — end");
        }
        else {
                emailValidation = true;
                console.log("Email valid");
    }
    //4) send error messages 
    document.getElementById("emailError").innerHTML = errorMessage;

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
     if (phone==="null" || phone==="" || phone.length > 15 || phone.length < 10 ) {
        errorMessage += "<p>The phone number is required and cannot be under 10 or over 15 charachters</p>";
        console.log("Phone is invalid — length"); } 
     else if (phone.match("^[0-9]+$")===null) {
            errorMessage += "<p>Invalid character in phone number (accepts only numbers)</p>";
            console.log("Phone number invalid — bad characters"); } 
     else {
                phoneValidation = true;
                console.log("Phone number valid");
    }

    
    //4) send error messages 
    document.getElementById("phoneError").innerHTML = errorMessage;

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
        errorMessage += "<p>The username is required and cannot be over 12 charachters</p>";
        console.log("Username is invalid — length");
        } 
        else {
                unValidation = true;
                console.log("Username valid");
    }
    //4) send error messages 
    document.getElementById("usernameError").innerHTML = errorMessage;
    
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
        errorMessage += "<p>The password is required and cannot be over 7 charachters</p>";
        console.log("Password is invalid — length");
        } 
        else {
                passwordValidation = true;
                console.log("Password valid");
    }
    
    //4) send error messages 
    document.getElementById("passwordError").innerHTML = errorMessage;
    
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
    if (address==="null" || address==="" ) {
        errorMessage += "<p>The address is required</p>";
        console.log("Address is invalid — required");
        } 
        else {
                
                addressValidation = true;
                console.log("Address valid");
    }
    
    //4) send error messages 
    document.getElementById("addressError").innerHTML = errorMessage;
    
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
        errorMessage += "<p>The city is required</p>";
        console.log("City is invalid — required")
        } 
        else {
                cityValidation = true;
                console.log("City valid");
    }
    
    //4) send error messages 
    document.getElementById("cityError").innerHTML = errorMessage;
    
    //5) return the status of each field
    return(cityValidation);
}

function state(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var stateValidation = false;

    //2) create variables to read the values from html text inputs
    var s = document.getElementById("State");
    var state = s.value;
    var country = document.getElementById("Country").value;
    var errorMessage = "";

    //3) do the validation
    if(country==="USA"){
        if (state==="n/a"){
            errorMessage += "<p>A state is required in the United States</p>";
            console.log("State is invalid — required for US");
        }
        else{
            stateValidation=true;
        }
    }
    else
         stateValidation=true;
    
    //4) send error messages 
    document.getElementById("stateError").innerHTML = errorMessage;
    
    //5) return the status of each field
    return(stateValidation);
}

function country(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var countryValidation = false;
    
    //2) create variables to read the values from html text inputs
    var c = document.getElementById("Country");
    var country = c.value;
    var errorMessage = "";

    //3) do the validation
    if (country==="n/a") {
        errorMessage += "<p>The country is required</p>";
        console.log("Country is invalid — required");
        } 
        else {
                countryValidation = true;
                console.log("Country valid");
    }

    //4) send error messages 
    document.getElementById("countryError").innerHTML = errorMessage;
    
    //5) return the status of each field
    return(countryValidation);
}

function zipCode(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var zipValidation = false;
    
    //2) create variables to read the values from html text inputs
    var zipcode = document.getElementById("ZipCode").value;
    var country = document.getElementById("Country").value;
    var errorMessage = "";

    //3) do the validation
        if (country === "USA"){
            if (zipcode==="null" || zipcode==="" || zipcode.length > 5 || firstname.length < 5 ) {
        errorMessage += "<p>The zip code is required and must be 5 digits</p>";
        console.log("Zip code is invalid — length");
        } 
        else if (zipcode.match("^[0-9]+$")===null) {
            errorMessage += "<p>Invalid character in zip code (accepts only numbers)</p>";
            console.log("Zip code invalid — bad characters"); } 
        else{
            zipValidation = true; 
            console.log("Zip code valid");}
            }
        else {
            zipValidation = true;
            console.log("Zip code valid (empty)");
        }
    
    //4) send error messages 
    document.getElementById("zipCodeError").innerHTML = errorMessage;
    
    //5) return the status of each field
    return(zipValidation);
}    
