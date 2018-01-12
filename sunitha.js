function emailcheck()
{
   var userinput = document.getElementById("EmailField").value;
	var limit = userinput.length;
	var vowels ="";
	var consonants = "";
	var result = "";
	var i = 0;
	var count= 0;
	if( limit == 0 )
	{
		alert("Please enter an email");
		return;
	}


		while (i < limit)
			{

				if(userinput.charAt(i) == '@' || userinput.charAt(i) == '.' )
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
