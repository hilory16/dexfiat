


$( ".collapse__faq" ).click(function() {
    console.log("object")
    $(this).toggleClass('expand__faq')
});

$('.app__modal__trigger').click(function(){
    $(".modal__app").toggleClass('show__modal__app')
})

$('.app__modal__close').click(function(){
    $(".modal__app").toggleClass('show__modal__app')
})