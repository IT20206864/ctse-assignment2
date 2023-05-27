const Todo = require("../models/Todo");

const router = require("express").Router();

router.route("/create").post(async(req,res) => {
    const { title , description  } = req.body;
    const ischecked = false;
    const todoData = new Todo({
        title,
        description,
        isChecked,
    })

    await todoData.save().then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
}) 

router.route("/").get(async(req,res) => {
    await Todo.find().then((data) => {
        console.log(data);
        res.send(data);
    }).catch((err) => {
        console.log(err);
        res.send(err);
    });
});