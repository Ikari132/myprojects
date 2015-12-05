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
        window.location = "done.html"
    }
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

        Array.prototype.sort.call( countrys, function( a, b ) {

            console.log(a);
            console.log(b);
            return a[2] > b[2] ? 1 : a[2] < b[2] ? -1 : 0;

        });

        console.log(countrys);
        function ksort(w) {
            var sArr = [], tArr = [], n = 0;

            for (i in w){
                tArr[n++] = i;
            }

            tArr = tArr.sort();
            for (var i=0, n = tArr.length; i<n; i++) {
                sArr[tArr[i]] = w[tArr[i]];
            }
            return sArr;
        };
            countrySort = ksort(countrys);
        for(c in countrySort){
            $('#country').append('<option value='+countrySort[c]+'>'+c+'</option>');
        };

});
});//ready