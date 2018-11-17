const express = require('express');
const app = express();

app.listen(2222, () => {
  console.log('Server started!');
});

app.route('/api/cats/:name').get((req, res) => {
  const requestedCatName = req.params['name'];
  res.send({
    name: requestedCatName
  });
});
