const byteSize = (str) => {
  // write your code here
	const byteSize = str => new Blob([str]).size;
return result = byteSize(str); 
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
