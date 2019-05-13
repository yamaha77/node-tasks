const colors = require('colors');

const { argv } = require('./config/yargs');
const Task = require('./task/do-tasks');

let commands = argv._[0];

switch(commands){
    case 'create':
        let task = Task.create( argv.description );
        console.log(task);
        break;
    case 'list':
        let tasks = Task.listTasks();
        for ( let item of tasks ) {
            console.log('===========Task=========='.green);
            console.log(`Description: ${item.description}`);
            console.log(`State: ${item.complete}`);
            console.log('========================='.green);
        } 
        break;
    case 'update':
        let updated = Task.update(argv.description, argv.complete);
        console.log(updated);
        break;
    case 'delete':
        let deleted = Task.deleted(argv.description);
        console.log(deleted);
        break;
    default:
        console.log('Command not found');
        break;
}