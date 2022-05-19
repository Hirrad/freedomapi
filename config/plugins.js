// module.exports = ({ env })=>({
//   upload: {
//     provider: 'ftp-v2',
//     providerOptions: {
//       host: env('FTP_HOST'),
//       port: env('FTP_PORT'),
//       user: env('FTP_USER'),
//       password: env('FTP_PASSWORD'),
//       basePath: env('FTP_BASEPATH'),
//       baseUrl: env('FTP_BASEURL'),
//     },
//   },
// });
// module.exports = ({ env }) => ({
//   // ...
//   upload: {
//     config: {
//       provider: 'aws-s3',
//       providerOptions: {
//         accessKeyId: env('AWS_ACCESS_KEY_ID'),
//         secretAccessKey: env('AWS_ACCESS_SECRET'),
//         region: env('AWS_REGION'),
//         params: {
//           Bucket: env('AWS_BUCKET'),
//         },
//       },
//     },
//   },
//   // ...
// });
