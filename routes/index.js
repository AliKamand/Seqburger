var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res, next) {
    var arrayForTemplate = [];
    var arrayForTemplateDevoured = [];

    burger.findAll({
            where: {
                devoured: false
            }
        })
        .then(function(result) {
            console.log("Result Length" + result.length);

            for (var i = 0; i < result.length; i++) {
                arrayForTemplate.push(result[i]['dataValues']);
                console.log(arrayForTemplate);
            }
            console.log(arrayForTemplate);


            burger.findAll({
                    where: {
                        devoured: true
                    }
                })
                .then(function(result) {
                    console.log("Result Length" + result.length);

                    for (var i = 0; i < result.length; i++) {
                        arrayForTemplateDevoured.push(result[i]['dataValues']);
                        console.log(arrayForTemplateDevoured);
                    }
                    console.log(arrayForTemplateDevoured);
                    res.render('index', {
                        title: 'Eat Da Burger',
                        burgersToDevour: arrayForTemplate,
                        burgersDevoured: arrayForTemplateDevoured
                    });
                });

        });




});


router.post('/inputBurger', function(req, res) {

    var burgerName = req.body.burgerFormInput;
    console.log(burgerName);

    burger.create({
        burger_name: burgerName,
        devoured: false
    }, {

    });
    res.redirect('back');

});


router.post('/handleDevour', function(req, res) {
    console.log(req.body);
    var idToDevour = req.body.id;
    var arrayForTemplate = [];
    var arrayForTemplateDevoured = [];

    burger.update({
        devoured: true
    }, {
        where: {
            id: idToDevour
        }
    }).then(function() {

        burger.findAll({
                where: {
                    devoured: false
                }
            })
            .then(function(result) {
                console.log("Result Length" + result.length);

                for (var i = 0; i < result.length; i++) {
                    arrayForTemplate.push(result[i]['dataValues']);
                    console.log(arrayForTemplate);
                }
                console.log(arrayForTemplate);


                burger.findAll({
                        where: {
                            devoured: true
                        }
                    })
                    .then(function(result) {
                        console.log("Result Length" + result.length);

                        for (var i = 0; i < result.length; i++) {
                            arrayForTemplateDevoured.push(result[i]['dataValues']);
                            console.log(arrayForTemplateDevoured);
                        }
                        console.log(arrayForTemplateDevoured);

                    });

            });
    });

    res.render('index', {
        title: 'Eat Da Burger',
        burgersToDevour: arrayForTemplate,
        burgersDevoured: arrayForTemplateDevoured
    });
});


module.exports = router;