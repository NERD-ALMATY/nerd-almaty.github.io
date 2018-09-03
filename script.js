let email = document.getElementById("email");
let submit = document.getElementById("submit");
let xhr = new XMLHttpRequest();



let send = () => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(email.value);

  if (!re.test(email.value)) {
    alert("Please, enter the correct email!");
    return;
  }
  xhr.onreadystatechange = () => {
    if (this.readyState == 4 && this.status == 200) {
      response = xhr.responseText;
      responseObject = JSON.parse(response);
      if (responseObject['state'] === 'wrong_email') {
        alert("Please, enter the correct email!");
      } else if (responseObject['state'] === 'ok') {
        alert("Thank you, we'll contact asap!");
      }
      else {
        alert("Something is wrong, try again!");
      }
    }
  }
  xhr.open('POST', 'http://ip.com/icecream', true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send('{\'email\':\'' + email.value + '\'}');

}

submit.addEventListener("click", send);
