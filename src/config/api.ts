import { environment} from '../environments/environment';


export const baseUrl = environment.production ? 'https://my-json-server.typicode.com' : 'https://my-json-server.typicode.com/meshramsaroj/mockJson';
export const productUrl = baseUrl + '/products';
export const cartUrl = baseUrl + '/cart';
export const wishlistUrl = baseUrl + '/wishlist';