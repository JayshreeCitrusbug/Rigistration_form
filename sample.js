function formValidation(){
    var fname = document.myForm.fname;
    var lname = document.myForm.lname
    var uname = document.myForm.uname;
    var passid = document.myForm.pass;
    var cpassid = document.myForm.cpass;
    var uadd = document.myForm.address;
    var fage = document.myForm.fage;
    if (fname_validation(fname)) {
        if (lname_validation(lname)) {
            if (userid_validation(uname)) {
                if (passid_validation(passid)) {
                    if (cpassid_validation(cpassid)) {
                        if (allnumeric(fage)) {
                            if (alphanumeric(uadd)) {

                            }
                        }
                    }
                }
            }
        }
    }


    return false;
}


// function required() {
//     var empt1 = document.myForm.fname.value;
//     var empt2 = document.myForm.lname.value;
//     var empt3 = document.myForm.uname.value;
//     var empt4 = document.myForm.passid.value;
//     var empt5 = document.myForm.cpassid.value;
//     var empt6 = document.myForm.uadd.value;
//     var empt7 = document.myForm.fage.value;
//     if (empt1 === "") {
        
//         alert("Please enter a valid data");
//         return false;
//     }
// }
// document.getElementById("fname").addEventListener("invalid", GFGfun);
//     function GFGfun() {
//         alert(
//             "Please fill out the required fields.");
//     }
  
function fname_validation(fname){
    var letters = /[a-zA-Z]{2,30}$/;
    if((fname!= " ") && fname.value.match(letters))
    {
        console.log('First name is ', fname.value)
        return true;
    }
    else{

        alert('Please enter alphabetic value in Firstname.....!! \nlength of name should be grater than 2');
        fname.focus();
        return false;
    }
}

function lname_validation(lname){
    var letters = /[a-zA-Z]{2,30}$/;
    if(lname.value.match(letters) && (lname!= " "))
    {
        console.log('Last name is ', lname.value);
        return true;
    }
    else{
        alert('Please enter alphabetic value in Lastname......!!  \nlength of name should be grater than 2');
        lname.focus();
        return false;
        
    }
    
}

function userid_validation(uname){
    var letters = /^(?=.*[@_])[a-zA-Z@_]{3,10}$/;
    // if(!isNaN(uname)){
    //     alert("only characters are allowed");
    //     uname.focus();
    //     return false;
    // }
    if(uname.value.match(letters) && isNaN(uname) && (uname!=""))
    {
        console.log('User Name is' , uname.value);
        return true;
    }
    else
    {
        alert('Username must have @ or _ with alphabets \nlength of name should be grater than 3');
        uname.focus();
        return false;
    }
}

var passwords = "";
// [8 to 15 characters which contain at least one numeric digit and a special character
function passid_validation(inputtxt) {
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    if (inputtxt.value.match(paswd)) {
        passwords = inputtxt.value;
        console.log('Password Entred ', passwords);
        return true;
    }
    else {    
        alert('Please Set proper password before submitting..!!');
        alert('Password must contain at least 1-number, 1-special character and uppercase, lowercase letters, and at least 8 or more characters');
        return false;
    }

}

function cpassid_validation(inputpsw) {
    var cpaswd = inputpsw.value;
    if (passwords == cpaswd) {
        console.log("Confirm Password" , cpaswd);
        console.log('Password Matched')
        return true;
    }
    else {
        console.log("not matched cpass", cpaswd);

        alert('Confirm password does not match..!!');
        return false;

    }
}


function allnumeric(fage) {
    var numbers = /^[0-9]+$/;
    if (fage.value.match(numbers) && (fage!="")) {
        console.log("Age" , fage.value)
        return true;
    }
    else {
        alert('Age must have numeric value');
        fage.focus();
        return false;
    }
}



function alphanumeric(uadd) {
        console.log(uadd.value);
        return true;
    }


