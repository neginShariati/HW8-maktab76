/// this funnction for ex2
function myFunction(){
    let myName = document.getElementById("user-name").value;
    let myPassword = parseInt(document.getElementById("pass-word").value);
    let infoUser = {userName : myName , password : myPassword};
    localStorage.setItem("user",JSON.stringify(infoUser));
}

// this function for ex3
function get_user(){
    let userInfo = JSON.parse(localStorage.getItem("user"));
    document.getElementById("user-info").innerText = `Welcome \"${userInfo.userName}\" and your Password is ${userInfo.password}`;
}

