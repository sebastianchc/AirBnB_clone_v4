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
};
