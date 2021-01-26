const date = new Date()
const _year = date.getFullYear()
let _month = date.getMonth() + 1
const _date = date.getDate()
if (_month < 10) {
  _month = '0' + _month
}

module.exports = `${_year}-${_month}-${_date}`