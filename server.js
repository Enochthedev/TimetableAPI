const http = require('http');
const app = require('./src/app');
const packageJson = require('./package.json');
const { exec } = require('child_process');

const requiredDependencies = Object.keys(packageJson.dependencies);

// Check if all required dependencies are installed
exec('npm ls --depth=0 --json', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error checking dependencies: ${error.message}`);
        process.exit(1);
    }

    const installedDependencies = Object.keys(JSON.parse(stdout).dependencies);

    const missingDependencies = requiredDependencies.filter((dependency) => !installedDependencies.includes(dependency));

    if (missingDependencies.length > 0) {
        console.error(`Missing dependencies: ${missingDependencies.join(', ')}`);
        console.error(`Please install the missing dependencies by running 'npm install' before starting the server.`);
        process.exit(1);
    }

    // Start the server
    const port = process.env.PORT || 3000;

    const server = http.createServer(app);

    server.listen(port, () => {
        console.log('All dependencies installed successfully')
        console.log('-'.repeat(80) + '\n')
        console.log('Server starting...')
        console.log('Server started');
        console.log('Server name: ' + packageJson.name);
        console.log('Server version: ' + packageJson.version);
        console.log('Server is running on port ' + port);
        console.log('http://localhost:' + port);
    });
});
