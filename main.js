var stringToHTML = function (str) {
	var dom = document.createElement('div');
	dom.innerHTML = str;
	return dom;
}

var get_csv = (num_people, fee_type) => {
    let s = `${num_people}_${fee_type}.csv`
    var fs = require("fs");
    var text = fs.readFileSync(s).toString('utf-8');
    var textByLine = text.split("\n")
    return textByLine;
}

// function loadFile(filePath) {
//     var result = null;
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.open("GET", filePath, false);
//     xmlhttp.send();
//     if (xmlhttp.status==200) {
//       result = xmlhttp.responseText;
//     }
//     return result;
//   }

// var get_table = (lines) => {
//     let output = [];
//     for(var i = 0; i < lines.length; i++){
//         if(i === 0){
//             output.push("<thead><tr><th>"
//             + lines[i].split(",").join("</th><th>")
//             + "</th></tr></thead>");
//         }
//         else{
//             output.push("<tr><td>"
//             + lines[i].split(",").join("</td><td>")
//             + "</td></tr>");
//         }
//     }
//     return output;
// }

var update_table = () => {
    let num_people = document.querySelector('input[name=x]:checked').value;
    let fee_type = document.querySelector('input[name=y]:checked').value;
    console.log(num_people, fee_type);
    
    let s = get_csv(num_people, fee_type);
    let new_table = stringToHTML(get_table(s));
}
