import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const ListItemsMarkup = createListItemsMarkup(galleryItems);

function createListItemsMarkup(items) {
  return items
    .map(
      item =>
        `<a class="gallery__item" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>`
    )
    .join('');
}

gallery.innerHTML = ListItemsMarkup;

let galleryOfPictures = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
