const User = require('../model/user')
const express = require('express')
const mongoose = require('mongoose')


const getUser = async (req,res) => {
        const data = await User.find({});

        res.status(200).json(data);

}

const postUser = async (req,res) => {
    try{
        const {
            name
        } = req.body;
    
        if(!name){
            return res.status(400).json('Name Required');
        }
    
        const rating = 0;
    
        const newUser = await User.create({
            name,
            points:rating
        })

        res.status(200).json(newUser);
    }
    catch(error){
        console.log("Error",error);
    }
}

const updateUser = async(req,res) => {
    const {id} = req.params;
    const {
        points
    } = req.body;
    try{
        const updateUser = await User.findByIdAndUpdate(id,
            {$inc : {points : points}},
            {new:true}
        );

        if(!updateUser){
            return res.status(404).json({message : 'User not Found'})
        }

        res.status(200).json(updateUser);


    }
    catch(error){
        res.status(500).json('NOt updated')
    }
}

module.exports = {
    getUser,
    postUser,
    updateUser
}