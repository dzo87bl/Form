$(document).ready(function() {

	/* nav dropdown menu */
	if ($(window).width() > 768) {
		$('#navbar .nav').removeClass('animated bounceInDown');
		$('ul.nav li.dropdown').hover(function() {
			//$(this).find('.dropdown-menu').stop(true, true).fadeIn();
			//$(this).find('.dropdown-menu').stop(true, true).slideDown();
			$(this).find('.dropdown-menu').removeClass('animated flipOutY').addClass('animated rubberBand');
			$(this).addClass('open');
		}, function() {
			//$(this).find('.dropdown-menu').stop(true, true).fadeOut();
			//$(this).find('.dropdown-menu').stop(true, true).slideUp();
			//$(this).find('.dropdown-menu').removeClass('animated flipInY').addClass('animated flipOutY');
			$(this).removeClass('open');
		});
	} else {
		$('#navbar .nav').addClass('animated bounceInDown');
	}

	/* remove focus from bootstrap btn */
	$('.btn').focus(function(event) {
		event.target.blur();
	});

	/* remove empty p tag */
	$('p').each(function() {
		var $this = $(this);
		if ($this.html().replace(/\s|&nbsp;/g, '').length == 0)
			$this.remove();
	});

	/* remove error image */
	$("img").error(function () {
    	$(this).hide();
	});

	/* window scroll */
	// $fn.scrollSpeed(step, speed, easing);
	jQuery.scrollSpeed(100, 600);

	/* rating */
	$(".rating").rating();

	/* mask */
	$('#phone').mask('(000) 000 - 0000');

	/* selectpicker */
	$('select.form-control').selectpicker({
		style: 'btn-default',
	});

	/* datepicker */
	$("#datepicker").datepicker({
		firstDay : 1,
		dateFormat : "mm/dd/yy",
		yearRange : "-10:+10",
		changeMonth : true,
		changeYear : true,
		onClose: function () {
        	$(this).parsley().validate();
        }
	});
	$("#triger-datepicker").click(function() {
		$("#datepicker").datepicker().focus();
	});

	/* slider */
	$('#ex1').bootstrapSlider({
		formatter: function(value) {
			return 'Current value: ' + value;
		}
	});

	/* spinner */
	$(".plus").click(function(e) {
		e.preventDefault();
		fieldName = $(this).attr("field");
		var currentVal = parseInt($("input[name=" + fieldName + "]").val());
		if (!isNaN(currentVal)) {
			$("input[name=" + fieldName + "]").val(currentVal + 1);
		} else {
			$("input[name=" + fieldName + "]").val(0);
		}
	});
	$(".minus").click(function(e) {
		e.preventDefault();
		fieldName = $(this).attr("field");
		var currentVal = parseInt($("input[name=" + fieldName + "]").val());
		if (!isNaN(currentVal) && currentVal > 0) {
			$("input[name=" + fieldName + "]").val(currentVal - 1);
		} else {
			$("input[name=" + fieldName + "]").val(0);
		}
	});

});
