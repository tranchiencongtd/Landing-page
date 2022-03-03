$('.list_video a').click(function (e) {
  e.preventDefault();

  $('#video_youtube').attr('src', this.href);
  $('.list_video a div div .video_active').removeClass('video_active');
  $(this).children().children().children().children().addClass('video_active');
});
