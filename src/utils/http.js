import axios from 'axios';

// URL Main


// export const UrlMain = 'http://localhost:5000/api/v1'

// export const UrlMain = 'https://adhistahan-serve.vercel.app/api/v1'

// export const UrlMain = 'https://api.adhisthanavillas.com/api/v1'

export const UrlMain = 'https://server-startup.vercel.app/api/v1'

export const UrlMain2 = 'https://portofolio-server-tau.vercel.app/api/v1'

// Konfigurasi untuk server

export const http = axios.create({
  baseURL: `${UrlMain}`,
  withCredentials: true,
});

export const http2 = axios.create({
  baseURL: `${UrlMain2}`,
  withCredentials: true,
});

// Konfigurasi untuk Client 
// export const axiosClient = axios.create({
//   baseURL: 'http://localhost:3002',
//   withCredentials: true,
// });  

