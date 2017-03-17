var trackMyMouse = (function(){

  function init() {

    var winHeight = $('.pixel-container').height();
    var winWidth = $('.pixel-container').width();
    var pixelWidth = (Math.floor(winWidth) / 20 - 1).toFixed();
    var pixelHeight = (winHeight / 20).toFixed();
    var pixelTotal = pixelWidth;

    for (var y = 1; y <= pixelHeight; y++) {
      for (var x = 1; x <= pixelWidth; x++) {
        var pixel = $('<div class="pixel" attry="' + y + '" attrx="' + x + '"></div>');
        $(pixel).appendTo('.pixel-container');
      }
    }

    $('.pixel').click(function() {
      var _this = this;
      var up = 0;
      var down = 0;
      var left = 0;
      var right = 0;
      var randomize = Math.floor(Math.random() * 4) + 1;
      var pixelColor = '';
      if (randomize === 1) {
        pixelColor = 'pixel-green';
      } else if (randomize === 2) {
        pixelColor = 'pixel-blue';
      } else if (randomize === 3) {
        pixelColor = 'pixel-red';
      } else if (randomize === 4) {
        pixelColor = 'pixel-orange';
      }

      $(this).addClass(pixelColor);
      setTimeout(function(){
        $(_this).removeClass(pixelColor);
      }, 2000);

      var myIntervalUp = setInterval(function(){
        var added = $(".pixel[attry='" + (parseInt($(_this).attr('attry')) + up) + "'][attrx='" + (parseInt($(_this).attr('attrx'))) + "']").attr('class', 'pixel');
        $(added).addClass(pixelColor);
        setTimeout(function(){
          $(added).removeClass(pixelColor);
        }, 2000);
        up--;
      }, 90);
      globalIntervalUp = myIntervalUp;

      var myIntervalDown = setInterval(function(){
        var added = $(".pixel[attry='" + (parseInt($(_this).attr('attry')) + down) + "'][attrx='" + (parseInt($(_this).attr('attrx'))) + "']").attr('class', 'pixel');
        $(added).addClass(pixelColor);
        setTimeout(function(){
          $(added).removeClass(pixelColor);
        }, 2000);
        down++;
      }, 90);
      globalIntervalDown = myIntervalDown;

      var myIntervalRight = setInterval(function(){
				var added = $(".pixel[attry='" + (parseInt($(_this).attr('attry'))) + "'][attrx='" + (parseInt($(_this).attr('attrx')) + right) + "']").attr('class', 'pixel');
        $(added).addClass(pixelColor);
        setTimeout(function(){
          $(added).removeClass(pixelColor);
        }, 2000);
        right++;
      }, 90);
      globalIntervalRight = myIntervalRight;

      var myIntervalLeft = setInterval(function(){
        var added = $(".pixel[attry='" + (parseInt($(_this).attr('attry'))) + "'][attrx='" + (parseInt($(_this).attr('attrx')) + left) + "']").attr('class', 'pixel');
        $(added).addClass(pixelColor);
        setTimeout(function(){
          $(added).removeClass(pixelColor);
        }, 2000);
        left--;
      }, 90);
      globalIntervalLeft = myIntervalLeft;

      setTimeout(function(){
        clearInterval(myIntervalDown);
        clearInterval(myIntervalUp);
        clearInterval(myIntervalRight);
      }, 10000);
    });

    // var liveClicker = setInterval(function() {
    //   $(".pixel[attry='" + (Math.floor(Math.random() * pixelHeight) + 1) + "'][attrx='" + (Math.floor(Math.random() * pixelWidth) + 1) + "']").trigger('click');
    // }, 2000);
    //
    // $(window).blur(function() {
    //   console.log('blur');
    //   setTimeout(function() {
    //     clearInterval(liveClicker);
    //     clearInterval(globalIntervalUp);
    //     clearInterval(globalIntervalDown);
    //     clearInterval(globalIntervalRight);
    //     clearInterval(globalIntervalLeft);
    //   }, 2000);
    // });
    //
    // $(window).focus(function() {
    //   console.log('focus');
    //   setInterval(function() {
    //     $(".pixel[attry='" + (Math.floor(Math.random() * pixelHeight) + 1) + "'][attrx='" + (Math.floor(Math.random() * pixelWidth) + 1) + "']").trigger('click');
    //   }, 2000);
    // });
	}

	var publicAPI = {
		init: init
	}

	return publicAPI;
})();
