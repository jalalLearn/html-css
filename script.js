
$(document).ready(function(){
    $('.fa-bars').click(function(){
        $('.ul-kheroje').toggle();
        $('.kolshi').addClass('sticky');
        $('.div-search').css('width',1200)
    });
    $('#ft').click(function(){
        $('.ul-kheroje').toggle();
        $('.kolshi').removeClass('sticky');
        $('.div-search').css('width',1330)
    })
});
$(document).ready(function(){
    $('.fa-search').click(function(){
        
        $('.div-search').toggle();

        $('nav').css('margin-top',60);
        
    })
    $('#qqq').click(function(){
        $('.div-search').toggle();
        $('nav').css('margin-top',0);
    })
});
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>40){
            $('.list-nav').addClass("sticky");
        }
        else{
            $('.list-nav').removeClass("sticky");
        }
    })
 });
 $(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>40){
            $('.ul-kheroje').addClass("sticky");
        }
        else{
            $('.ul-kheroje').removeClass("sticky");
        }
    })
 });
 var btnContainer = document.getElementsById("list");

 var btns = btnContainer.getElementsByClassName("rect");

 for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
});
};


 