$(document).ready(function () {
//var oldWeek = old*52;

    var weeks = localStorage.getItem('age') * 52;//get weeks
    var nowYear = new Date().getFullYear();
    var birthDate = nowYear - localStorage.getItem('age') + 1;
    // alert(new Date());
//create years rows
    for (var i = 1; i <= localStorage.getItem('countryAge'); i++) {

        $('.container').append('<div class="row"><div class="year_cont col-xs-12" id=' + 'y' + birthDate + ' style="height:20px;margin:10px 0 10px 0; border-bottom:solid 1px"><div class="year">' + i + "//" + birthDate + '</div></div></div>');
        birthDate++;
    }
    ;
//create weeks in years with unic id	
    var week = 1;

    $('.year_cont').each(function () {
        for (var i = 1; i <= 52; i++) {
            $('#' + this.id).append('<div class="week" id="' + week + '" style="float:left;border:solid 1px;border-radius: 50px;width:10px;height:10px;margin:5px">' + '</div>');
            week++
        }
        ;
    });
//change color of week 
    for (var i = 1; i <= weeks; i++) {
        $('#' + i).css('background', 'black').attr('class', 'done');
    }
    ;
//calculate free weeks
    var free = 0;

    $('.week').each(function () {
        free++
    });

    $('h1').append(" Left weeks:" + free);

    $('#y' + nowYear + " " + '.done').css('background', ' none');//remove background on weeks in current year
    var pastWeeks = (new Date().getMonth() + 1) * 4;//get past weeks in this year

    var countPastWeeks = 0;
    $('#y2015 .done').each(function () {//each all weeks

        if (pastWeeks >= countPastWeeks) {//and stop when past weeks end
            $(this)
                .attr('class', 'done')
                .css('background', 'black');
        }
        countPastWeeks++;
        // console.log(k);
    });
    // console.log($('#y'+birthDate).css('color','green'));
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