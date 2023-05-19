const { exec } = require('child_process');
 
const startServer = () => {
  const serverProcess = exec('npx lite-server');
 
  serverProcess.stdout.on('data', (data) => {
    console.log(data);
  });
 
  serverProcess.stderr.on('data', (data) => {
    console.error(data);
  });
 
  serverProcess.on('close', (code) => {
    console.log(`Server process exited with code ${code}`);
  });
};
 
startServer();