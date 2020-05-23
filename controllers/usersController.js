const express = require('express');
const User = require('../models/user');

function list(req,res,next){
  User.find().then(obj => res.status(200).json({
    message: 'Usuarios del sistema',
    objs: obj
  })).catch(err=> res.starus(500).json({
    message:'Error al caragar los usuarios del sistema',
    objs:err
  }));
}

//regresa un elemento get

function index(req,res,next){
  const id = req.params.id;
  User.findOne({"_id":id}).then(obj => res.status(200).json({
    message: `Usuario del sistema con id ${id}`,
    objs: obj
  })).catch(err=> res.starus(500).json({
    message:`Error al caragar el usuario del sistema con id=${id}`,
    objs:err
  }));
}

function create(req,res,next){
  let email = req.body.email;
  let name = req.body.name;
  let lastName = req.body.lastName;
  let password = req.body.password;

  let user = new User({
    _email:email,
    _name:name,
    _lastName:lastName,
    _password:password
  });
  user.save().then(obj=>res.status(200).json({
      message : 'usuario creado correctamente',
      objs: obj
    })).catch(err => res.status(500).json({
      message: 'no se pudo guardar el usuaio',
      objs: err
  }));
}

function update(req,res,next){
  res.render('index', { title: 'mi app de video update' });
}

function destroy(req,res,next){
  const id = req.params.id;
  User.remove({"_id":id}).then(obj => res.status(200).json({
    message: `Usuario del sistema con id ${id} ha sido eliminado`,
    objs: obj
  })).catch(err=> res.starus(500).json({
    message:`Error al eliminar el usuario del sistema con id=${id}`,
    objs:err
  }));

}


module.exports={
	list, index, create, update, destroy
	}
