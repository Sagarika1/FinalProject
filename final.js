function emailcheck()
{
	//alert("in email");
    var emailinput = document.getElementById("EmailField").value;
	var Elimit = emailinput.length;
	var userinput = document.getElementById("Suggestions").value;
	var Slimit = userinput.length;
	var vowels ="";
	var consonants = "";
	var result = "";
	var i = 0;
	var count= 0;
	//alert( limit);
	if( Elimit == 0 )
	{
		alert("Please enter an email");
		return;
	}

	if( Slimit == 0 )
	{
		alert("Please give us suggestions");
		return;
	}
		while (i < Elimit)
			{

				if(emailinput.charAt(i) == '@' || emailinput.charAt(i) == '.' )
				{
					count++;
			 	}

					i++;
			}
				if(count==2 )
				{
					alert("Thanks for your feedback. We will respond to your email soon.");
				}
				else
				{
					alert("This email is invaild.");

				}

}
