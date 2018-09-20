

function changeBackground(color)
{
document.body.style.background = color;
}



function myFunction4()
{
 var skaitlis = prompt("Ludzu ievadiet skaitli!", "0");
    if (skaitlis % 2 != 0) 
	{
        document.getElementById("demo").innerHTML =
        "skaitlis ir nepara!";
    }
	if(skaitlis<0)
	{
        document.getElementById("demo").innerHTML =
        "skaitlis ir mazaks par 0!";
    }
	else if(skaitlis>100)
	{
	document.getElementById("demo").innerHTML = "skaitlis ir lielaks par 100!"
	}
	else if(skaitlis % 2 == 0)
	{
	document.getElementById("demo").innerHTML = "skaitlis ir para!"
	}

}