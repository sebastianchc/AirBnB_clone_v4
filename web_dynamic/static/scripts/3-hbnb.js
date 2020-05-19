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

  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify({}),
    success: function (result) {
      for (const place of result) {
        const article = ['<article>',
          '<div class="title_box">',
        `<h2>${place.name}</h2>`,
        `<div class="price_by_night">$ ${place.price_by_night}</div>`,
        '</div>',
        '<div class="information">',
        `<div class="max_guest">${place.max_guest} Guest(s)</div>`,
        `<div class="number_rooms">${place.number_rooms} Bedroom(s)</div>`,
        `<div class="number_bathrooms">${place.number_bathrooms} Bathroom(s)</div>`,
        '</div>',
        '<div class="description">',
        `${place.description}`,
        '</div>',
        '</article>'];
        $('section.places').append(article.join(''));
      }
    },
    error: function (error) {
      console.log(error);
    }
  });
}
