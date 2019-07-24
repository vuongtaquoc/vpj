$(document).ready(function () {

  var _width = $(window).width();

  $(".navbar a, footer a[href='#myPage']").on('click', function (event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {

        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
  if (_width > 1366) {
    var _height = $(".timeline").height();
    var _height1 = $(".timeline .col-sm-4").height();
    var _h3 = _height - _height1;
    $(".timeline .col-sm-4").css({
      'margin-top': _h3 / 2
    })
  }
  if (_width > 767) {
    var _textWidth = $(".judging ul li:nth-child(5) .span-img").width();

    $(".judging ul li:nth-child(5) .span-text,.judging ul li:nth-child(4) .span-text,.judging ul li:nth-child(6) .span-text").css({
      right: _textWidth
    });
    $(".judging ul li:nth-child(1) .span-text,.judging ul li:nth-child(2) .span-text,.judging ul li:nth-child(3) .span-text").css({
      left: _textWidth
    });

  }
  if (_width > 1024) {
    var _htimeline = $("#timeline").height();

    $(".bg-bottom img").height(_htimeline * 2);
  }
})
