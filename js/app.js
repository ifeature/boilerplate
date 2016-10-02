'use strict';

import './../style.less';
import 'babel-polyfill';
import $ from 'jquery';

$('#btn').on('click', function(e) {
  console.log('clicked');
});
