
$(document).ready(function(){

    var $homeSlider = $(".home-slider");

    $homeSlider.addClass(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 5,
        stagePadding: 50,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 1000
    });
    
});
$(document).ready(function(){
	$("#pull").click(function(){
    $(".ul_element").slideToggle(300)
    $(".ssssss").css("font-size","0.7em");
	});
});

$(function(){
    //cоздание обьекта "Modal"
    var modal = {
        self: $('#modal'),  //модульное окно

        showModal: function(content){
            this.self.find('#innerModal').html(content);
            this.self.fadeIn(200);
        },
        hideModal: function(){        //спрятать окно
            this.self.fadeOut(200);
            this.self.find('#innerModal').html('');
        }

    };
    //обработка события нажатия кнопки ' show modal

    $('.showModal').on("click",function(e){
        var id = $(this).data('id');
        var content = $('#cont'+id).html();
        modal.showModal(content);
});
    //обработка события клика на само модульное окно
    $('#modal')on.('click',function(e){

        if($(e.target).attr('id') === "modal" || $(e.target).hasClass("closeModal")){// проверка события клика
    
                modal.hideModal();
           
           }else{
            return false;
           }


    });