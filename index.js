// Write your solution in this file!
const employee = {"name" : "default",
    "streetAddress" : "default"}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const employee = {...obj}
    employee[key]= value
    return employee
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}

function deleteFromEmployeeByKey(obj, key){
    const employee = {...obj}
    delete employee[key]
    return employee
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}
