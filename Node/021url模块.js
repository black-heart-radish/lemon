const url = require('url')

// 传统的方法, 弃用

// const obj = url.parse('/pinglun?name=常思&message=何处合成愁%2C+离人心上秋')
// console.log(obj);

// Url {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: '?name=常思&message=何处合成愁%2C+离人心上秋',
//   query: 'name=常思&message=何处合成愁%2C+离人心上秋',
//   pathname: '/pinglun',
//   path: '/pinglun?name=常思&message=何处合成愁%2C+离人心上秋',
//   href: '/pinglun?name=常思&message=何处合成愁%2C+离人心上秋'
// }

// 第二个参数为 true 可以将 query 转成对象
const obj = url.parse('/pinglun?name=常思&message=何处合成愁%2C+离人心上秋',true)
console.log(obj.pathname);

// Url {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: '?name=常思&message=何处合成愁%2C+离人心上秋',
//   query: [Object: null prototype] { name: '常思', message: '何处合成愁, 离人心上秋' },
//   pathname: '/pinglun',
//   path: '/pinglun?name=常思&message=何处合成愁%2C+离人心上秋',
//   href: '/pinglun?name=常思&message=何处合成愁%2C+离人心上秋'
// }

// 现在的方法, 真香

// const myUrl = new URL('/pinglun?name=常思&message=何处合成愁%2C+离人心上秋', 'http://127.0.0.1:3000/')
// console.log(myUrl);

// URL {
//   href: 'http://127.0.0.1:3000/pinglun?name=%E5%B8%B8%E6%80%9D&message=%E4%BD%95%E5%A4%84%E5%90%88%E6%88%90%E6%84%81%2C+%E7%A6%BB%E4%BA%BA%E5%BF%83%E4%B8%8A%E7%A7%8B',
//   origin: 'http://127.0.0.1:3000',
//   protocol: 'http:',
//   username: '',
//   password: '',
//   host: '127.0.0.1:3000',
//   hostname: '127.0.0.1',
//   port: '3000',
//   pathname: '/pinglun',
//   search: '?name=%E5%B8%B8%E6%80%9D&message=%E4%BD%95%E5%A4%84%E5%90%88%E6%88%90%E6%84%81%2C+%E7%A6%BB%E4%BA%BA%E5%BF%83%E4%B8%8A%E7%A7%8B',
//   searchParams: URLSearchParams { 'name' => '常思', 'message' => '何处合成愁, 离人心上秋' },
//   hash: ''
// }

// 里面的 searchParams 是一个 map 数据结构, 可以通过 get() 方法获取

// const searchParams = myUrl.searchParams
// console.log(searchParams.get('name'), searchParams.get('message'));
