function base() {

    document.getElementById("header").textContent="Hello";
}

function updateMessage(){

    var message=document.getElementById("nameInput").value;
    
    document.getElementById("outputLabel").textContent="Hello "+ message;
}