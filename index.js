// Write your solution in this file!


let employee = {
  name: "basic",
  streetAddress: "unknown",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
  const newObj = { ...employee };
  newObj[key] = value;
  return newObj;
}

function deleteFromEmployeeByKey(employees, key){
  const newObj = {...employees} 
  delete newObj[key]
  return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   employee[key] = value;
   return employee;
}

function destructivelyDeleteFromEmployeeByKey(e, key)
{
  Reflect.deleteProperty(e, key);
  return e;
}

