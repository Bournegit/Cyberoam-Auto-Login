document.getElementById('clickme').onclick=myfunction;


function myfunction(){

// Check browser support
if (typeof(Storage) != "undefined") {

    var uname="bhuwan";
    var username=document.getElementById("u1").value;
    var password=document.getElementById("u2").value;

    // Store
    localStorage.setItem("username1", username);
    localStorage.setItem("password1",password);
    // Retrieve
    document.getElementById("result").innerHTML = "Successfully Saved";
    } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}

