const salesViewRouter = require('./sales-view');
const salesPdfRouter = require('./sales-pdf');

function configRoute(app) {
  app.use('/sales', salesViewRouter);
  app.use('/sales/pdf', salesPdfRouter);
  return app;
}

module.exports = configRoute;
