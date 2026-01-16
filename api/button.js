const button = document.getElementById("get-ip-btn");

button.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  const url = "https://ipinfo.io/json";

  xhr.responseType = "json";
  xhr.onload = () => {
    console.log(xhr.response);
  };

  xhr.open("GET", url);
  xhr.send();
});
