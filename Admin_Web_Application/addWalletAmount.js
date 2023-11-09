

//var rootRef= firebase.database().ref().child("Users");
function addMoney()
{
		var amount=document.getElementById("amount").value;
		var email=document.getElementById("email").value;
		alert(amount);
		var rootRef= firebase.database().ref().child('Users');

			rootRef.on("child_added",snap => {
			 
			
			if(snap.child("email").val()==email)
			{
				firebase.database().ref().child("Users").child(snap.key).child("Wallet").set(Number(amount)+Number(snap.child("Wallet").val()));
			}
			
				
			});
			document.getElementById("email").value="";
			document.getElementById("amount").value="";
}