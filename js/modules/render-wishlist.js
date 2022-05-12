export function renderWishlist(wishlist){
    const wishlistContainer = document.getElementById('wishlist-container')

    if(wishlist.length === 0){
        const text = document.createElement('p');
		text.classList.add('wishlist__empty');
		text.textContent = 'Twoja lista życzeń jest pusta!';
		wishlistContainer.append(text);
    }
    else {
        console.log(wishlist.length);
    }

}