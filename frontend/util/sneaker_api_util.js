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


