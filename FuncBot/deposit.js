const fs = require('fs')
exports.addDeposit = function(sendid, depo, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sendid) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].deposit += depo
        fs.writeFileSync('./deposit.json', JSON.stringify(_db, null, 2))
    } else {
        const bulin = ({
            id: sendid,
            deposit: depo
                })
        _db.push(bulin)
        fs.writeFileSync('./deposit.json', JSON.stringify(_db, null, 2))
    }
}
exports.kurangDeposit = function(sendid, depo, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sendid) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].deposit -= depo
        fs.writeFileSync('./deposit.json', JSON.stringify(_db, null, 2))
    }
}
exports.getDeposit = function(sendid, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sendid) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].deposit
    } else {
        return 0
    }
}