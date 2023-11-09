
function addMoney()
{
	alert("inside");
	var amount=100;
var email="test1@test.com";
	var rootRef= firebase.database().ref().child("Users");

    rootRef.on("child_added",snap => {
      
        //alert(snap.child("Email").val());
        alert(snap.key);
        /*var rootRef1= firebase.database().ref().child("Users").child(snap.key);
		rootRef1.update({
			Wallet : 0
		});*/
	
	if(snap.child("Email").val()==email)
	{
		firebase.database().ref().child("Users").child(snap.key).child("Wallet").set(amount+snap.child("Wallet").val());
	}
	
        
    });
}