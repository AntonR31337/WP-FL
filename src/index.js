import("./styles/style.scss");

import { drawGalleryItem } from './item.js'
import items from './items.js'

const galleryRootElement = document.getElementById('gallery');

console.log(items);

items.map(item => galleryRootElement.appendChild(drawGalleryItem(item)));