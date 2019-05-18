var people={};

//login functionality
function reg() {
//retrieve data input from the from
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
people.email = username;
people.password = password;
console.log(people);
document.getElementById('signup').style.display = "none";
document.getElementById('signin').style.display = "block";
};

//login functionality
function aut() {
    //retrieve data input from the from
    var username = document.getElementById("username1").value;
    var password = document.getElementById("password1").value;
    if(username === people.email && password === people.password){
        alert("good")
    }
    
    else{
        alert('not confirmed')
    }
    
};