const internalRandomCode = () => (
  'z' + Math.random().toString(36).substring(10).substring(0, 6)
);

const isBlank = (params = {}) => {
  for (var property in params) {
    if (params[property] === '') {
      return true
    };
  }
  return false;
};

const checkConfig = (params = {}) => {
  if (isBlank(params)) {
    throw new Error('parameters are different than we expect!');
  }
  return true;
};

const encoded = (params = {}) => {
  let url = [];

  for (let property in params) {
    url.push(`${encodeURIComponent(property)}=${encodeURIComponent(params[property])}`);
  };

  return url;
};

const noop = () => ({});

export {
  internalRandomCode,
  isBlank,
  checkConfig,
  encoded,
  noop
};
