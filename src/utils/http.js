import axios from 'axios';

// URL Main


// export const UrlMain = 'http://localhost:5000/api/v1'

// export const UrlMain = 'https://adhistahan-serve.vercel.app/api/v1'

// export const UrlMain = 'https://api.adhisthanavillas.com/api/v1'

export const UrlMain = 'https://portofolio-server-tau.vercel.app'

// Konfigurasi untuk server

export const http = axios.create({
  baseURL: `${UrlMain}`,
  withCredentials: true,
});

// Konfigurasi untuk Client 
// export const axiosClient = axios.create({
//   baseURL: 'http://localhost:3002',
//   withCredentials: true,
// });  

