function formValidation() {
    var name = document.forms["registration"]["username"].value;
    if (name == "") {
      alert("Name must be filled out!");
      return false;
    }

    var Password = document.forms["registration"]["passid"].value;
    if (Password == "") {
        alert("Password Must be filled out!");
        return false;
    }
    
    var address = document.forms["registration"]["address"].value;
    if (address == "") {
        alert("Address Must be filled out!");
        return false;
    }

    var country = document.forms["registration"]["country"].value;
    if (country == "Default") {
        alert("Select your country from the list!");
        return false;
    }
    
    var email = document.forms["registration"]["email"].value;
    if (email == "") {
        alert("Email Must be filled out!");
        return false;
    }

    var desc = document.forms["registration"]["desc"].value;
    if (desc == "") {
        alert("Write somthing in About!");
        return false;
    }
    
    var mgender = document.forms["registration"]["mgender"].value;
    x=0;

    if(mgender.checked) {
    x++;}
        if(x==0)
        {
            alert('Select Male/Female');
            return false;
        }

    var en = document.forms["registration"]["en"].value;
    x=0;
    if(en.checked) {
        x++;} 
        if(x==0)
        {
            alert('Select Language');
            return false;
    }
    
    else{
    alert('Form Succesfully Submitted');
    window.location.reload()
    return true;
    }

}


  