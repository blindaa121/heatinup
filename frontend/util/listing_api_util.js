const fetchListings = (sneakerId) => {
    $.ajax({
        url: `/api/sneakers/${sneakerId}/listings`,
        type: 'GET'
    })
}
