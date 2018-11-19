let email = document.getElementById("email");
let submit = document.getElementById("submit");
let xhr = new XMLHttpRequest();
let type = 'iitu';
let ip = '38819a92.ngrok.io';
//let port = '50243';

let send = () => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(email.value)) {
    alert("Please, enter the correct email!");
    return;
  }
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      response = xhr.responseText;
      responseObject = JSON.parse(response);
      console.log(responseObject);
      if (responseObject['emailValidity'] === false || responseObject['typeValidity'] === false) {
        alert("Please, enter the correct email and type!");
      } else {
        alert("Thank you, we'll contact asap!");
      }
    }
  }
  xhr.open('POST', 'https://'+ip+'/icecream', true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify({ 'email': email.value, 'type': type }));

}

submit.addEventListener("click", send);
