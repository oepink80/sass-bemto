'use strict';

import $ from 'jquery';

export default class General{
  constructor() {
    this.name = 'general';
    console.log('%s module', this.name.toLowerCase());
  }
}