import { initNavbar } from './modules/navbar.js';
import { initModal } from './modules/modal.js';
import { initFilter } from './modules/filter.js';
import { initAnimations } from './modules/animations.js';
import './modules/forms.js'; 
import './modules/toast.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initModal();
  initFilter();
  initAnimations();
});