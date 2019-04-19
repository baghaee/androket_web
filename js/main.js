$(function () {

	//navbar dropdown menu
	$(".dropdown").hover(
		function () {
			$('.dropdown-menu', this).stop(true, true).fadeIn(200);
			$(this).toggleClass('open');
			$('span', this).toggleClass("caret caret-up");
		},
		function () {
			$('.dropdown-menu', this).stop(true, true).fadeOut(250);
			$(this).toggleClass('open');
			$('span', this).toggleClass("caret caret-up");
		});

	//tooltip
	$('[data-toggle="tooltip"]').tooltip();

});
$(document).ready(function () {
	$('.dashboard-j-li').click(function () {
		$('.dashboard-li-div').hide();
		var id=$(this).attr('id');
		var Cid=id+'-div';
		console.log(Cid)
		$('#'+Cid).show();
	})
})