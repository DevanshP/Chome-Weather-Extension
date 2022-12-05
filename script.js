const wrapper =  document.querySelector(".wrapper"),
inputPart = wrapper.querySelector(".input-part"),
infoTxt = inputPart.querySelector(".input-txt"),
inputField = inputPart.querySelector("input");

inputField.addEventListener("keyup",e =>{
	if (e.key == "Enter" && inputField.value != "") {
    requestApi(inputField.value);
	}
});

function requestApi(city){
//	console.log(city); // checking conosle is printing on inpect or not
let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=76bcbef19a5b49d19b402fca66632a0f`;
infoTxt.innerText = "Getting weather Details";
infoTxt.classList.add("pending");
fetch(api).then(response => (response.json())).then(result => weatherDetails(result));

}

function weatherDetails(info){
	console.log(info); 
}