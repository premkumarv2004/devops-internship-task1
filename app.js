
const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <h1>DevOps Internship Task 1</h1>
    <h2>Node.js Application Running Successfully!</h2>
    <p>Next: GitHub Actions CI/CD Pipeline</p>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
