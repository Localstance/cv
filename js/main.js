$(function() {

//model
    var cssValues = {
        "border":"none",
        "background":"none"
    };
    var sliderOptions = {
        value: 0,
        orientation: "horizontal",
        range: "min",
        animate: true
    };
    var showThisRegion = {
        lat: 50.846391,
        lng: 33.725940
    };
    var myGeolocation = {
        lat: 49.846391,
        lng: 36.725940
    };
    function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
            center: showThisRegion,
            scrollwheel: true,
            zoom: 7
        });
        // Create a marker and set its position.
        var marker = new google.maps.Marker({
            map: map,
            position: myGeolocation,
            title: 'Hello there!'
        });
    }
    //fix problem with shown
    $(function() {
        var $modal = $('#myModal'),
            $map = $('#map');
        $modal.on('shown.bs.modal', function () {
            google.maps.event.trigger($map[0], 'resize');
        });
    });

    //darggable recreation circles
    $( ".myHobbies span" ).draggable({ containment: "#containment-wrapper", scroll: false });


//view
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
    $(".ui-state-default").css(cssValues);//disable native css


    //all sliders with default options
    $(".slider").slider(sliderOptions);

    //prof skills sliders

    $(".slider-javascript").slider("option", "value", 27);
    $(".slider-html-css").slider("option", "value", 45);
    $(".slider-dom").slider("option", "value", 50);
    $(".slider-ajax").slider("option", "value", 20);
    $(".slider-git-bower-grunt").slider("option", "value", 35);
    $(".slider-photoshop").slider("option", "value", 60);

    //pers skills sliders
    $(".slider-desire").slider("option", "value", 100);
    $(".slider-resp").slider("option", "value", 90);
    $(".slider-adapt").slider("option", "value", 80);
    $(".slider-commun").slider("option", "value", 85);
    $(".slider-org").slider("option", "value", 90);
    //lang skills sliders
    $(".slider-eng").slider("option", "value", 55);
    $(".slider-ua").slider("option", "value", 90);
    $(".slider-rus").slider("option", "value", 100);
    $(".slider-spain").slider("option", "value", 5);

    //unactive on hover
    $(".slider").hover(
        function (){
            $(this).slider("option", "disabled", true);
        }, function (){
            $(this).slider("option", "disabled", false);
        }
    );
    //init google map
    initMap();

    $( "input.showBtn" ).click(function() {
        $( "div.languageSkills" ).fadeToggle( "slow", function() {
           //$(this).css("display", "block");
        });
        $( "div.recreation" ).fadeToggle( "slow", function() {
            //
        });
        var valueText = $('.showBtn').attr('value');
        if ( valueText == "Show more" ){
            $(this).attr("value", "Hide");
        } else {
            $(this).attr("value", "Show more");
        }

    });
});