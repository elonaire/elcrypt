//short program to create directory and generate random directory name.

const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');
class Job extends EventEmitter{};

let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let createFolder = ()=>{
	var job = new Job;

	job.on('done', ()=>{
		console.log(`Directory ${dirName} has been created.`);
	});

	var dirName = alpha[Math.floor(Math.random()*26)] + alpha[Math.floor(Math.random()*26)] + alpha[Math.floor(Math.random()*26)] + alpha[Math.floor(Math.random()*26)] + "-" + Math.floor(Math.random()*26) + Math.floor(Math.random()*26) + "-" + alpha[Math.floor(Math.random()*26)] + alpha[Math.floor(Math.random()*26)] + alpha[Math.floor(Math.random()*26)] + alpha[Math.floor(Math.random()*26)]+ "-" + Math.floor(Math.random()*26) + Math.floor(Math.random()*26);

	dirName.toString();

	fs.mkdir(path.join('./' + dirName), ()=>{
		job.emit('done');
	});
}	

module.exports.createFolder = createFolder;