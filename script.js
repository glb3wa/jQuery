
$(document).ready(function() {
    
    $(".css").click(function() {
        $(".p").css("color", "red");
    });
    
    $(".html").click(function() {
        $(".p").html("<em>Hello World!</em>")
    })
    
    $(".slide").click(function() {
        $(".p").slideToggle("slow")
    })
    
    $(".toggle").click(function(){
        $(".card").toggle();
    });
});