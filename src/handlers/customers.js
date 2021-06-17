const express = require('express')
const router = express.Router({ mergeParams: true })
const { getCustomers } = require('../core/db')

router.get('/customers', async (req, res, next) => {
    const customers = await getCustomers()
    // print logs if needed
    // transform response if needed
    res.status(200).json({data: customers})
})

module.exports = router