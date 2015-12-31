/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function CarType(select){
    var selectedString = select.options[select.selectedIndex].value;
    if(selectedString =="Luxury")
    {
        document.getElementById("days_target").style.display = "block";
    }else {
        document.getElementById("days_target").style.display = "none";
    }
}

function input()
{
   pckdate = document.orderform.arrivalDate.value,
  drpdate = document.orderform.departureDate.value;
  var one_day = 1000 * 60 * 60 * 24;
   var pckdte = new Date(pckdate);
   var pick = pckdte.getTime();
   var drpdte = new Date(drpdate);
   var drop = drpdte.getTime();
   var difference_ms = Math.abs(pick - drop);
   var diff= Math.round(difference_ms/one_day);
   document.orderform.inputdays.value=diff;
   document.getElementById('textbox').value = diff;
  
}
function checkform(){
  car_type = document.orderform.types.value,
  loc = document.orderform.locations.value,
  pckdate = document.orderform.arrivalDate.value,
  drpdate = document.orderform.departureDate.value;
  

if (car_type == "") {
         document.orderform.types.focus();
         document.getElementById("errorBox").innerHTML = "Please select Car Type";
       
        return false;
     }
  if (loc == "") {
        document.orderform.locations.focus();
        document.getElementById("errorBox").innerHTML = "Please select Location";
        return false;
     }
     
     if(pckdate=="")
     {
        document.orderform.locations.focus();
        document.getElementById("errorBox").innerHTML = "Please select Pick Up Date";
        return false;
     }
     
     var now = new Date();
     var month=now.getMonth()+1;
     var todaysdate = now.getFullYear()+"-"+ month +"-"+now.getDate();
     if(pckdate<todaysdate){
         document.orderform.locations.focus();
        document.getElementById("errorBox").innerHTML = "Pickup Date should be greater than today's Date";
        return false;
     }
     
     if(drpdate=="")
     {
        document.orderform.locations.focus();
        document.getElementById("errorBox").innerHTML = "Please select Drop Off Date";
        return false;
     }
     
     /*if(drpdate<todaysdate){
         document.orderform.locations.focus();
        document.getElementById("errorBox").innerHTML = "DropDate should be greater than today's Date";
        return false;
     }*/
     
     
     if(pckdate>drpdate)
     {
        document.orderform.locations.focus();
        document.getElementById("errorBox").innerHTML = "Pick up date should be before than Drop Off Date";
        return false;
     }
  
return true;
     }

function showHide(divId){
if(checkform()){
    var theDiv = document.getElementById(divId);
    if(theDiv.style.display=="none"){
        theDiv.style.display="block";
    }else{
        theDiv.style.display="none";
    }
    
   var cartype=document.orderform.types.value;
   var type=document.getElementById("type"); 
   type.innerHTML=cartype;
   
   var place=document.orderform.locations.value;
   var where=document.getElementById("location"); 
   where.innerHTML=place;

   var days=document.orderform.inputdays.value;
   var nodays=document.getElementById("days"); 
   nodays.innerHTML=days;
   
   

 
  var car_type=document.orderform.types.value;
  price=0.00;
  
  if(days<15){
   switch(car_type)
   {
       
       case "Compact":price=(price+29.99)*days;
       break;
       case "MidSize":price=(price+39.99)*days;
       break;
       case "Luxury":price=(price+49.99)*days;
       break;
   }
   
   var loc=document.orderform.locations.value;
   switch(loc)
   {
       
       case "SanFrancisco":price=price+(price*0.15);
       break;
       case "Los Angeles":price=price+(price*0.15);
       break;
       case "Luxury":price=price+(price*0.1);
       break;
   }
   
   
   if(document.orderform.collision.checked && (document.orderform.types.value == "Compact"))
   {
       price=price+(17*days);
   }
   else if(document.orderform.collision.checked && (document.orderform.types.value == "MidSize"))
   {
       price=price+(22*days);
   }
   
   else if(document.orderform.collision.checked && (document.orderform.types.value == "Luxury")){
        price=price+(28*days);
   }
   
   if(document.orderform.giftcards.checked)
   {
      price=price+100;
   }
   
    if((document.orderform.carwash.checked)&& (document.orderform.types.value == "Luxury"))
   {
      price=price+50;
   }
   var total=document.getElementById("price");
   total.innerHTML= "  $" + price;
  }

else if(days>=15 && days<30){
    switch(car_type)
   {
       
       case "Compact":price=(price+29.99)*(days*0.9);
       break;
       case "MidSize":price=(price+39.99)*(days*0.9);
       break;
       case "Luxury":price=(price+49.99)*(days*0.9);
       break;
   }
   
   var loc=document.orderform.locations.value;
   switch(loc)
   {
       
       case "SanFrancisco":price=price+(price*0.15);
       break;
       case "Los Angeles":price=price+(price*0.15);
       break;
       case "Luxury":price=price+(price*0.1);
       break;
   }
   
   
   if(document.orderform.collision.checked && (document.orderform.types.value == "Compact"))
   {
       price=price+(17*days);
   }
   else if(document.orderform.collision.checked && (document.orderform.types.value == "MidSize"))
   {
       price=price+(22*days);
   }
   else if (document.orderform.collision.checked && (document.orderform.types.value == "Luxury")){
        price=price+(28*days);
   }
   
   if(document.orderform.giftcards.checked)
   {
      price=price+100;
   }
   
    if((document.orderform.carwash.checked)&& (document.orderform.types.value == "Luxury"))
   {
      price=price+50;
   }
   var total=document.getElementById("price");
   total.innerHTML= "  $" + price;
    }
else if(days>=30){
    switch(car_type)
   {
       
       case "Compact":price=(price+29.99)*(days*0.8);
       break;
       case "MidSize":price=(price+39.99)*(days*0.8);
       break;
       case "Luxury":price=(price+49.99)*(days*0.8);
       break;
   }
   
   var loc=document.orderform.locations.value;
   switch(loc)
   {
       
       case "SanFrancisco":price=price+(price*0.15);
       break;
       case "Los Angeles":price=price+(price*0.15);
       break;
       case "Luxury":price=price+(price*0.1);
       break;
   }
   
   
   if(document.orderform.collision.checked && (document.orderform.types.value == "Compact"))
   {
       price=price+(17*days);
   }
   else if(document.orderform.collision.checked && (document.orderform.types.value == "MidSize"))
   {
       price=price+(22*days);
   }
   else if(document.orderform.collision.checked && (document.orderform.types.value == "Luxury")){
        price=price+(28*days);
   }
   
   if(document.orderform.giftcards.checked)
   {
      price=price+100;
   }
   
    if((document.orderform.carwash.checked)&& (document.orderform.types.value == "Luxury"))
   {
      price=price+50;
   }
   var total=document.getElementById("price");
   total.innerHTML= "  $" + price;
}
}
}