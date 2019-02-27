$(function () {
	$(".link_text").mousemove(function(e) {
		var showntext=$(this).attr("showtext");
		$("#linktext").text(showntext);
		$("#linktext").css("top","275px").css("left", e.clientX+10);

	});
});