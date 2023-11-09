var rootRef= firebase.database().ref().child("orderData");
    
var countOrders=4;
var countOrders2=4;
var id1=0;
var id2=0;	
var html1="";
var html2="";
	rootRef.on("child_added",snap => {
    //alert(snap);
    var id =snap.key;
    var order =snap.child("Order").val();
    var statuss =snap.child("Status").val();
    var Username =snap.child("Username").val();
	
	if(countOrders==4 && statuss!="Collected")
	{
		id1++;
		//html1=html1+"<div class='row'>";
		console.log("row1_"+id1);
		$(".table_body1").append("<div class='row' id='row1_"+id1+"'");
	}
	if(countOrders2==4 && statuss=="Collected")
	{
		id2++;
		//html2=html2+"<div class='row'>";
		$(".table_body2").append("<div class='row' id='row2_"+id2+"'");
		
	}
	
    if(statuss=="Pending")
	{
		//$("#table_body").after("<tr class='order1'><td class='text-left'>"+id+"</td><td class='text-left'>"+order+"</td><td class='text-left order-status'>"+statuss+"</td><td><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-light text-danger' value='"+id+"'>Ready</button></td></tr>" );
		$("#row1_"+id1).append("<div class='col-lg-3 md-6 sm-12 '><div class='card text-center'><div class='card-header pend'>Order ID: "+id+"</div><div class='card-body'><p class='card-text'>"+order+"<br><br> <span style='color:#FF3333'>Status:"+statuss+"</span></p><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-info text-light' value='"+id+"'>Ready</button></div><div class='card-footer text-muted'>12:36 pm</div></div></div>");
		countOrders=countOrders-1;
	}
	else if(statuss=="Ready")
	{
		//$("#table_body").after("<tr class='order2'><td class='text-left '>"+id+"</td><td class='text-left'>"+order+"</td><td class='text-left order-status'>"+statuss+"</td><td><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-light text-success' value='"+id+"'>Collected</button></td></tr>" );
		$("#row1_"+id1).append("<div class='col-lg-3 md-6 sm-12 '><div class='card text-center'><div class='card-header ready'>Order ID: "+id+"</div><div class='card-body'><p class='card-text'>"+order+"<br><br> <span style='color:#5cb85c'>Status:"+statuss+"</span></p><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-info text-light' value='"+id+"'>Collected</button></div><div class='card-footer text-muted'>12:36 pm</div></div></div>");
		countOrders=countOrders-1;
    }
	else
	{
    $("#row2_"+id2).append("<div class='col-lg-3 md-6 sm-12 '><div class='card text-center'><div class='card-header collected'>Order ID: "+id+"</div><div class='card-body'><p class='card-text'>"+order+"<br><br><span style='color:#42464b'> Status:"+statuss+"</span></p><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-info text-light' value='"+id+"'>Completed</button></div><div class='card-footer text-muted'>12:36 pm</div></div></div>");
    //$("#table_body").after("<tr class='order3'><td class='text-left'>"+id+"</td><td class='text-left'>"+order+"</td><td class='text-left order-status'>"+statuss+"</td><td><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-light text-dark' disabled='true' value='"+id+"'>Completed</button></td></tr>");       
    countOrders2=countOrders2-1;
	}
  
	if(countOrders2==0)
	{
		//html2=html2+"</div>";
		//$(".table_body2").append(html2);
		countOrders2=4;
		//html2="";
	}
	if(countOrders==0)
	{
		//html1=html1+"</div>";
		//$(".table_body1").append(html1);
		countOrders=4;
		//html1="";
	}
	//console.log(html1);
    });
    html1=html1+"</div>";
	
	console.log(html1);
	 
    
