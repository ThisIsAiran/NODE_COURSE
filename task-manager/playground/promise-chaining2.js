require('../src/db/mongoose.js')
const Task = require('../src/models/task.js')

// Task.findByIdAndRemove('5e119847d14df62df1fba0b0').then((task)=>{
// 	console.log(task)
// 	return Task.countDocuments({"completed" : false})
// }).then((result)=>{
// 	console.log(result)
// }).catch((e)=>{
// 	console.log(e)
// })

const deleteTaskAndCount = async (id)=>{
	const deleteTask = await Task.findByIdAndRemove(id)
	const countInCompletedTasks = await Task.countDocuments({"completed":false})
	return countInCompletedTasks
}

deleteTaskAndCount('5e1198990259eb2e2225cd7b').then((count)=>{
	console.log(count)
}).catch((e)=>{
	console.log(e)
})