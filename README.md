# ms-convert

Utility function that converts milliseconds to hours, minutes and seconds

## Installation

`$ npm install ms-convert`

## Usage

```javascript
import convertMS from 'ms-convert';

convertMS(60000);
// returns: "00:01:00"

convertMS(61000, {});
// returns: { seconds: 1, minutes: 1, hours: 0 }
```

## License
MIT
