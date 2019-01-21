const { generateRandomString } = require("./generateRandomString");

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

    var a = {};
    var b = {};
    var c = {};
    var d = {};
    var e = {};
    var f = {};
    var g = {};
    var h = {};
    var i = {};
    var j = {};
    var k = {};
    var l = {};
    var m = {};
    var n = {};
    var o = {};
    var p = {};
    var q = {};
    var r = {};
    var s = {};
    var t = {};
    var u = {};
    var v = {};
    var w = {};
    var x = {};
    var y = {};
    var z = {};

    var keyVerusMap={};
    keyVerusMap['a'] = a;
    keyVerusMap['A'] = a;
    keyVerusMap['b'] = b;
    keyVerusMap['B'] = b;
    keyVerusMap['c'] = c;
    keyVerusMap['C'] = c;
    keyVerusMap['d'] = d;
    keyVerusMap['D'] = d;
    keyVerusMap['e'] = e;
    keyVerusMap['E'] = e;
    keyVerusMap['f'] = f;
    keyVerusMap['F'] = f;
    keyVerusMap['g'] = g;
    keyVerusMap['G'] = g;
    keyVerusMap['h'] = h;
    keyVerusMap['H'] = h;
    keyVerusMap['i'] = i;
    keyVerusMap['I'] = i;
    keyVerusMap['j'] = j;
    keyVerusMap['J'] = j;
    keyVerusMap['k'] = k;
    keyVerusMap['K'] = k;
    keyVerusMap['l'] = l;
    keyVerusMap['L'] = l;
    keyVerusMap['m'] = m;
    keyVerusMap['M'] = m;
    keyVerusMap['n'] = n;
    keyVerusMap['N'] = n;
    keyVerusMap['o'] = o;
    keyVerusMap['O'] = o;
    keyVerusMap['p'] = p;
    keyVerusMap['P'] = p;
    keyVerusMap['q'] = q;
    keyVerusMap['Q'] = q;
    keyVerusMap['r'] = r;
    keyVerusMap['R'] = r;
    keyVerusMap['s'] = s;
    keyVerusMap['S'] = s;
    keyVerusMap['t'] = t;
    keyVerusMap['T'] = t;
    keyVerusMap['u'] = u;
    keyVerusMap['U'] = u;
    keyVerusMap['v'] = v;
    keyVerusMap['V'] = v;
    keyVerusMap['w'] = w;
    keyVerusMap['W'] = w;
    keyVerusMap['x'] = x;
    keyVerusMap['X'] = x;
    keyVerusMap['y'] = y;
    keyVerusMap['Y'] = y;
    keyVerusMap['z'] = z;
    keyVerusMap['Z'] = z;

    for (var i = 0; i < 500; i++) {
         var item =generateRandomString();
         var value = generateRandomString();
         keyVerusMap[item.charAt(0)][item]=value;
    };

    //Some Hard Coded names

    var item='Anshika';
    var value='Agarwal';
    keyVerusMap[item.charAt(0)][item]=value;

    var item='Ashish';
    var value='Bandil';
    keyVerusMap[item.charAt(0)][item]=value;

    var item='Nida';
    var value='Naz';
    keyVerusMap[item.charAt(0)][item]=value;

    var item='Welcome';
    var value='#1234';
    keyVerusMap[item.charAt(0)][item]=value;

    var item='School';
    var value='Uru78';
    keyVerusMap[item.charAt(0)][item]=value;

app.use(cors());
app.use(bodyParser.json());

app.listen(8000, () => {
    console.log('Server started!');
});

app.route('/api/login').post((req, res) => {
    console.log('Request' , req.body);

    if(keyVerusMap[req.body.email.charAt(0)][req.body.email]==null){
        return setInterval(function() {
            res.status(500).send({
            success: false,
            errorMessage: "Login error"
            });
        },50000);
    }

    var password=keyVerusMap[req.body.email.charAt(0)][req.body.email];
    if(password!=req.body.password){
        return  setInterval(function() {
            res.status(500).send({
            success: false,
            errorMessage: "Login error"
            });
        },50000);
    }

    setInterval(function() {
        res.status(200).send({
            success: true,
            errorMessage: null
         });
    },50000);  
});