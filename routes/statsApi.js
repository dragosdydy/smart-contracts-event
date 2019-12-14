var express = require('express');
var router = express.Router();
const axios = require('axios');
const dateFormat = require('dateformat');

function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}

/* GET home page. */
router.get('/', function(req, res, next) {
    var address = req.query.address;
    var funcName = req.query.function;
    var variable = req.query.variable;
    var label = req.query.label || req.query.function;
    var type = req.query.type;

    async function getFuncStats(address)
    {
        let response = await axios('https://api.bloxy.info/smart_contract/smart_contract_events?smart_contract_address='+address+'&chain=eth&key=ACCIXw7InJ806&format=structure');
        let data = await response;
        console.log('api', data.data)
        return data.data;
    }
    function getValues(data, funcName, variable) {

        let value = search(funcName, data)[variable];



        value = type === 'date' ? dateFormat(value, "dd-mm-yyyy, h:MM:ss TT") : value;
        value = type === 'currency' ? value + " ETH": value;
        res.json({
            address: address,
            data: {
                functionName: funcName,
                variable: variable,
                label: label,
                value: value
            }
        });
    }

    getFuncStats(address).then(data => getValues(data, funcName, variable))

});

module.exports = router;
