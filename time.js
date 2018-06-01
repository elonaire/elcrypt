let printTime = ()=>{
	var myDate = new Date();
	var time = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
	time.toString();
	console.log(time);
}

setInterval(printTime, 1000);
