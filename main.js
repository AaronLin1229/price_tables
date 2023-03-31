function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
}

function get_element(s) {
  var div = document.createElement('div');
  div.innerHTML = s.trim();
  return div.firstChild;
}


var get_csv = (num_people, fee_type) => {
    let s = `${num_people}_${fee_type}.csv`;
    var text = loadFile(s);
    return text.split('\n');
}

var get_table = (lines) => {
    let output = [];
    for(var i = 0; i < lines.length; i++){
        if(i === 0){
            output.push("<thead><tr><th>"
            + lines[i].split(",").join("</th><th>")
            + "</th></tr></thead>");
        }
        else{
            output.push("<tr><td>"
            + lines[i].split(",").join("</td><td>")
            + "</td></tr>");
        }
    }
    return output;
}

var update_table = () => {
    let num_people = document.querySelector('input[name=x]:checked').value;
    let fee_type = document.querySelector('input[name=y]:checked').value;

    let s = get_csv(num_people, fee_type);
    let table = get_table(s);
    table = table.join('');
    // let new_innerhtml = get_element(table);

    document.getElementById('main-table').innerHTML = table;
}
