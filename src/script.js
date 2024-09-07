import Glide from '@glidejs/glide';
import L from 'leaflet';

document.addEventListener('DOMContentLoaded', () => {
  new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 2000,
  }).mount();

  const map = L.map('map').setView([51.505, -0.09], 13); 
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
});
