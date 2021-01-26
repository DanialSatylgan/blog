$(document).ready(() => {

    const blur = document.querySelectorAll('[data-blur]');
    const btn = document.querySelectorAll('.sidebar__btn');
    

    $('.header__has-list').hover(()=>{
        $('.header__list').addClass("active");
        $('.header__has-list').addClass("active");
    });

    $(".header__list").mouseleave(()=>{
        $(".header__list").removeClass("active");
        $(".header__has-list").removeClass("active");
    });




    $(".sidebar__popup").click((e)=>{
        e.preventDefault();

        $(".contact").addClass("active");
        $(".menu").removeClass("active");
        $(blur).addClass("blur");
        
    });

    $(".close").click(()=>{
        $(".contact").removeClass("active");
        $(".menu").removeClass("active");
        $(blur).removeClass("blur");
    });

    $(btn).click(()=>{
        $(".menu").addClass("active");
    });


});
