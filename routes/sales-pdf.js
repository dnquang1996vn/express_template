const express = require('express');
const { exportPdfFromUrl } = require('../utils/generatePDF');
const router = express.Router();

/* GET users listing. */
router.get('/report', function (req, res, next) {
  exportPdfFromUrl('http://localhost:3000/sales/report').then((pdfData) => {
    res.contentType('application/pdf');
    res.send(pdfData);
  });
});

module.exports = router;
