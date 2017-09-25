// *global window :true*/

const CONFIG = {
  url: 'https://accounts.google.com/o/oauth2/auth',
  origin: window.orgin,
  redirect_uri: window.location.href,
  pagination: {
    default: {limit: 25},
    offset: 'start-index',
    limit: 'max-results',
  },
  group: {
    from: 'https://www.google.com/m8/feeds/groups/default/',
    projection: 'thin',
    alt: 'json',
  },
  contacts: {
    from: 'https://www.google.com/m8/feeds/contacts/default/thin',
    alt: 'json',
  },
};

const PARAMS = {
  params: {
    client_id: '',
    response_type: 'token',
    scope: '',
    inmediate: 'true'
  },
};

export {CONFIG, PARAMS};
