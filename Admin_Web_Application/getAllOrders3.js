var rootRef= firebase.database().ref().child("orderData");
var rootRef1= firebase.database().ref().child("orderData"); 
var countOrders=4;
var countOrders2=4; 
var html1="";
var html2="";
var selected="all";
    rootRef1.on("child_added",snap => {
    //alert(snap);
    var id =snap.key;
    //alert("inside1");
    var order =snap.child("Order").val().split(',');
    var statuss =snap.child("Status").val();
    var Username =snap.child("Username").val();
    var details =snap.child("Details").val();
	var quantity=snap.child("Quantity").val().split(',');
	var time=snap.child("Time").val();
	if(time[1]==":")
		time="0"+time;
	
	if(time[4]==":")
		time=time.substring(0,3)+"0"+time.substring(3,6);
	
	var finalOrder="";
	for(var i=0;i<quantity.length;i++)
	{
		if(i==0)
		{'
			finalOrder=order[i]+"("+quantity[i]+") <br>";
		}
		else{
			finalOrder=finalOrder+", "+order[i]++"("+quantity[i]+") <br>";
		}
	}
	
    if(statuss=="Pending")
    {
        //$("#table_body").after("<tr class='order1'><td class='text-left'>"+id+"</td><td class='text-left'>"+order+"</td><td class='text-left order-status'>"+statuss+"</td><td><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-light text-danger' value='"+id+"'>Ready</button></td></tr>" );
        html1=html1+"<div class='col-lg-3 md-6 sm-12 ' id='"+id+"'><div class='card text-center'><div class='card-header pend'>#"+id+":  "+statuss+"</div><div class='card-body'><p class='card-text'>"+finalOrder+"<br> <span class='extra'>"+details+" </span> <br></p><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-info text-light' value='"+id+"'>Ready</button></div><div class='card-footer text-muted'>"+time.substring(0,5)+"</div></div></div>";
        countOrders=countOrders-1;
    }
    else if(statuss=="Ready")
    {
        //$("#table_body").after("<tr class='order2'><td class='text-left '>"+id+"</td><td class='text-left'>"+order+"</td><td class='text-left order-status'>"+statuss+"</td><td><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-light text-success' value='"+id+"'>Collected</button></td></tr>" );
        html1=html1+"<div class='col-lg-3 md-6 sm-12 ' id='"+id+"'><div class='card text-center'><div class='card-header ready'>#"+id+":  "+statuss+"</div><div class='card-body'><p class='card-text'>"+finalOrder+"<br> <span class='extra'>"+details+" </span> <br></p><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-info text-light' value='"+id+"'>Collected</button></div><div class='card-footer text-muted'>"+time.substring(0,5)+"</div></div></div>";
        countOrders=countOrders-1;
    }
    else
    {
    html2=html2+"<div class='col-lg-3 md-6 sm-12 ' id='"+id+"'><div class='card text-center'><div class='card-header collected'>#"+id+":  "+statuss+"</div><div class='card-body'><p class='card-text'>"+finalOrder+"<br> <span class='extra'>"+details+" </span> <br></p><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-info text-light' value='"+id+"'>Completed</button></div><div class='card-footer text-muted'>"+time.substring(0,5)+"</div></div></div>";
    //$("#table_body").after("<tr class='order3'><td class='text-left'>"+id+"</td><td class='text-left'>"+order+"</td><td class='text-left order-status'>"+statuss+"</td><td><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-light text-dark' disabled='true' value='"+id+"'>Completed</button></td></tr>");       
    countOrders2=countOrders2-1;
    }
  if(selected=="all")
  {
    if(statuss=="Collected" )
    {
        $("#row2").prepend(html2);
        html2="";
    }
    else{
        $("#row1").prepend(html1);
        html1="";
    }
  }
    console.log(html1);
    });
    
    rootRef.on("child_changed",snap => {
    //alert(snap.key);
     var id =snap.key;
    var order =snap.child("Order").val();
    var statuss =snap.child("Status").val();
    var Username =snap.child("Username").val();
    var x=document.getElementById(id);
    if(statuss=="Ready"  )
    {
        
        $(x).replaceWith("<div class='col-lg-3 md-6 sm-12 ' id='"+id+"'><div class='card text-center'><div class='card-header ready'>#"+id+":  "+statuss+"</div><div class='card-body'><p class='card-text'>"+order+"<br> <span class='extra'>No Tomatoes </span> <br> </p><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-info text-light' value='"+id+"'>Collected</button></div><div class='card-footer text-muted'>12:36 pm</div></div></div>");
        
    }
    else if(statuss=="Collected" )
    {
        $(x).remove();
        $("#row2").prepend("<div class='col-lg-3 md-6 sm-12 ' id='"+id+"'><div class='card text-center'><div class='card-header collected'>#"+id+":  "+statuss+"</div><div class='card-body'><p class='card-text'>"+order+"<br> <span class='extra'>No Tomatoes </span> <br></p><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-info text-light' value='"+id+"'>Completed</button></div><div class='card-footer text-muted'>12:36 pm</div></div></div>");
    }
    });
    html1=html1+"</div>";
    
    console.log(html1);
     
    
