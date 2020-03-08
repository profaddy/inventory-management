var Service = require('node-windows').Service;
 
// Create a new service object
var svc = new Service({
  name:'inventory-node-server',
  description: 'This is inventory management node server',
  script: 'E:\\inventory-management\\server\\server.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
});
// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});
 
svc.install();
