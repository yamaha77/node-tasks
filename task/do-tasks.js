const fs = require('fs');

let list_task = [];

const load = () => {
    try {
        list_task = require('../db/data.json');    
    } catch (error) {
        list_task = [];
    }
}

const save = () => {
    
    let data = JSON.stringify(list_task);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
        });
}

const create = (description) => {

    load();
    let task = {
        description,
        complete: false
    };
    list_task.push( task );
    save();
    return task;
}

const listTasks = () => {
    load();
    return list_task;
}

const update = (description, complete = true) => {
    load();
    let index = list_task.findIndex( task => task.description === description );
    if ( index >= 0 ) {
        list_task[index].complete = complete;
        save();
        return 'Task updated...!';
    } else {
        return 'Task not exist';
    }
}

const deleted = (description) => {
    load();
    let index = list_task.findIndex( task => task.description === description );
    if ( index >= 0 ) {
        list_task.splice(index, 1);
        save();
        return 'Task deleted..!';
    } else {
        return 'Task not exist';
    }    
};

module.exports = {
    create,
    listTasks,
    update,
    deleted
}