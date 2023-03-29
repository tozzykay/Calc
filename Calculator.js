//Simple calculator with Basic Tasks//

const dispBoxOne = document.getElementById("disp-box-one");
const dispBoxTwo = document.getElementById("disp-box-two");
function sound() {
	const snd = new Audio("Click Sound.mp3");
	snd.play();
}
// question to be solved row
function disp(number) {
	dispBoxOne.value += number;
	sound();
}
//Displays result
function calc() {
	const question = dispBoxOne.value;
	const result = eval(question);
	dispBoxTwo.innerText = result;
	if (question === "") {
		dispBox = 0;
	}
	sound();
}
//Clear all display boxes
function clearAll() {
	dispBoxOne.value = "";
	dispBoxTwo.innerText = "";
	sound();
}
//Delete latest entry only from question row
function del() {
	dispBoxOne.value = dispBoxOne.value.slice(0, -1);
	sound();
}
