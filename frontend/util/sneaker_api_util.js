export const fetchSneakers = () => (
    $.ajax({
        url: '/api/sneakers',
        method: 'GET'
    })
);

export const fetchSneaker = sneakerId => (
    $.ajax({
        url: `/api/sneakers/${sneakerId}`,
        method: 'GET'
    })
);

export const fetchSneakerReviews = sneakerId => (
    $.ajax({
        url: `/api/sneakers/${sneakerId}/reviews`,
        method: 'GET'
    })
)

export const deleteSneakerReview = (sneakerId, userId, reviewId) => (
    $.ajax({
        url: `/api/sneakers/${sneakerId}/reviews/${reviewId}`,
        method: 'DELETE'
    })
)

export const createSneakerReview = (review) => (
    $.ajax({
        url: `/api/sneakers/${review.sneakerId}/reviews`,
        method: 'POST',
        data: { review }
    })
)

export const updateSneakerReview = sneakerReview => (
    $.ajax({
        url: `/api/sneakers/${sneakerId}/reviews/${sneakerReview.id}`,
        method: 'PATCH',
        data: { sneakerReview }
    })
)