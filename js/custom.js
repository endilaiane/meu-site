$(document).ready(function(){

    // Menu Mobile
    $(".button-collapse").sideNav();

    // SCROLL SUAVE
    $('.scrollspy').scrollSpy({
        scrollOffset: 0
    });

    // SCROLL adaptativo
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > 200){
            $(".navbar").addClass('nav-color');
        }else{
        $(".navbar").removeClass('nav-color');
        }
    });

    //  Esconder Menu
    $('.hide-menu').click(function(){
        $('.button-collapse').sideNav('hide');
    });

    //Atualizar ano 
    function updateyear(){
        var today = new Date();
        var ano = today.getFullYear();

        return ano;
    }
    $('#copy').html("Copyright ©" +updateyear()+ ". Todos os direitos reservados.");
    
});
