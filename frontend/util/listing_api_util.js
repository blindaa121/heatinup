export const fetchListings = (sneakerId) => (
    $.ajax({
        url: `/api/sneakers/${sneakerId}/listings`,
        method: 'GET'
    })
);

export const fetchListing = (sneakerId, listingId) => (
    $.ajax({
        url: `/api/sneakers/${sneakerId}/listings/${listingId}`,
        method: 'GET'
    })
)