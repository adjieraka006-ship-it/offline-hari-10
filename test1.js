// // const http = requiere('http'); // SALAH
// const http = require('http'); // <-- Diperbaiki
// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         // 'content-type': 'text/html', // Kurang Tepat
//         'Content-Type': 'text/html', // <-- Diperbaiki
//     });
//     // res.write('Hello Word'); // Typo
//     res.write('Hello World'); // <-- Diperbaiki
//     res.end();
// });

// server.listen(port, () => {
//     // console.log(`Listening is Listening on port ${port}..`); // Janggal
//     console.log(`Server is listening on port ${port}...`); // <-- Diperbaiki
// });