// // Writable Stream
// const fs = require("fs")

// const writableStream = fs.createWriteStream("output.txt");

// writableStream.write("Hello, this is a test  manish adtani.\n");
// writableStream.write("Writing another line.\n");

// writableStream.end(); // Stream close karna zaruri hai
// writableStream.on("finish", () => {
//     console.log("Finished writing to file");
// });






// // Readable Streams:
// const readableStream = fs.createReadStream("output.txt");

// readableStream.on("data", (chunk) => {
//     console.log("Chunk received:", chunk.toString());
// });

// readableStream.on("end", () => {
//     console.log("Stream ended.");
// });



// Duplex Streams:
// Jisme tum read aur write dono kar sakte ho.
// Example: TCP sockets.


// Transform Streams:
// const fs = require("fs");
// const zlib = require("zlib");

// const readable = fs.createReadStream("input.txt");
// const writable = fs.createWriteStream("manish.text");
// const gzip = zlib.createGzip();

// readable.pipe(gzip).pipe(writable);
// console.log("File compressed successfully!");



// basically zlib is used to compress the file ot http server.