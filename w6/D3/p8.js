// Allocating buffers
const emptyBuffer = Buffer.alloc(8);
console.log("contents of",emptyBuffer);
console.log("allocated buffer bytes",[...emptyBuffer]);
const textBuffer = Buffer.from([65,66,67]);
console.log("buffer from byte array",textBuffer);
// Buffer.write() writes text into buffer
const bufferSize = Buffer.alloc(20);
const bytesWritten = bufferSize.write("hello");
console.log("bytes writen: ",bytesWritten);

// subarray
const firstSlice = bufferSize.subarray(3,6);
console.log("first slice as bytes",[...firstSlice]);
// decode the bytes into text: toString()
console.log("Decode firstslice of buffer:",firstSlice.toString("utf8"));


