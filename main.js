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

var get_csv = (num_people, fee_type) => {
    let s = `${num_people}_${fee_type}.csv`
    var text = loadFile(s)
    return text;
}

var update_table = () => {
    let num_people = document.querySelector('input[name=x]:checked').value;
    let fee_type = document.querySelector('input[name=y]:checked').value;
    // console.log(num_people, fee_type);
    let s = get_csv(num_people, fee_type);
    // console.log(s);
    console.log(s)
}
