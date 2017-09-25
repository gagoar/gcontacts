
// *global setTimeout, setInterval :true*/
import {
  isBlank,
  internalRandomCode,
  checkConfig,
  encoded,
  noop,
} from './utilities';

export class Token {
  constructor(props) {
    this.access_token = null;
    this.expires_in = null;
    // we store the timeout based on the obtain token
    this.timeoutSession  = null;
    // callback stored when onLongin is triggered.
    this.callback = props.onLogin || noop ;
  }

  isSet() {
    return this.access_token && this.expires_in;
  }

  status() {
    return (
      this.valid &&
      (this.expire_date > new Date())
    );
  }
  invalidate() {
    // this would invalidate the token.
    this.state(false);
  }

  state(val) {
    this.valid = val;

    if (val) {
      let sec = Number(token_data.expires_in) * Number(1000);
      this.timeoutSession = setTimeout(this.invalidate.bind(this), sec);
      this.expire_date = new Date();
      this.expire_date.setHours(this.expire_date.getHours() + 1);
      this.callback();
      events.trigger(['login', 'success']);
      console.log(['token valid for:', this.expires_in, 'seconds', 'on:', Date()].join(' '));
    } else {
      events.trigger(['logout', 'success']);
      throw (['token expired on', Date()].join(' '));
    }
  }
}
