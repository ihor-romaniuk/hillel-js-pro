'use strict';

let $searchForm = $('#search-form');

$searchForm.on('submit', function (e) {
    e.preventDefault();

    let query = $(this).find('[name="search-term"]').val().replace(/\s/g, '+');
    console.log(query);
    getBooks(query);
});

function getBooks(query) {
    let url = 'https://www.googleapis.com/books/v1/volumes';

    $.ajax({
        url,    // url: url
        method: 'GET',
        data: `q=${query}`,
    }).done((response) => {
        console.log(response);
    }).fail((error) => {
        console.log(error);
    })
}
