export function getQueryParams(process){
    let data = process.argv;
    let passedArguments = data.splice(2, data.length-1);
    if(process.argv.length<=1){
        console.log("process.argv.length<=2 === true");
        process.exit(-1);
    }
    function buildParamObj(passedArgs){
        var asd = [];
        var infoObj = {};
        var test = passedArgs[0].split("=");
        console.log(test, "test");
        for(let i=0;i<passedArgs.length;i++){
            let temp = passedArgs[i].split("=");
            if(temp instanceof Array && temp.length === 2){
                infoObj[temp[0]] = temp[1];
            }else if(temp instanceof Array && temp.length === 1){
                infoObj[i] = temp[0];
            }
        }
        console.log(infoObj, "infoObj");
    }
    buildParamObj(passedArguments);
}

function reverse(str) {
    console.log("reverse");
}
function transform(str) {
    console.log("transform")
}
function outputFile(filePath) {
    console.log("outputFile");
}
function convertFromFile(filePath) {
    console.log("convertFromFile");
}
function convertToFile(filePath) {
    console.log("convertToFile");
}