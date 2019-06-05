function searchArtist() {
  $("li").remove();

  var urlWithParam = "https://musicbrainz.org/ws/2/artist?query=".concat($("#artistName").val());
  $.ajax({
    method: "GET",
    url: urlWithParam,
    dataType: "json",
  }).done(function (msg) {
      for(var item of msg.artists) {
        var node = $("<li>"+JSON.stringify(item.name).substring(1, item.name.length + 1)+"</li>");
        $("#list").append(node);
      };
    }).fail(function () {
      console.error('An error has occurred');
    });

    $("#artistName").val("");
}
