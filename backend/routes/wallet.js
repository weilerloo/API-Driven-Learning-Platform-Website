const express = require('express')
const router = express.Router()
const { auth } = require('../middleware/auth');
const { topUpWallet, enrollWithWallet, getWalletBalance} = require('../controllers/wallet')

// POST /api/wallet/topup
router.post('/topup', auth, topUpWallet)

// POST /api/wallet/enroll
router.post('/enroll', auth, enrollWithWallet)

// POST /api/wallet/getBalance
router.post('/getBalance', auth, getWalletBalance)

module.exports = router
