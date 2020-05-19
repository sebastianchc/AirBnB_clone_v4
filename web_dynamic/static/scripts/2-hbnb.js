window.onload = function () {
  const amenityDict = {};
  $('INPUT#amenity_check').click(function () {
    if ($(this).prop('checked')) {
      amenityDict[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenityDict[$(this).attr('data-id')];
    }
    $('div.amenities h4').text(Object.values(amenityDict).join(', '));
  });
  const url = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(url, function(data) {
    if (data["status"] === "OK") {
      console.log(data["status"]);
      $("DIV#api_status").addClass("available");
    } else {
      $("DIV#api_status").removeClass("available");
    }
  });
};
