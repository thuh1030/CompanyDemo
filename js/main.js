$(document).ready(function() {

  $("#searchButton").on("click", function(e) {
    e.preventDefault();
    var zipSearch = $("#search").val();


    if (zipcodeOk(zipSearch)) {
      //clear searchHelp
      $("#searchHelp").html('');
      $.ajax({
        url: "https://api.mlab.com/api/1/databases/companies/collections/agencies?apiKey=CZzhxMdGpWiQxQyrxwmAmnqxqmCG3EXv"
      }).done(function(data) {
        var output = '<div class="container">';
        var countResult = 0;
        $.each(data, function(key, data) {
          if (data.address.zipcode == zipSearch) {
            countResult += 1;
            output += '<div class="well">';
            output += '<a class ="searchTitle" href=" ' + data.link + '">' + countResult + ". " + data.agency + '</a>';
            output += '<p class ="searchLink">' + data.link + '</p>';
            output += '<p>' + data.address.street + ', ' + data.address.city + ', ' + data.address.state + ' ' + data.address.zipcode + '</p>';
            output += '<p>' + data.description + '</p>';
            output += '</div>';
          }
        });
        output += '</div>';
        var numOfResult = "<div class='container'>" + countResult + " result(s) found for " + zipSearch + "</div>";
        $("#resultHelp").html(numOfResult);
        $("#searchResult").html(output);

      });

    } else {
      validateInput(zipcodeOk(zipSearch), "#searchHelp", "Please enter a valid zip code. Ex: 90017");
    }
  });
});
