
$(document).ready(function(){
    $(window).on('scroll',function(){
        if( $(window).scrollTop()) {
            $("nav").removeClass("trans");
            $("nav").addClass("black");
        } else {
             $("nav").removeClass("black");
             $("nav").addClass("trans");
        }
       
    });
});
    
  
    