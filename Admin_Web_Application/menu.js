var count=0;
var rootRef= firebase.database().ref().child("Menu");

    rootRef.on("child_added",snap => {
      
        count++;
        if(count%3==1)
            $("#menu_category1").append("<a id='"+snap.key+"' class='dropdown-item categ' onclick='getMenu(this)'  target='1'>"+snap.key+"</a>");
        else if(count%3==2)
            $("#menu_category2").append("<a id='"+snap.key+"' class='dropdown-item categ' onclick='getMenu(this)'  target='1'>"+snap.key+"</a>");
        else
            $("#menu_category3").append("<a id='"+snap.key+"' class='dropdown-item categ' onclick='getMenu(this)'  target='1'>"+snap.key+"</a>");
        
        
        
    });


var rootRef= firebase.database().ref().child("Menu");
console.log(rootRef);
rootRef.on("child_added",snap => {
	var category=snap.key;
	rootRef.child(snap.key).on("child_added",snap => {
		console.log(snap.key);
		var food=snap.key;
    var avail =snap.child("Availability").val();
    var price =snap.child("Price").val();
	var countMenuItem=snap.child("SrNo").val();
    //Tanmay Original
	

    //$("#table_body").append("<tr><th scope='row' class='d-none d-sm-block'>"+countMenuItem+"</td><td>"+food+"</td><td class='d-none d-sm-block'>"+price+"</td><td class='food-availability'>"+avail+"</td><td><button type='button' onclick='changeAvail(this)' data-category='"+element.id+"' data-food='"+food+"' value='"+avail+"' class='btn btn-secondary change'>CHANGE</button></td></tr>");

    //Rohan Toggle Attempt
	
	if(avail=="No")
		$("#table_body").append("<tr><th scope='row' class='d-none d-sm-block'>"+countMenuItem+"</td><td>"+food+"</td><td class='d-none d-sm-block'>Rs "+price+"</td><td><label class='switch'><input type='checkbox' id='ava' class='default' onload='changeAvail(this)' onclick='changeAvail(this)' data-category='"+category+"' data-food='"+food+"' value='"+avail+"'><div class=' slider round '><span class='on'>YES</span><span class='off'>NO</span></div></label></td></tr>");
    else
		$("#table_body").append("<tr><th scope='row' class='d-none d-sm-block'>"+countMenuItem+"</td><td>"+food+"</td><td class='d-none d-sm-block'>Rs "+price+"</td><td><label class='switch'><input type='checkbox' id='ava' class='default' onload='changeAvail(this)' onclick='changeAvail(this)' data-category='"+category+"' data-food='"+food+"' value='"+avail+"' checked><div class=' slider round ' ><span class='on'>YES</span><span class='off'>NO</span></div></label></td></tr>");
  
	});
	
	
});	 
     	 
		 console.log(data);
function getMenu(element)
{
    var countMenuItem=1;
	$("#dropdownMenuLink").empty();
	$("#dropdownMenuLink").append(element.id);
    //clearSelection();
    //$(element).addClass('menu-selected');
     //$(element).css('background-color', 'green');
    var rootRef= firebase.database().ref().child("Menu").child(element.id);
    $("#table_body").empty();
    //$("#menu_body").append("<table class='table-fill'><caption><h2>"+element.id+"</h2><thead><tr><th>Food </th><th>Price </th><th>Availability </th><th></th></tr></thead><tbody class='table-hover'>");
    rootRef.on("child_added",snap => {
    //alert(snap.key);
    var food=snap.key;
    var avail =snap.child("Availability").val();
    var price =snap.child("Price").val();
	var countMenuItem=snap.child("SrNo").val();
    //Tanmay Original
    //$("#table_body").append("<tr><th scope='row' class='d-none d-sm-block'>"+countMenuItem+"</td><td>"+food+"</td><td class='d-none d-sm-block'>"+price+"</td><td class='food-availability'>"+avail+"</td><td><button type='button' onclick='changeAvail(this)' data-category='"+element.id+"' data-food='"+food+"' value='"+avail+"' class='btn btn-secondary change'>CHANGE</button></td></tr>");

    //Rohan Toggle Attempt
	
	if(avail=="No")
		$("#table_body").append("<tr><th scope='row' class='d-none d-sm-block'>"+countMenuItem+"</td><td>"+food+"</td><td class='d-none d-sm-block'>Rs "+price+"</td><td><label class='switch'><input type='checkbox' id='ava' class='default' onload='changeAvail(this)' onclick='changeAvail(this)' data-category='"+element.id+"' data-food='"+food+"' value='"+avail+"'><div class=' slider round '><span class='on'>YES</span><span class='off'>NO</span></div></label></td></tr>");
    else
		$("#table_body").append("<tr><th scope='row' class='d-none d-sm-block'>"+countMenuItem+"</td><td>"+food+"</td><td class='d-none d-sm-block'>Rs "+price+"</td><td><label class='switch'><input type='checkbox' id='ava' class='default' onload='changeAvail(this)' onclick='changeAvail(this)' data-category='"+element.id+"' data-food='"+food+"' value='"+avail+"' checked><div class=' slider round ' ><span class='on'>YES</span><span class='off'>NO</span></div></label></td></tr>");
  
    
    });
}
    
function changeAvail(element)
{
    //alert($(element).attr('data-food'));
    var firebaseRef = firebase.database().ref();
    if(element.value=="Yes")
    {
        //document.getElementById("ava").checked = true;
        //$(element).closest('tr').find('td#ava').checked("true");
        
        firebaseRef.child("Menu").child($(element).attr('data-category')).child($(element).attr('data-food')).child("Availability").set("No", function(error) {
                if (error) {
                    alert("Data could not be saved." + error);
                    } else {
                            $(element).closest('tr').find('td.food-availability').html("No");
                            $(element).val("No");
                            //document.getElementById("ava").checked = false;
                            
    
        }});
    }
    else
    {
        //document.getElementById("ava").checked = false;
        firebaseRef.child("Menu").child($(element).attr('data-category')).child($(element).attr('data-food')).child("Availability").set("Yes", function(error) {
                if (error) {
                    alert("Data could not be saved." + error);
                    } else {
                            $(element).closest('tr').find('td.food-availability').html("Yes");
                            $(element).val("Yes");
                            //document.getElementById("ava").checked = true;
    
        }});
    }
}

function addItems()
{
		//alert("working");
	var itemId=document.getElementById("addId").value;
	var itemCategory=document.getElementById("addCategory").value;
	var itemPrice=document.getElementById("addPrice").value;
	var itemName=document.getElementById("addName").value;
	var rootRef= firebase.database().ref().child("Menu").child(itemCategory).child(itemName).set({
		Availability:"No",
		Image:itemName+".jpg",
		Price:itemPrice,
		SrNo:itemId,
		Rating:0
	});
	
	console.log(itemId);
}