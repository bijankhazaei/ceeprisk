import express from "express";

const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/test-hi-test', (req, res, next) => {
    res.json({
        data: "Hi Its change from ts and you can see that in container after compiled"
    })
})

export default router;
