$(document).ready(function () {
    AOS.init();
    $(".menu-main-menu-container").attr('id', 'menuid');
    var burgerMenu = document.getElementById('burger-menu');
    var overlay = document.getElementById('menuid');
    burgerMenu.addEventListener('click',function(){
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");

    });
    $(document).on("click",function(){
        $(".overlay").css("overflow","hidden")
    })
    $(".hover").mouseleave(
        function () {
            $(this).removeClass("hover");
        }
    );




    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        loop: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


//    paralax
    document.addEventListener('mousemove', parallax);

    function parallax(e) {
        e.preventDefault();
        this.querySelectorAll('.layer').forEach((layer) => {
            let speed = layer.getAttribute('data-speed');
            layer.style.transform = `translate(${e.clientX * speed / 1200}px)`;
        })
    }
})
