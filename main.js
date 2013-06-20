$(document).ready(function() {
		var bottom_constraint = $(window).scrollTop() + ($(window).height()/2 + 150);
		var top_constraint = $(window).scrollTop() + ($(window).height()/2 - 150);
		$("#ta").css({'top': top_constraint});
		$("#ta i").html(top_constraint);
		$("#ba").css({'top': bottom_constraint});
		$("#ba i").html(bottom_constraint);

    $(window).scroll( function(){
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var top_of_object = $(this).position().top;
            var bottom_constraint = $(window).scrollTop() + ($(window).height()/2 + 150);
            var top_constraint = $(window).scrollTop() + ($(window).height()/2 - 150);
            if((bottom_constraint > bottom_of_object) && (top_constraint < bottom_of_object)){
                $(this).addClass('passing');
            } else if ((top_constraint > bottom_of_object) || (top_constraint < top_of_object)) {
            	$(this).removeClass('passing');
            }
      			$(this).find('em').html('<br />Top Object: ' + top_of_object + '<br /> <br />Bottom Object: ' + bottom_of_object)
            $("#ta").css({'top': top_constraint});
						$("#ta i").html(top_constraint);
            $("#ba").css({'top': bottom_constraint});
            $("#ba i").html(bottom_constraint);
        });
    });
});