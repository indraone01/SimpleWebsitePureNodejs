//exportobject.js

var obj = {
        name: 'Andri',
        lastname: 'Indrawan',
        getFullName: () => {
            return obj.name + ' ' + obj.lastname;
        },
        getDate: () => {
            return {
                executionTime: new Date()
            }
        }
    }
    //console.log(obj.getFullName
    //console.log(obj.getDate().executionTime)

module.exports = obj;