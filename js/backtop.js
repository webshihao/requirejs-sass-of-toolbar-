define(['jquery','scrollto'],function($,scrollto){
	function BackTop(el,opts){
		this.opts = $.extend({},BackTop.DEFAULTS,opts);
		this.$el = $(el);
		if(this.opts.mode == 'move'){
			this.$el.on('click',$.proxy(this._move,this));
		}else{
			this.$el.on('click',$.proxy(this._go,this));
		}
		this.scroll = new scrollto.ScrollTo({
			dest: 0,
			speed: this.opts.speed
		});
		if($(window).scrollTop() == 0){
			$('#backTop').css('display', 'none');
		}
		$(window).on('scroll',$.proxy(this._checkPosition,this));
	}
	BackTop.DEFAULTS = {
		mode: 'move',
		pos: $(window).height(),
		speed: 800
	}
	BackTop.prototype._move = function(){
		this.scroll.move();
	}
	BackTop.prototype._go = function(){
		this.scroll.go();
	}
	BackTop.prototype._checkPosition = function(){
		if($(window).scrollTop()>this.opts.pos){
			this.$el.fadeIn();
		}else{
			this.$el.fadeOut();
		}
	}
	$.fn.extend({
		backtop: function(opts){
			return this.each(function() {
				new BackTop(this,opts);
			});
		}
	})
	return {
		BackTop: BackTop
	}
})













