function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function updateTime(date1,date2){
  // const year = date1.getFullYear()
  // const month = date1.getMonth() + 1
  const day1 = date1.getDate()
  const hour1 = date1.getHours()
  const minute1 = date1.getMinutes()

  const day2 = date2.getDate()
  const hour2 = date2.getHours()
  const minute2 = date2.getMinutes()

  var moreMinute = day1*3600+hour1*60+minute1-day2*3600-hour2*60-minute2;
  var day3 = parseInt(moreMinute/3600)
  var hour3 = parseInt((moreMinute-3600*day3)/60);
  var minute3 = moreMinute-day3*3600-hour3*60;
  
  return [day3,hour3,minute3];
}
module.exports = {
  formatTime: formatTime,
  updateTime: updateTime
}
