
const View = require("../Views/view");
const Model = require("../Models/model");

class Control{
    

    static taskHelp(){
        View.helpView();
    }

    static taskList(){
        let listTask = Model.readList();
        View.taskView(listTask);
    }

    static addTask(task){
        let status = Model.addList(task);
        if (status === true){
            View.addTaskView(task);
        }
    }

    static findById(id){
        let dataById = Model.findById(id);
        View.taskView(dataById);
    }

    static deleteTask(id){
        let dataDel = Model.deleteList(id);
        let task = dataDel["task"];
        View.delTaskView(task);
    }

    static completeTask(id, completed){
        let dataComplete = Model.completetask(id, completed);
        View.completeTaskView(dataComplete);
    }
    
    static unCompleteTask(id){
        let dataUnComplete = Model.unCompletetask(id);
        View.completeTaskView(dataUnComplete);
    }

    static crated(sort){
        let dataCreated = Model.created(sort);
        View.completeTaskView(dataCreated);
    }

    static onlyComplete(sort){
        let completeOnly = Model.completeOnly(sort);
        View.completeOnly(completeOnly);
    }

    static onlyOutstanding(sort){
        let completeOnly = Model.outstandingOnly(sort);
        View.completeOnly(completeOnly);
    }

    static tag(id, tag){
        let task = Model.tag(id, tag);
        View.tag(task, tag);
    }
}

module.exports = Control;
