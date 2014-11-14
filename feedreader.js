$(document).on('pageinit', '#feedreader', function() {
    var url = 'http://api.themoviedb.org/3/',
        mode = 'search/movie?query=',
        movieName = '&query=' + encodeURI('Batman'),
        key = '&api_key=470fd2ec8853e25d2f8d86f685d2270e';

    $.ajax({
        url: url + mode + key + movieName,
        dataType: "jsonp",
        async: true,
        success: function(result) {
            ajax.parseJSONP(result);
        },
        error: function(request, error) {
            alert('Network error has occurred please try again!');
        }
    });
});

var ajax = {
    parseJSONP: function(result) {
        $.each(result.results, function(i, row) {
            console.log(JSON.stringify(row));
            $('#movie-list').append('<li><a href="https://www.themoviedb.org/movie/' + row.id + '" data-id="' + row.id + '"><img src="http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w185' + row.poster_path + '"/><h3>' + row.title + '</h3><p>' + row.vote_average + '/10</p></a></li>');
        });
        $('#movie-list').listview('refresh');
    }
}
