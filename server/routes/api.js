const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Image = require('../models/image');

const db = "mongodb://uservishwas:pwvishwas@ds123370.mlab.com:23370/image_data";
mongoose.Promise = global.Promise;
mongoose.connect(db, (err) => {
    if(err) {
        console.error(`Error! ${err}`);
    }
});

router.get('/images', (req, res) => {
    console.log('Get request for all images');
    Image.find({})
    .exec((err, images) => {
        if(err) {
            console.log('Error retrieving images');
        }else {
            res.json(images);
        }
    })
});


router.get('/images/:id', (req, res) => {
    console.log('Get request for single image');
    Image.findById(req.params.id)
    .exec((err, image) => {
        if(err) {
            console.log('Error retrieving image');
        }else {
            res.json(image);
        }
    })
});

router.post('/image', (req, res) => {
    console.log('Post an image');
    var newImage = new Image();
    newImage.title = req.body.title;
    newImage.url = req.body.url;
    newImage.description = req.body.description;
    newImage.save((err, insertedImage) => {
        if(err) {
            console.log('Error saving image');
        }else{
            res.json(insertedImage);
        }
    });
});

router.put('/image/:id', (req, res) => {
    console.log('Update an image');
    Image.findByIdAndUpdate(req.params.id,
    {
        $set:   {
                title: req.body.title,
                url: req.body.url,
                description: req.body.description
                }
    },
    {
        new: true
    },
    (err, updatedImage) => {
        if(err) {
            res.send('Error updating image');
        }else {
            res.json(updatedImage);
        }
    });
});

router.delete('/image/:id', (req, res) => {

    console.log('Deleting an image');
    Image.findByIdAndRemove(req.params.id, (err, deletedImage) => {
         if(err) {
             res.send('Error deleting image');
         }else {
             res.json(deletedImage);
         }
     });
});

module.exports = router;