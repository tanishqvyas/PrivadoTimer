// Getting the reference to the button
var myButton = document.getElementById('mybutton'); 

// Getting the reference to the timer
var myTimer = document.getElementById('timer');


var watch = new Timer(myTimer, myButton);



myButton.addEventListener('click', function() {
	
	let curText = myButton.innerText;

	if(curText === "START")
	{
		myButton.innerText = "PAUSE";

		watch.start();

	}

	else if (curText === "PAUSE")
	{
		myButton.innerText = "START";

		watch.stop();
	}

	else if(curText === "RESET")
	{
		myButton.innerText = "START";

		watch.reset();
		myTimer.innerText = "00 : 00"
	}

})

