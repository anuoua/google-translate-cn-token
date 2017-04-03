# google-translate-cn-token

generate google translate request token

fork from [google-translate-token](https://github.com/anuoua/google-translate-token)

just modify request url. add a parameter to specify domain name

## Install

```
npm install --save google-translate-cn-token
```

## Usage

``` js
const token = require('google-translate-cn-token');

token.get('Hello').then(console.log);
token.get('Hello', 'cn').then(console.log);
//=> { name: 'tk', value: '159402.284291' }
```

## License

MIT