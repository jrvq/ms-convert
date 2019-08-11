function convertMS(ms, format) {
  var seconds = (ms / 1000).toFixed(0);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var secondsRemaining = seconds % 60;
  var minutesRemaining = minutes % 60;

  return typeof format === 'object'
    ? {
        seconds: secondsRemaining,
        minutes: minutesRemaining,
        hours: hours
      }
    : addZeroIfNeeded(hours) +
        ':' +
        addZeroIfNeeded(minutesRemaining) +
        ':' +
        addZeroIfNeeded(secondsRemaining);
}

function addZeroIfNeeded(num) {
  return num.toString().length < 2 ? '0' + num : num;
}

module.exports = convertMS;
