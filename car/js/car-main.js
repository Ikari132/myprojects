/**
 * Created by _Ikari_ on 11.12.2015.
 */
$( document ).ready(function() {
    console.log( "ready!" );
    //header


    //header_End

//Scroll-hide main header
( function( $, window, document, undefined )
{
    'use strict';

    var elSelector		= '#main-navbar',
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
            $('.header_logo')
                .css('height', '80px')
                .css('background-size','contain');

            $('.header_logo a').css('display','block');
        }

        else if( wScrollDiff > 0 && $element.hasClass( elClassHidden ) ) // scrolled up; element slides in
        {
            $element.removeClass( elClassHidden );
            $('.header_logo')
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


    $('#main-navbar').empty();
    $('#main-navbar').load( "header.html");

    //footer
    $('footer').load( "footer.html");
    //footer end
    });//document ready
