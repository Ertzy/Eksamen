const visualScreen = require('../models/visualModel')

const getContent = async (req, res) =>{
    const contents = await visualScreen.find({})
    res.send(contents)
}

const getPosts = async (req, res) =>{
    try {
        const posts = await visualScreen.find().sort({_id:-1}).limit(10);
        res.json(posts);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}

const getOnePost = async (req, res) =>{
    try {
        const post = await visualScreen.aggregate([{ $sample:{ size:1 } }]);
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const downs = async (req, res) =>{
    const {content} = req.body
    const make = await visualScreen.create({value: content})
    console.log(req.body)
    res.status(200).send(make)

}

const delate = async (req, res) =>{
    const {id} = req.body
    const del = await visualScreen.deleteOne({_id: id})
    res.status(200).send(del)
}

module.exports = {
    downs,
    getContent,
    delate,
    getPosts,
    getOnePost

}

