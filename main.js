class room {
    constructor(name, base_fee, saturday_fee, base_ppl, add_ppl_fee, add_ppl_max) {
        this.name = name;
        this.base_fee = base_fee;
        this.saturday_fee = saturday_fee;
        this.base_ppl = base_ppl;
        this.add_ppl_fee = add_ppl_fee;
        this.add_ppl_max = add_ppl_max;
    }
    get_fee(staying_nights, people_cnt, fee_type) {
        if (people_cnt > this.base_ppl + this.add_ppl_max) return '-';

        let one_night_fee = this.base_fee + (people_cnt - this.base_ppl) * this.add_ppl_fee;
        let fee = one_night_fee * staying_nights + this.saturday_fee;
        if (fee_type === "avg") return Math.floor(fee / people_cnt);
        else return fee;
    }
}

let room_lst = []
room_lst.push(new room('市景豪華客房', 5000, 1500, 2, 1100, 2));
room_lst.push(new room('市景精緻客房', 5300, 1500, 2, 1100, 2));
room_lst.push(new room('海景豪華客房', 6100, 1500, 2, 1100, 2));
room_lst.push(new room('海景和式雙人房', 6400, 1500, 2, 1100, 3));
room_lst.push(new room('市景精緻雙人房 (露營主題)', 6400, 1500, 2, 1100, 3));
room_lst.push(new room('經典套房A', 8300, 1500, 2, 1100, 2));
room_lst.push(new room('經典套房B', 8800, 1500, 2, 1100, 2));
room_lst.push(new room('海景蜜月套房', 9500, 1500, 2, 1100, 3));
room_lst.push(new room('豪華套房', 9700, 1500, 2, 1100, 3));

var update_table = () => {
    let num_people = document.querySelector('input[name=x]:checked').value;
    let fee_type = document.querySelector('input[name=y]:checked').value;

    var price_table = [];
    for (var i = 0; i < room_lst.length; i++) {
        var temp_table = [];
        for (var staying_nights = 3; staying_nights <= 5; staying_nights++) {
            temp_table.push(room_lst[i].get_fee(staying_nights, num_people, fee_type));
        }
        price_table.push(temp_table);
    }

    var table = document.getElementById('main-table');
    var row_cnt = table.firstChild.length;

    for (var i = 1, row; row = table.rows[i]; i++) {
       for (var j = 1, col; col = row.cells[j]; j++) {
           table.rows[i].cells[j].innerHTML = price_table[i - 1][j - 1];
       }
    }
}
