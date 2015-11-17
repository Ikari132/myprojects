$( document ).ready(function(){
$('#save').click(function(){
	var age = $('#age').val();
	var countryAge = $('#country').val();
	console.log(age);
    console.log(countryAge);
    if( !$('#age').val()|| !/^(\d|\d\d\.\d\d|\d\d|\d\d\.\d)$/.test($('#age').val())  ){
        $('#age').css('border','solid red');
    }else{
        localStorage.setItem('age',age);
        localStorage.setItem('countryAge',countryAge);
        window.location = "index.html"
    }
});
//var oldWeek = old*52;

var week = localStorage.getItem('age')*52;
//create years rows
for (var i = 1; i<=localStorage.getItem('countryAge'); i++) {
	
	$('.container').append('<div class=year id='+'y'+i+'  style="height:20px;margin:10px 0 10px 0; border-bottom:solid 1px">'+i+'</div>');

};
//create weeks in years with unic id	
var weekk = 1;

$('.year').each(function () {
	for (var i = 1; i<=52 ;i++) {
		$('#'+this.id).append('<div class="week" id="'+weekk+'" style="float:left;border:solid 1px;border-radius: 50px;width:10px;height:10px;margin:5px">'+'</div>');
		weekk++
	};
});
//change color of week 
for (var i = 1; i<=week ;i++) {
	$('#'+i).css('background', 'black').attr('class','done');
};
//calculate free weeks
var free = 0;

$('.week').each(function () {
	free++
});

$('h1').append(" Left weeks:"+free);


});
$.getJSON("https://ru.wikipedia.org/w/api.php?action=query&titles=%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D1%81%D1%82%D1%80%D0%B0%D0%BD_%D0%BF%D0%BE_%D0%BE%D0%B6%D0%B8%D0%B4%D0%B0%D0%B5%D0%BC%D0%BE%D0%B9_%D0%BF%D1%80%D0%BE%D0%B4%D0%BE%D0%BB%D0%B6%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8_%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8&prop=revisions&rvprop=content&format=json&callback=?", function(response) {
    console.log(response.query.pages);
        var arr = response.query.pages;
        //console.log(arr);
        for(k in arr){
            console.log(arr[k].revisions[0]);
            var page = arr[k].revisions[0];
        }
        for(i in page){
            if (i=='*') {
                var pageMain = page[i].split('{{')
            };
        }
        //console.log(pageMain);
        var countryList = [];
        /*pageMain.forEach(function(element, index){
            console.log(element.split('|'))
            countryList = countryList.concat( element.split('|') )
        });*/
        var countrys = {};

        for (var i = 0; i < pageMain.length; i++) {
            //console.log(pageMain[i].split('|'));
            var a = pageMain[i].split('|');
            var cntr = a[1].split('}}');
            //console.log(cntr[0]);
            //console.log(a[3]);
            var reg = new RegExp("");
            if( /^(\d\d\.\d\d|\d\d|\d\d\.\d)$/.test(a[3])){
                //console.log(a[3]);
                countrys[cntr[0] ]  = a[3];
            };
            
            //country.age = ;
            //console.log(country);
            //countrys.sort();
        };
        console.log(countrys);
        for(c in countrys){
            $('#country').append('<option value='+countrys[c]+'>'+c+'</option>');
        };
});
// $.ajax({
//     url: "https://ru.wikipedia.org/w/api.php?action=query&titles=%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D1%81%D1%82%D1%80%D0%B0%D0%BD_%D0%BF%D0%BE_%D0%BE%D0%B6%D0%B8%D0%B4%D0%B0%D0%B5%D0%BC%D0%BE%D0%B9_%D0%BF%D1%80%D0%BE%D0%B4%D0%BE%D0%BB%D0%B6%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8_%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8&prop=revisions&rvprop=content&format=json&callback=?& lang=ru",
//     type: 'GET',
//    // beforeSend: function(xhr){xhr.setRequestHeader("Origin", "http://ikari.zz.mu");},
//     success: function (response) {
//     	console.log(response.query.pages);
//     	var arr = response.query.pages;
//     	//console.log(arr);
//     	for(k in arr){
//     		console.log(arr[k].revisions[0]);
//     		var page = arr[k].revisions[0];
//     	}
//     	for(i in page){
//     		if (i=='*') {
//     			var pageMain = page[i].split('{{')
//     		};
//     	}
//     	//console.log(pageMain);
//     	var countryList = [];
//     	/*pageMain.forEach(function(element, index){
//     		console.log(element.split('|'))
//     		countryList = countryList.concat( element.split('|') )
//     	});*/
// 		var countrys = {};

//     	for (var i = 0; i < pageMain.length; i++) {
//     		//console.log(pageMain[i].split('|'));
//     		var a = pageMain[i].split('|');
//     		var cntr = a[1].split('}}');
//     		//console.log(cntr[0]);
//     		//console.log(a[3]);
//     		var reg = new RegExp("");
//     		if( /^(\d\d\.\d\d|\d\d|\d\d\.\d)$/.test(a[3])){
//     			//console.log(a[3]);
//     			countrys[cntr[0] ]  = a[3];
//     		};
    		
//     		//country.age = ;
//     		//console.log(country);
//     		//countrys.sort();
//     	};
//     	console.log(countrys);
//     	for(c in countrys){
//     		$('#country').append('<option value='+countrys[c]+'>'+c+'</option>');
//     	};
    	
//     },
//     error: function (response) {
//     }
// });