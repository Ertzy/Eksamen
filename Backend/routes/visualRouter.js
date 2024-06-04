const { Router } = require('express')
const router = Router()
const { downs, delate, getContent, getPosts, getOnePost } = require('../contollers/contentContoller')



router.get('/posts', getPosts);
router.get('/post', getOnePost);

router.post('/add', downs)
router.post('/delete', delate)


module.exports = router