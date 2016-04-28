// define(['jquery'],function($){
// 	function ScrollTo(opts){
// 		this.opts = $.extend({},ScrollTo.DEFAULT,opts);
// 		this.$el = $('html,body');
// 	}
// 	ScrollTo.DEFAULT = {
// 		dest: 0,
// 		speed: 3800
// 	}
// 	ScrollTo.prototype.move = function(){
// 		if(!this.$el.is(':animated') && $(window).scrollTop()!=this.opts.dest){
// 			this.$el.animate({
// 				scrollTop: this.opts.dest
// 			},this.opts.speed)
// 		}
		
// 	}
// 	ScrollTo.prototype.go = function(){
// 		if($(window).scrollTop() != this.opts.dest){
// 			this.$el.scrollTop(this.opts.dest);
// 		}
// 	}
// 	return {
// 		ScrollTo: ScrollTo
// 	}
// })


define(['jquery'],function ($) {
	// 用户传递的值与默认值比对返回给opts
	function ScrollTo(opts){
		this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);
	}
	ScrollTo.DEFAULTS = {
		dest: 0,
		speed: 800
	}
	ScrollTo.prototype.move = function(){
		$('html,body').animate({
			scrollTop: this.opts.dest
		}, this.opts.speed);
	}
	ScrollTo.prototype.go = function(){
		$('html,body').scrollTop(this.opts.dest);
	}
	return {
		ScrollTo: ScrollTo
	}
})
