const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const taskSchema =  new mongoose.Schema({
	description:{
			type: String,
			required:true,
			trim: true
	},
	completed:{
			type: Boolean,
			default: false,
	}
})
const task = mongoose.model('task',taskSchema)

module.exports = task