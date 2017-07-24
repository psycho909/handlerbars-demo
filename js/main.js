define(["text!../header.html"], function(header) {
    $.ajax({
        url:'js/json.js',
        type:'GET',
        dataType:'json'
    }).done(function(data){
        $('#header').html(header);
        $('#header').html(Handlebars.compile($("#header-template").html())(data));
    }).fail(function(){
        console.log('fail')
    }).always(function(){
    })
});