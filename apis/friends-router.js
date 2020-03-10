const express = require('express')

// instantiating a piece of express app
const router = express.Router()

const friends = ['Alison', 'Zak', 'Rufai']

// invoke .get etc on the router we just created
router.get('/api/friends', (req, res) => {

    // res.json()
    // res.send()
    // res.end()

    res.status(200).json(friends)
})

router.post('/api/friends', (req, res) => {
    const { friend } = req.body
//  THE DIFFERENT WYS CLIENT CAN SEND INFO TO SERVER
    // const { headers } = req
    // const { params } = req
    // const { query } = req
    // console.log(query);
    friends.push(friend)
    res.status(201).json(friend)
})

module.exports = router
