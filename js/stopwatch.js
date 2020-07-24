function Timer(ele, buttn) 
{	

	var time = 0;
	var interval;
	var offset;

	var timeLimit = "05 : 00";

	function update() 
	{
		time += delta();
		var formattedTime = displayTime(time);

		ele.textContent = formattedTime;

		if(formattedTime === timeLimit)
		{
			buttn.innerText = "RESET";
			ele.style.color = "red";
			clearInterval(interval);
		}

		else
		{
			ele.style.color = "black";
		}

	}

	function delta() 
	{
		var now = Date.now();
		var timePassed = now - offset;
		offset = now;
		return timePassed;
	}


	function displayTime(millisecs) 
	{
		
		var time = new Date(millisecs);
		var mins = (time.getMinutes() - 30).toString();
		var secs = time.getSeconds().toString();

		if(mins.length < 2)
		{
			mins = "0" + mins;
		}

		if(secs.length < 2)
		{
			secs = "0" + secs;
		}

		return mins + " : " + secs;

	}

	this.isOn = false;

	this.start = function() 
	{
		if(!this.isOn)
		{
			interval = setInterval(update, 10);
			offset = Date.now();
			this.isOn = true;


		}

	};

	this.stop = function() 
	{
		if(this.isOn)
		{
			clearInterval(interval);
			interval = null;
			this.isOn = false;
		}

		
	};

	this.reset = function() 
	{
		time = 0;
		this.isOn = false;
		ele.style.color = "black";
	};


}


