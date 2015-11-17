 var Json=$.ajax({
            type:"POST",
            url:"read-db.php",
            async: false
            
       }).responseText; //ajax
alert(Json);           
var objNR=jQuery.parseJSON(Json);
alert(objNR); 
if(objNR==null){
  var objNS=[];
                              //проверка пустой базы
}
else if(objNR[0].text==null){
   var objNS=objNR;
}
else{
  var objNS=objNR.reverse();
  
}

 //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

$( document ).ready( function(){
 
  num();
  loadPage(1);


  
  $( ".Npage" ).click(function() {
     
    N=$(this).html();
    $(".Npage").removeAttr("id");
    $(this).attr("id","curr");
    
    loadPage(N);
  });


  var Num=$("#curr").html();
  $(".pages").attr("id",Num); //записывает №страницы в pages

});//ready



 //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  $(function() {                                
    $( "#button" ).click(function() {
     valid();
    });//click

  }); //function


$(function(){
$(".del").click(function(){
  $.ajax({
    
    url:"del.php",
    success: function(del){
      
      location.reload();

    }
  });



});
});
  

