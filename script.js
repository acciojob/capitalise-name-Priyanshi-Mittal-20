//your JS code here. If required.
let input= document.getElementById("fname")
input.addEventListener("blur",transform)
function transform()
{
	input.value=input.value.toUpperCase()
}