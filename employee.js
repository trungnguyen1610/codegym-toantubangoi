
let login = prompt("Mời nhập vào chức vụ");
// let message = "";
// if(login == "Employee"){
//     message = "Hello";
// }else if(login == "Director"){
//     message = "Greetings";
// }else if(login == ""){
//     message = "No Login?";
// }else{
//     message = "Not employee?";
// }
let message =(login == "Employee") ?  "Hello" : (login == "Director") ? "Greetings" : (login == "") ? "No Login?" : "Not employee?"
alert(message);