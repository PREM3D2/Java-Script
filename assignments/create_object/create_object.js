function CreateObject(arr) {
    // Write your code her
    var objAssign = {};
    var i = 0;
    var temp;
    function cb(e){
        if (i%2 === 0){
            temp = e;
        }else{
            objAssign[temp] = e;
        }
        i = i + 1;
    }
    arr.forEach(cb);
    return objAssign
}
module.exports = CreateObject;