require('../src/db/mongoose.js')
const User = require('../src/models/user.js')

// User.findByIdAndUpdate('5e11a48bb8f1ab32b9dda142',{ age: 20}).then((user)=>{
// 	console.log(user)
// 	return User.countDocuments({age:20})
// }).then((result)=>{
// 	console.log(result)
// }).catch((e)=>{
// 	console.log(e)
// })

const updateAgeAndCount = async (id, age)=>{
	const user = await User.findByIdAndUpdate(id, { age })
	const countUsers = await User.countDocuments({ age })
	return countUsers
}
updateAgeAndCount('5e118a9dc8370e2ac106492c', 16).then((count)=>{
	console.log(count)
}).catch((e)=>{
	console.log(e)
})