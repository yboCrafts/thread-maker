"use strict";

const userName = document.querySelector("#name");
const userMessage = document.querySelector(".message");
const postThread = document.querySelector(".postbtn");
const threads = document.querySelector(".threads");

userMessage.addEventListener("keypress", () => {
	if (event.key === "Enter") {
		postThread.click();
	}
});
userName.addEventListener("keypress", () => {
	if (event.key === "Enter") {
		postThread.click();
	}
});

postThread.addEventListener("click", function () {
	if (userName.value !== "" && userMessage.value !== "") {
		// create h2 and p
		const breakLi = document.createElement("hr");
		const newName = document.createElement("h4");
		const newMessage = document.createElement("p");
		const nameContent = document.createTextNode(userName.value);
		const messageContent = document.createTextNode(userMessage.value);

		// set user inputs on h1 and p
		newName.appendChild(nameContent);
		newMessage.appendChild(messageContent);

		// post to threads
		threads.appendChild(newName);
		threads.appendChild(newMessage);
		threads.appendChild(breakLi);

		userName.value = "";
		userMessage.value = "";
	} else {
		window.alert("Please Fill the needed informations...");
	}
});
