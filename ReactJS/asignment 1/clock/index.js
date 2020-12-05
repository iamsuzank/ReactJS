function clock(){
	const fullDate = new Date();
	var hour = fullDate.getHours();
	var min = fullDate.getMinutes();
	var sec = fullDate.getSeconds();
	var	meridiem="AM";
	if(hour > 12)
		{
			hour = hour - 12;
			meridiem = "PM";
		}

		//Replace 0 with 12
		if(hour === 0)
		{
			hour = 12;
		}
	if (hour < 10){
		hour = "0"+hour;
	}
	if (min < 10){
		min= "0"+min;
	}
	if (sec < 10){
		sec= "0"+sec;
	}
	document.getElementById('hour').innerHTML = hour;
	document.getElementById('min').innerHTML = ": "+min;
	document.getElementById('sec').innerHTML = ": "+sec;
	document.getElementById('meri').innerHTML = ""+meridiem;
}

setInterval(clock,1000);