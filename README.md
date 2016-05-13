# Partial Area plugin for Chartist.js

This plugin allows line charts to have a partial filled area up to a configurable percentage.

In order to use it, you will need to include the excellent charting library Chartist.js in your page.

http://gionkunz.github.io/chartist-js/index.html


## Available options and their defaults

```javascript
var defaultOptions = {
  // The percentage on the X axis that is to be filled.
  threshold: 100,
  
};
```

## Sample usage

```javascript
var chart = new Chartist.Line('.ct-chart', {
            labels: ['0-20%', '20-40%', '40-60%', '60-80%', '80-100%'],
                series: [1, 3, 7, 12, 5]
            }, {
                axisY: {
                    onlyInteger: true
                },
                plugins: [
                    Chartist.plugins.ctPartialArea({
                        threshold: 57
                    })
                ]
            });
```
