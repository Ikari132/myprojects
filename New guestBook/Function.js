function loadPage(N){
              
               
             // objNS.unshift(last={name,text,date});//элементы в начало массива
              if(N==1){
              $(".Npage:first").attr("id","curr");
            };
             
              
              if(N=="newMsg"){//if new message, take N from  .pages;
                N=$(".pages").attr("id");
                $( ".pages .Npage:nth-child("+N+")" ).attr("id","curr");


            };
             
             
             $(".pages").attr("id",N);

                $(".answers").empty();

                var start=5*(N-1);
                var fin=start+5;
                var obj=objNS.slice(start, fin);

                for (i=0; i<obj.length; i++){ //выводим 5 сообщений
      
      
                var prof="<div class='answCont' id='aC"+i+"''><div class='profile' id='prf"+i+"''> <div class='nik' id="+i+">"+obj[i].name+"</div><div class='time' id="+i+">"+obj[i].date+"</div></div>   <div class='mess' id="+i+">"+obj[i].text+"</div> <div class='clear'></div></div>  ";
      
                
               $(prof).appendTo('.answers');
                 
                
                
            };
            
            
};//loadPage

function num(){
 
   //находит кол-во странииц
               numPages = Math.ceil(objNS.length / 5);// находим количкство страниц, ceil возвращает ближайшее к Х большее целое;
                $(".pages").empty();//!!!!
               for(i=1; i<=numPages; i++){
                 $(".pages").append("<span class='Npage'>"+i+"</span>")
               }

              

};//num fnct

function correctDate(){
          var time=new Date();
          var month = (1 + time.getMonth()).toString();
          month = month.length > 1 ? month : '0' + month;
          
          var hours=time.getHours();
          hours=hours > 9 ? hours : '0'+ hours;
          
          var minutes=time.getMinutes();
          minutes=minutes>9 ? minutes : '0'+minutes;

          var seconds=time.getSeconds();
          seconds=seconds > 9 ? seconds : '0'+ seconds;

          var date=time.getFullYear()+'-'+month+'-'+time.getDate()+" "+ hours+ ":" + minutes + ":"+ seconds;
          return date
};//correctDate

function valid(){
     
      var name=$.trim($("#name").val());
      var text=$.trim($("#input").val());
      
      if (name.length>10){
        
         $("#name").attr({placeholder:"name too long"});
         $("#name").val("");
        $("#name").css("border","solid red 2px");
        
        $("#name").click(function(){
          $("#name").attr({placeholder:"Name"});
          $("#name").css("border","solid gray 1px");
        
        })

      }
      else if (name==""){
        
        $("#name").attr({placeholder:"input name"});
        $("#name").css("border","solid red 2px");
        
        $("#name").click(function(){
          $("#name").attr({placeholder:"Name"});
          $("#name").css("border","solid gray 1px");
        
        })

       
      }
      else if(text==""){
        
        $("#input").attr({placeholder:"input message"});
        $("#input").css("border","solid red 2px");
        
        $("#input").click(function(){
          $("#input").attr({placeholder:"Message"});
          $("#input").css("border","solid gray 1px");
          
        })
      }


      else {
       sendTo();

      }//else
};//valid

function sendTo(){
        
          
          var name = $('#name').val();
          var text= $("#input").val();
          var date=correctDate();
          
          objNS.unshift(last={name,text,date});//элементы в начало массива
         

          $.ajax({
            type:"POST",
            url:"script.php",
            data:"name="+name+"&text="+text+"&date="+date,
            

            success: function(ans) {
               
              var obj = jQuery.parseJSON(ans);

             
              if (obj.status=="post_error_writing_to_base"){
                alert("error_writing_to_base");
                $( "#err" ).fadeIn();
                $("#err").fadeOut(5000);
              }
               
              else if (obj.status=="post_error_request_values"){
                
                $("#all").fadeIn("slow");
                $("#all").fadeOut(5000);
              }
              else{
                
                $("#ok").fadeIn("slow");
                $("#ok").fadeOut(2000);
                $("#input").val("");
                $("#name").val("");
                
                num();
                loadPage("newMsg");
                                
                $( ".Npage" ).click(function() {
     
                  N=$(this).html();
                  $(".Npage").removeAttr("id");
                  $(this).attr("id","curr");
                  
                  loadPage(N);
                });
               

                  
              }//else
            }// sucsess 
                 

          }); //ajax
        
        
};//sendTo