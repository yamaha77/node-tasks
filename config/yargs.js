const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of the task to be make'
} 

const complete = {
    alias: 'c',
    default: true,
    desc: 'Mark as completed or pending a task'
}

const argv = require('yargs')
                .command(
                    'create',
                    'Create an item the a task',
                    {
                        description
                    }
                )
                .command(
                    'update',
                    'Update the status of a task',
                    {
                        description,
                        complete
                    }
                )
                .command(
                    'list',
                    'Listing all tasks',
                    {}
                )
                .command(
                    'delete',
                    'Remove a task',
                    {
                        description
                    }
                )
                .help()
                .argv;

module.exports = { argv }