function getOrders(kitchen)
{
    //alert(kitchen);
    this.selected=kitchen;
    $(".table_body1").empty();
    $(".table_body2").empty();
var rootRef= firebase.database().ref().child("Kitchen").child(kitchen);
    $(".table_body1").append('<div class="row" id="'+kitchen+'1"></div>');
    $(".table_body2").append("<div class='row' id='"+kitchen+"2'></div>");
var html1="";
var html2="";
    rootRef.on("child_added",snap => {
    //alert(snap);
    //alert(snap.child("Status").val());
//  alert("inside2");
    var id =snap.key;
    
    var order =snap.child("Order").val();
    var statuss =snap.child("Status").val();
    var Username =snap.child("Username").val();
    var x1=document.getElementById(kitchen+"1");
    var x2=document.getElementById(kitchen+"2");
    if(statuss=="Pending")
    {
        //$("#table_body").after("<tr class='order1'><td class='text-left'>"+id+"</td><td class='text-left'>"+order+"</td><td class='text-left order-status'>"+statuss+"</td><td><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-light text-danger' value='"+id+"'>Ready</button></td></tr>" );
        html1=html1+"<div class='col-lg-3 md-6 sm-12 ' id='"+id+"' ><div class='card text-center'><div class='card-header pend'>Order ID: "+id+"</div><div class='card-body'><p class='card-text'>"+order+"<br><br> <span style='color:#FF3333'>Status:"+statuss+"</span></p><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-info text-light' value='"+id+"'>Ready</button></div><div class='card-footer text-muted'>12:36 pm</div></div></div>";
        countOrders=countOrders-1;
    }
    else if(statuss=="Ready")
    {
        //$("#table_body").after("<tr class='order2'><td class='text-left '>"+id+"</td><td class='text-left'>"+order+"</td><td class='text-left order-status'>"+statuss+"</td><td><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-light text-success' value='"+id+"'>Collected</button></td></tr>" );
        html1=html1+"<div class='col-lg-3 md-6 sm-12 ' id='"+id+"'><div class='card text-center'><div class='card-header ready'>Order ID: "+id+"</div><div class='card-body'><p class='card-text'>"+order+"<br><br> <span style='color:#5cb85c'>Status:"+statuss+"</span></p><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-info text-light' value='"+id+"'>Collected</button></div><div class='card-footer text-muted'>12:36 pm</div></div></div>";
        countOrders=countOrders-1;
    }
    else
    {
    html2=html2+"<div class='col-lg-3 md-6 sm-12 ' id='"+id+"'><div class='card text-center'><div class='card-header collected'>Order ID: "+id+"</div><div class='card-body'><p class='card-text'>"+order+"<br><br><span style='color:#42464b'> Status:"+statuss+"</span></p><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-info text-light' value='"+id+"'>Completed</button></div><div class='card-footer text-muted'>12:36 pm</div></div></div>";
    //$("#table_body").after("<tr class='order3'><td class='text-left'>"+id+"</td><td class='text-left'>"+order+"</td><td class='text-left order-status'>"+statuss+"</td><td><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-light text-dark' disabled='true' value='"+id+"'>Completed</button></td></tr>");       
    countOrders2=countOrders2-1;
    }
  if(this.selected==kitchen)
  {
    if(statuss=="Collected")
    {
        $(x2).prepend(html2);
        html2="";
    }
    else{
        $(x1).prepend(html1);
        html1="";
    }
  }
    
    });
    
    
    rootRef.on("child_changed",snap => {
    //alert(snap.key);
     var id =snap.key;
    var order =snap.child("Order").val();
    var statuss =snap.child("Status").val();
    var Username =snap.child("Username").val();
    var x=document.getElementById(id);
    if(statuss=="Ready"  )
    {
        
        $(x).replaceWith("<div class='col-lg-3 md-6 sm-12 ' id='"+id+"'><div class='card text-center'><div class='card-header ready'>Order ID: "+id+"</div><div class='card-body'><p class='card-text'>"+order+"<br><br> <span style='color:#5cb85c'>Status:"+statuss+"</span></p><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-info text-light' value='"+id+"'>Collected</button></div><div class='card-footer text-muted'>12:36 pm</div></div></div>");
        
    }
    else if(statuss=="Collected" )
    {
        $(x).remove();
        $("#row2").prepend("<div class='col-lg-3 md-6 sm-12 ' id='"+id+"'><div class='card text-center'><div class='card-header collected'>Order ID: "+id+"</div><div class='card-body'><p class='card-text'>"+order+"<br><br><span style='color:#42464b'> Status:"+statuss+"</span></p><button type='button' data-status='"+statuss+"' onclick='changeStatus($(this))' name='sendNoti' class='btn btn-secondary bg-info text-light' value='"+id+"'>Completed</button></div><div class='card-footer text-muted'>12:36 pm</div></div></div>");
    }
    });
    
    this.rootRef= firebase.database().ref().child("Kitchen").child(kitchen);
    
    
    
}



function changeStatus(element)
{
    //alert(element.val());
    var firebaseRef = firebase.database().ref();
    if(element.attr('data-status')=="Pending"){
    this.rootRef.child(element.val()).child("Status").set("Ready", function(error) {
                if (error) {
                    alert("Data could not be saved." + error);
                    } else {
                            element.closest('tr').find('td.order-status').html("Ready");
    element.closest('div').find('card-header').removeClass('pend');
    element.closest('div').find('card-header').addClass('ready');
    element.attr("data-status", "Ready");
    element.text("Collected");
    element.removeClass('order1');
    element.addClass('order2');
        }});
    
    }
    else if(element.attr('data-status')=="Ready")
    {
        this.rootRef.child(element.val()).child("Status").set("Collected", function(error) {
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
