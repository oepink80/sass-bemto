// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';


import General from './general';
import Header from '../_modules/header/header';

$(() => {
  console.log('Welcome to Yeogurt!');
  new General();
  new Header();
});
