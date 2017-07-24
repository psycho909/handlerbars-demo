define(["text!../template/header.html","text!../template/footer.html"], function(header,footer) {
    $.ajax({
        url:'js/json.js',
        type:'GET',
        dataType:'json'
    }).done(function(data){
        $('#header').html(header);
        $('#header').html(Handlebars.compile($("#header-template").html())(data));

        $('#footer').html(footer)
        $('#footer').html(Handlebars.compile($('#footer-template').html())(data));
    }).fail(function(){
        console.log('fail')
    }).always(function(){
    })
});