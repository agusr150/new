const input = process.argv;

let parameter = input.slice(2);

let command = String(parameter[0]);
let addCommand = input.slice(3);

const Control = require("./Controllers/control")

switch (command){
	case "help": 
		Control.taskHelp();
		break;
	case "list":
		Control.taskList();
		break;
	case "add":
		let newTask = String(addCommand);
		let dateAdd = new Date();
		Control.addTask(addCommand, dateAdd);
		break;
	case "findById":
		let id = String(addCommand);
		Control.findById(id);
		break;
	case "delete":
		let idDel = String(addCommand);
		Control.deleteTask(idDel);
		break;
	case "complete":
		let idComplete = String(addCommand[0]);
		let dateComplete = new Date();
		if(addCommand.length>1){
			dateComplete = addCommand[1];
		}
		Control.completeTask(idComplete, dateComplete);
		break;
	case "uncomplete":
		let idUncom = String(addCommand);
		Control.unCompleteTask(idUncom);
		break;
	case "list:created":
		let sort = String(addCommand);
		Control.crated(sort);
		break;
	case "list:completed":
		let sortCom = String(addCommand);
		Control.onlyComplete(sortCom);
		break;
	case "list:outstanding":
		let sortCom = String(addCommand);
		Control.onlyOutstanding(sortCom);
		break;
	case "tag":
		let tagId = String(addCommand[0]);
		let tag = addCommand.slice(1);
		Control.tag(tagId, tag);
		break;
	case "filter":
		let filterTag = 

	default: 
		Control.taskHelp();
		break;
	
}

/*
$ node todo.js
$ node todo.js help
$ node todo.js list
$ node todo.js add <task_content>
$ node todo.js findById <task_id>
$ node todo.js delete <task_id>
$ node todo.js complete <task_id>
$ node todo.js uncomplete <task_id>
*/