function getOrders(kitchen)
{
	alert(kitchen);
	$(".table_body1").empty();
	$(".table_body2").empty();
var rootRef= firebase.database().ref().child("Kitchen").child(kitchen);
var countOrders=4;
var countOrders2=4;	
var html1="";
var html2="";

	rootRef.on("child_added",snap => {
    //alert(snap);
	
    var id =snap.key;
    var order =snap.child("Order").val();
    var statuss =snap.child("Status").val();
    var Username =snap.child("Username").val();
	
	if(countOrders==4 && statuss!="Collected")
	{
		html1=html1+"<div class='row'>";
		
	}
	if(countOrders2==4 && statuss=="Collected")
	{
		html2=html2+"<div class='row'>";
		
	}
	
    if(statuss=="Pending")
	{
		//$("#table_body").after("<tr class='order1'><td class='text-left'>"+id+"</td><td class='text-left'>"+order+"</td><td class='text-left order-status'>"+statuss+"</td><td><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-light text-danger' value='"+id+"'>Ready</button></td></tr>" );
		html1=html1+"<div class='col-lg-3 md-6 sm-12 '><div class='card text-center'><div class='card-header pend'>Order ID: "+id+"</div><div class='card-body'><p class='card-text'>"+order+"<br><br> <span style='color:#FF3333'>Status:"+statuss+"</span></p><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-info text-light' value='"+id+"'>Ready</button></div><div class='card-footer text-muted'>12:36 pm</div></div></div>";
		countOrders=countOrders-1;
	}
	else if(statuss=="Ready")
	{
		//$("#table_body").after("<tr class='order2'><td class='text-left '>"+id+"</td><td class='text-left'>"+order+"</td><td class='text-left order-status'>"+statuss+"</td><td><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-light text-success' value='"+id+"'>Collected</button></td></tr>" );
		html1=html1+"<div class='col-lg-3 md-6 sm-12 '><div class='card text-center'><div class='card-header ready'>Order ID: "+id+"</div><div class='card-body'><p class='card-text'>"+order+"<br><br> <span style='color:#5cb85c'>Status:"+statuss+"</span></p><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-info text-light' value='"+id+"'>Collected</button></div><div class='card-footer text-muted'>12:36 pm</div></div></div>";
		countOrders=countOrders-1;
    }
	else
	{
    html2=html2+"<div class='col-lg-3 md-6 sm-12 '><div class='card text-center'><div class='card-header collected'>Order ID: "+id+"</div><div class='card-body'><p class='card-text'>"+order+"<br><br><span style='color:#42464b'> Status:"+statuss+"</span></p><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-info text-light' value='"+id+"'>Completed</button></div><div class='card-footer text-muted'>12:36 pm</div></div></div>";
    //$("#table_body").after("<tr class='order3'><td class='text-left'>"+id+"</td><td class='text-left'>"+order+"</td><td class='text-left order-status'>"+statuss+"</td><td><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-light text-dark' disabled='true' value='"+id+"'>Completed</button></td></tr>");       
    countOrders2=countOrders2-1;
	}
  
	if(countOrders2==0)
	{
		html2=html2+"</div>";
		$(".table_body2").append(html2);
		countOrders2=4;
		html2="";
	}
	if(countOrders==0)
	{
		html1=html1+"</div>";
		$(".table_body1").append(html1);
		countOrders=4;
		html1="";
	}
	
	
    });
}

function changeStatus(element)
{
    //alert(element.val());
    var firebaseRef = firebase.database().ref();
    if(element.attr('data-status')=="Pending"){
    firebaseRef.child("orderData").child(element.val()).child("Status").set("Ready", function(error) {
                if (error) {
                    alert("Data could not be saved." + error);
                    } else {
                            element.closest('tr').find('td.order-status').html("Ready");
    element.attr("data-status", "Ready");
    element.text("Collected");
    element.removeClass('order1');
    element.addClass('order2');
        }});
    
    }
    else if(element.attr('data-status')=="Ready")
    {
        firebaseRef.child("orderData").child(element.val()).child("Status").set("Collected", function(error) {
                if (error) {
                    alert("Data could not be saved." + error);
                    } else {
                            element.closest('tr').find('td.order-status').html("Collected");
                            element.removeClass('w3-red');
                            element.addClass('w3-black');
                            element.prop( "disabled", true );
        
                            element.attr("data-status", "Completed");
                        element.text("Completed");
        }});
        
        
    }
    //loaction.reload(true);
}
/*
<div class="order-list">
    <div class="order">
    <tr class="status"
    <div>
    <div class="order">
    <div>
    <div
<div>
*/