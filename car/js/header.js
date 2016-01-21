/**
 * Created by _Ikari_ on 20.01.2016.
 * FOR WEB BRANDBOOK
 */
$( document ).ready(function() {
    console.log( "ready!" );
    //header


    //header_End

//Scroll-hide main header
    ( function( $, window, document, undefined )
    {
        'use strict';

        var elSelector		= '.navbar',
            elClassHidden	= 'header--hidden',
            throttleTimeout	= 200,
            $element		= $( elSelector );

        if( !$element.length ) return true;

        var $window= $( window ),
            wHeight			= 0,
            wScrollCurrent	= 0,
            wScrollBefore	= 0,
            wScrollDiff    = 0,
            $document		= $( document ),
            dHeight			= 0,

            throttle = function( delay, fn )
            {
                var last, deferTimer;
                return function()
                {
                    var context = this, args = arguments, now = +new Date;
                    if( last && now < last + delay )
                    {
                        clearTimeout( deferTimer );
                        deferTimer = setTimeout( function(){ last = now; fn.apply( context, args ); }, delay );
                    }
                    else
                    {
                        last = now;
                        fn.apply( context, args );
                    }
                };
            };

        $window.on( 'scroll', throttle( throttleTimeout, function()
        {
            dHeight			= $document.height();
            wHeight			= $window.height();
            wScrollCurrent	= $window.scrollTop();
            wScrollDiff		= wScrollBefore - wScrollCurrent;

            if( wScrollCurrent <= 0 ) // scrolled to the very top; element sticks to the top
            {
                $element.removeClass(elClassHidden);
                $('.logo-cont')
                    .css('height', '80px')
                    .css('background-size','contain');
                $('.logo')
                    .css('height', '80px')
                    .css('background-size','contain');

                $('.header_logo a').css('display','block');
            }

            else if( wScrollDiff > 0 && $element.hasClass( elClassHidden ) ) // scrolled up; element slides in
            {
                $element.removeClass( elClassHidden );
                $('.logo-cont')
                    .css('height','10px')
                    .css('background-size','0 0');
                $('.logo')
                    .css('height','10px')
                    .css('background-size','0 0');

                $('.header_logo a').css('display','none');
            }
            else if( wScrollDiff < 0 ) // scrolled down
            {
                if($('#main-navbar-collapse').attr('aria-expanded')!="true"){
                    $element.addClass( elClassHidden );
                }

            }

            wScrollBefore = wScrollCurrent;
        }));

    })( jQuery, window, document );

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('.goto_top').fadeIn(200);    // Fade in the arrow
        } else {
            $('.goto_top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#page-up').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });
//END Scroll-hide main header


//page scroll up
    $('.arrow').click(function(){
        $('.lots_open').show();
    });
//END page scroll up

//Mobile search
    /*$('#mob_search').click(function(){
     $('.open_search').show('blind', 200);
     });

     $('#search_close').click(function(){
     $('.open_search').hide('blind', 200);
     });*/
    $("body").on("click", "#mob_search", function(event){
        $('.open_search').show('blind', 200);
    });
    $("body").on("click", "#search_close", function(event){
        $('.open_search').hide('blind', 200);
    });
//END mobile search

//toggle arrow icon
    function toggleChevron(e) {
        console.log($(e.target));
        $(e.target)
            .prev('.panel-heading')
            .find("i")
            .toggleClass('fa-chevron-down  fa-chevron-up');

    };
//toggle arrow icon


    function closeAccordion(e){
        $('.panel-collapse').collapse('hide');
        $(e.target).collapse('show');
    }
    $('#accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion').on('shown.bs.collapse', toggleChevron);
    $('.panel-heading').on('click', closeAccordion);

    /*$('#reg').click(function(){
     alert('click');
     $('.reg-user').toggle('display');
     $('.unregistered').toggle('display');
     });
     $('#out').click(function(){
     $('.reg-user').toggle('display');
     $('.unregistered').toggle('display');
     });*/

    $("body").on("click", "#reg", function(event){
        $('.reg-user').toggle('display');
        $('.unregistered').toggle('display');
    });
    $("body").on("click", "#out", function(event){
        $('.reg-user').toggle('display');
        $('.unregistered').toggle('display');
    });

    //footer
   // $('footer').load( "footer.html");
    //footer end
    $(window).resize(function() {
        //console.log($('.col-sm-1').css("width"));
        //console.log($('.col-sm-1').height());

        //get % of element
        function pers(el){
            var width = $(el).innerWidth();
            var parentWidth = $('.container').innerWidth();
            var percent = 100*width/parentWidth;
            var pr = percent.toString().slice(0,5);
            console.log(pr);
            return pr;
        }

        $('.col-sm-1 .percent').remove();
       // $('.col-sm-1 .w').remove();
        $('.col-sm-1 .el').empty();
        $('.col-sm-1 .el').append("<p class='percent text-center'>"+$('.col-sm-1').innerWidth()+"px"+"<br>"+pers('.col-sm-1')+"%"+"</p>");
      //  $('.col-sm-1 .el').append("<p class='w text-center'>"+$('.col-sm-1').width()+"px"+"<br>"+pers('.col-sm-1')+"%"+"</p>");
        $('.col-sm-1 .el').prepend($('.col-sm-1').width()+"px");
        $('.col-sm-2 .el').empty().append($('.col-sm-2').width()+"px"+"<br>"+pers('.col-sm-2')+"%");
        $('.col-sm-4 .el').empty().append($('.col-sm-4').width()+"px"+"<br>"+pers('.col-sm-4')+"%");
        $('.col-sm-6 .el').empty().append($('.col-sm-6').width()+"px"+"<br>"+pers('.col-sm-6')+"%");
        $('#grid-cont').empty().append("Container width "+$('.container').width()+"px")


    });


});//document ready

