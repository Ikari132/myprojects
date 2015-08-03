var locations=[];
//var strike=newDiv.getAttribute("data");

var done=0;
var miss;
var fire;

for(i=0; i<=10; i++) {
	var cell=i;
	locations[i]=i;
	var newDiv=document.createElement("div");
	newDiv.className="loc";
	newDiv.setAttribute("data", i+1 );
	// $(".loc").attr("data", i);
	document.body.appendChild(newDiv);
	
};

$(".loc").click(function(){

	var NumOfCell=$(this).attr("data");
	alert(NumOfCell);

});

var randLoc=Math.floor((Math.random()*10)+1);
//alert(randLoc);
locations[randLoc]="ship";
locations[randLoc+1]="ship";
//locations[1]="ship";
outer: while(done<2){
	//alert("anus");
	//strike=prompt("try again enter num of cell ",""); //@!!!!!!

for(var key in locations){
	if(locations[key]=="ship" && key==strike){
		/*alert("strike");
		done++;
		if (done==2) {alert("you win") };
		//alert(locations[key]);
		var strike=prompt("enter num of cell","");
		//continue*/
		fire=true;
		locations[key]="deadShip"
		console.log(locations[key]);
    }
    else{
    	//alert("miss");
    	//strike=prompt("try again enter num of cell ","");
    	miss=true;
    	console.log(locations[key]);
    };

};

if (fire===true) {
	alert("strike");
	var color=document.getElementsByTagName('div');
	$(".loc").css("background", "red");
	document.body.style.backgroundColor = 'red';
	//color.style.backgroundColor='blue';
	setTimeout( function() {
		document.body.style.background = "";
	}, 100);
	
	done++;
	fire=false;

	//strike=prompt("try again enter num of cell ","");	
	
		//if(done==2){alert("you win")};	
	continue outer

    }
    else{
    	alert("miss");
    	//strike=prompt("try again enter num of cell ","");		
    	miss=false;
	    continue outer

    };

};//for
alert("you win")
//alert(locations[3]);
   


