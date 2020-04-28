const express = require('express');


function list(req,res,next){
  res.send('Aqui estaran los usuarios del sistema');
  //res.render('index', { title: 'mi app de video' });
}

//regresa un elemento get

function index(req,res,next){
  res.render('index', { title: 'mi app de video index' });
}

function create(req,res,next){
  res.render('index', { title: 'mi app de video create ' });
}

function update(req,res,next){
  res.render('index', { title: 'mi app de video update' });
}

function destroy(req,res,next){
  res.render('index', { title: 'mi app de video destroy' });
}


module.exports={
	list, index, create, update, destroy
	}
