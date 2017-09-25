
import {CONFIG} from './constants';
import {
  isBlank,
  internalRandomCode,
  checkConfig,
  noop,
} from './utilities';

export class Gcontacts {
  constructor(props) {
    // every response from Google comes as an array.
    this.response = [];
    this.params = props.params;
    this.callback = noop;
  }

  show() {
    return this.params;
  }

  login(cb, href) {
    if (!token_data.status()) {
      this.cb = cb;
      if (parameters.checkConfig())
      window.open(
        auth(href),
        '_blank',
        [
          'toolbar=no',
          'location= ' + (window.opera ? 'no' : 'yes'),
          'directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no',
          'width=' + window.screen.width / 2,
          'height=' + window.screen.height / 2
        ].join()
      );
  } else {
    cb();
  }
}

  auth(href) {
    href = href || CONFIG['url'];
    let url = [];

    for (let property in CONFIG) {
      let value = CONFIG[property];

      if (property !== 'url' && typeof(value) === 'string') {
        url.push(
          `${encodeURIComponent(property)}=${encodeURIComponent(CONFIG[property])}`
        );
      }
    }

    url = url.concat(parameters.encoded()).join('&');

    return `${href}?${url}`;
  }
}
