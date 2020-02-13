const fs = require("fs");

const Control = require("../Controllers/control");

class Model{
    constructor(id,task, status, created, completed, tag){
        this.id = id;
        this.task = task;
        this.status = status;
        this.created = created;
        this.completed = completed;
        this.tag = tag;

    }

    static readList(){
        let listData = fs.readFileSync("./data.json", "utf8");
        let listJson = JSON.parse(listData);
        let instance = [];
        for (let i=0; i<listJson.length; i++){ //membuat instance
            let newInstance = new Model(listJson[i]["id"], listJson[i]["task"], listJson[i]["status"], listJson[i]["created"], listJson[i]["completed"], listJson[i]["tag"]);
            instance.push(newInstance);
        }
        return instance;
    }


    static updateList(data){
        let dataJson = JSON.stringify(data,null,4);
        fs.writeFileSync("./data.json",dataJson);
    }

    static addList(task,date){
        let existingInstance = Model.readList();
        let newId = existingInstance.length+1;
        let status = null;
        let created = new Date();
        let tag = null;
        let newInstance = new Model(newId, task, status, created, date, tag);
        existingInstance.push(newInstance);
        Model.updateList(existingInstance);
        return true;
    }

    static deleteList(id){
        let existingInstance = Model.readList();
        let updateInstance = [];
        let dataDel = "";
        let j=0;
        for (let i=0; i<existingInstance.length; i++){
            if(String(existingInstance[i]["id"])!==String(id)){
                existingInstance[i]["id"]=j+1;
                console.log(existingInstance[i]);
                updateInstance.push(existingInstance[i]);
                j++;
            } else {
                dataDel = existingInstance[i];
                console.log(dataDel)
            }
        }
        Model.updateList(updateInstance);
        return dataDel;
    }

    static findById(id){
        let showTask = [];
        let data = Model.readList();
        for (let i=0; i<data.length; i++){
            if (String(data[i]["id"])===String(id)){
                showTask.push(data[i]);
            }
        }
        return showTask;
    }

    static completetask(id, date){
        let data = Model.readList();
        console.log(data)
        for (let i=0; i<data.length; i++){
            if (String(data[i]["id"])===String(id)){
                data[i]["status"] = "complete";
                data[i]["created"] = date;
            } else {
                data[i]["status"] = data[i]["status"];
                data[i]["created"] = data[i]["created"];
            }
        }
        Model.updateList(data);
        return data;      
    }

    static unCompletetask(id){
        let data = Model.readList();
        for (let i=0; i<data.length; i++){
            if (String(data[i]["id"])===String(id)){
                data[i]["status"] = "false";
            } else {
                data[i]["status"] = data[i]["status"];
            }
        }
        Model.updateList(data);
        return data;
    }

    static created(sort){
        let temp = "";
        let data = Model.readList();
        if (sort === "asc"){
            for (let x =1; x>0; x++){
                let sort = true;
                for (let i=1; i<data.length; i++){
                    let c1 = new Date((data[i]["created"]));
                    let c0 = new Date((data[i-1]["created"]));
                    if (c1 > c0){
                        temp = data[i-1];
                        data[i-1]=data[i];
                        data[i]=temp;
                        sort = false;
                    }
                }
                if (sort === true){
                    break;
                }
            }
        } else {
            for (let x =1; x>0; x++){
            let sort = true;
                for (let i=1; i<data.length; i++){
                    let c1 = new Date((data[i]["created"]));
                    let c0 = new Date((data[i-1]["created"]));
                    if (c1 < c0){
                        temp = data[i-1];
                        data[i-1]=data[i];
                        data[i]=temp;
                        sort = false;
                    }
                }
            if (sort === true){
                break;
                }
            }
        }
        return data;
    }

    static completeOnly(sort){
        let newArr = [];
        let data = Model.readList();
        for (let i=0; i<data.length; i++){
            if (data[i]["status"]==="complete"){
                newArr.push(data[i]);
            }
        }
        if (sort === "asc"){
            for (let x =1; x>0; x++){
                let sort = true;
                    for (let i=1; i<newArr.length; i++){
                        let c1 = new Date((newArr[i]["completed"]));
                        let c0 = new Date((newArr[i-1]["completed"]));
                        if (c1 < c0){
                            let temp = newArr[i-1];
                            newArr[i-1]=newArr[i];
                            newArr[i]=temp;
                            sort = false;
                        }
                    }
                    if (sort === true){
                        break;
                    }
            }
        } else {
            for (let x =1; x>0; x++){
            let sort = true;
                for (let i=1; i<newArr.length; i++){
                    let c1 = new Date((newArr[i]["completed"]));
                    let c0 = new Date((newArr[i-1]["completed"]));
                    if (c1 > c0){
                        let temp = newArr[i-1];
                        newArr[i-1]=newArr[i];
                        newArr[i]=temp;
                        sort = false;
                    }
                }
                if (sort === true){
                    break;
                }
            }
        } 
        return newArr;
    }

    static outstandingOnly(sort){
        let newArr = [];
        let data = Model.readList();
        for (let i=0; i<data.length; i++){
            if (data[i]["status"]==="complete"){
                newArr.push(data[i]);
            }
        }
        if (sort === "asc"){
            for (let x =1; x>0; x++){
                let sort = true;
                    for (let i=1; i<newArr.length; i++){
                        let c1 = new Date((newArr[i]["completed"]));
                        let c0 = new Date((newArr[i-1]["completed"]));
                        if (c1 < c0){
                            let temp = newArr[i-1];
                            newArr[i-1]=newArr[i];
                            newArr[i]=temp;
                            sort = false;
                        }
                    }
                    if (sort === true){
                        break;
                    }
            }
        } else {
            for (let x =1; x>0; x++){
            let sort = true;
                for (let i=1; i<newArr.length; i++){
                    let c1 = new Date((newArr[i]["completed"]));
                    let c0 = new Date((newArr[i-1]["completed"]));
                    if (c1 > c0){
                        let temp = newArr[i-1];
                        newArr[i-1]=newArr[i];
                        newArr[i]=temp;
                        sort = false;
                    }
                }
                if (sort === true){
                    break;
                }
            }
        } 
        return newArr;
    }

    static tag(id, tag){
        let data = Model.readList();
        let task = "";
        for (let i=0; i<data.length; i++){
            if (String(i+1)===String(id)){
                data[i]["tag"]=tag;
                task = data[i]["task"];
            }
        }
        Model.updateList(data);
        return task;
    }
}

module.exports = Model;