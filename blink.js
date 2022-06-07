function show()
{
	if (document.getElementById)
	document.getElementById("blink1").style.visibility = "visible";
}

function hide()
{
	if (document.getElementById)
	document.getElementById("blink1").style.visibility = "hidden";
}

for(var i=900; i < 4500000; i=i+900)
{
	setTimeout("hide()",i);
	setTimeout("show()",i+450);
}