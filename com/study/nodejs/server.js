const express = require('express')
const app = express()

app.listen(8080, function() {
    console.log('listening on 8080');
});

app.get('/pet', function(req, 응답) {
    응답.send('hello. pet 페이지입니다');
});