const Control = require("../Controllers/control");

class View {

    static helpView(){
        console.log(" $ node todo.js \n $ node todo.js help \n $ node todo.js list \n $ node todo.js add <task_content> \n $ node todo.js findById <task_id> \n $ node todo.js delete <task_id> \n $ node todo.js complete <task_id> \n $ node todo.js uncomplete <task_id>");
        console.log(` $ node todo.js list:created asc|desc \n $ node todo.js list:completed asc|desc \n $ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>\n $ node todo.js filter:<tag_name>`);
    }

    static taskView(data){
        for (let i=0; i<data.length; i++){
            console.log(`${data[i]["id"]}. ${data[i]["task"]}`)
        }
    }

    static addTaskView(task){
        console.log("Added "+task+" to your TODO list")
    }

    static delTaskView(task){
        console.log("deleted "+task+" from your TODO list")
    }

    static completeTaskView(data){
        let x = " ";
        for (let i=0; i<data.length; i++){
            if (data[i]["status"]==="complete"){
                x ="X";
            } else {
                x = " ";
            }
            let d = new Date(data[i]["created"]);
            let dateCreate = d.toDateString()
            console.log(`[${x}] ${data[i]["id"]}. ${data[i]["task"]} created: ${dateCreate} `);
        }
    }

    static completeOnly(data){
        let x = " ";
        for (let i=0; i<data.length; i++){
            if (data[i]["status"]==="complete"){
                x ="X";
            } else {
                x = " ";
            }
            let d = new Date(data[i]["completed"]);
            let dateCom = d.toDateString();
            console.log(`[${x}] ${data[i]["id"]}. ${data[i]["task"]} completed: ${dateCom} `);
        }
    }

    static tag(task, tag){
        console.log(`Tagged task ${task} with tags: ${tag}`);
    }
}

module.exports = View;