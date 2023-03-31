var get_csv = (num_people, fee_type) => {
    let s = `${num_people}_${fee_type}.csv`
    var fs = require("fs");
    var text = fs.readFileSync(s).toString('utf-8');
    var textByLine = text.split("\n")
    return textByLine;
}

var update_table = () => {
    let num_people = document.querySelector('input[name=x]:checked').value;
    let fee_type = document.querySelector('input[name=y]:checked').value;
    console.log(num_people, fee_type);
    let s = get_csv(num_people, fee_type);
    console.log(s);
}
