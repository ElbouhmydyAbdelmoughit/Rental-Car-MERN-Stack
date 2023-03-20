const app = require('./app')
const { success } = require("consola");



app.listen(process.env.PORT || 2000, () => {
  success({ message: `app running in port ${process.env.PORT}`, badge: true });
});