const router = require('express').Router();

const employeeData = require('../model/employee')



//TODO: get data from db  using api '/api/employeelist'
router.get('/', async (req, res) => {
    try {
        console.log("GET REQUEST PROCESSING");
        let data = await employeeData.find({});
        console.log(data)
        console.log("GET REQUEST SUCCESSFULL")
        res.json(data);
    } catch (error) {
        console.log("ERROR IN READING DATA")
        res.status(500).json(error)
    }
})


//TODO: get single data from db  using api '/api/employeelist/:id'

router.get('/:id', async (req, res) => {
    try {
        console.log("GET REQUEST PROCESSING OF SINGLE DATA");
        let singledata = await employeeData.findById(req.params.id)
        console.log(singledata)
        console.log("GET REQUEST SUCCESSFULL")
        res.json(singledata)

    } catch (error) {
        console.log('ERROR IN READING DATA')
        res.status(500).json({ error: 'ERROR IN READING DATA' })
    }
})



//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}


router.post('/', async (req, res) => {
    try {
        console.log("POST REQUEST PROCESSING");
        let item = req.body
        const saveddata = await employeeData(item)
        saveddata.save();
        console.log(saveddata)
        console.log("POSTING DATA SUCCESSFULL")
        res.json("POSTING DATA SUCCESSFULL")
    } catch (error) {
        console.log("ERROR IN POSTING DATA")
        res.status(500).json(error)
    }
})



//TODO: delete a employee data from db by using api '/api/employeelist/:id'

router.delete('/:id', async (req, res) => {
    try {
        console.log("DELETE REQUEST PROCESSING");
        let id = req.params.id
        let deleteddata = { $set: req.body }
        const deleted = await employeeData.findByIdAndDelete(id)
        console.log(deleted)
        console.log("DELETE DATA SUCCESSFULLY")
        res.json(deleted)
    } catch (error) {
        console.log("ERROR IN DELETING DATA")
        res.status(500).json(error)
    }
})



//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

router.put('/', async (req, res) => {
    try {
        console.log("PUT REQUEST PROCESSING");
        let updateddata = { $set: req.body }
        let updated = await employeeData.findByIdAndUpdate(req.body._id, updateddata);

        console.log(updated)
        console.log("UPDATED SUCCESSFULLY")
        res.json(updated);

    } catch (error) {
        console.log("ERROR IN UPDATING DATA");
        res.status(500).json(error)
    }
})




module.exports = router