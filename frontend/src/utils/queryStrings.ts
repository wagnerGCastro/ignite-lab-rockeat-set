type Obj = {
  name: string;
  profession: string;
};

const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Please check yout params');
  }
  return `${key}=${value}`;
};

export function queryString(obj: Obj) {
  return Object.entries(obj).map(keyValueToString).join('&');
}

export function parse(string: string) {
  return Object.fromEntries(
    string.split('&').map(item => {
      const [key] = item.split('=');
      let [value]: string[] | string | any = item.split('=');

      if (value.indexOf(',') > -1) {
        value = value.split(',');
      }

      return [key, value];
    }),
  );
}
