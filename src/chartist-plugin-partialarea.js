/**
 * Chartist.js plugin to restrict the area below a line chart up to a configurable value on the X axis.
 *
 */

/* global Chartist */
(function (window, document, Chartist) {
    'use strict';

    var defaultOptions = {
        threshold: 100
    };

    function createMasks(data, options) {
        var defs = data.svg.querySelector('defs') || data.svg.elem('defs');
        var projectedThreshold = Math.round(data.chartRect.width() * options.threshold / 100) + data.chartRect.x1;

        defs
            .elem('clipPath', { id: 'plugin-partialarea-mask' })
            .elem('rect', {
                x: 0,
                y: 0,
                width: projectedThreshold,
                height: data.svg.height()
            });

        return defs;
    }

    Chartist.plugins = Chartist.plugins || {};
    Chartist.plugins.ctPartialArea = function (options) {

        options = Chartist.extend({}, defaultOptions, options);

        return function (chart) {
            if (chart instanceof Chartist.Line) {
                chart.on('draw', function (data) {
                    if (data.type === 'area') {
                        data.element
                            .attr({
                                'clip-path': 'url(#plugin-partialarea-mask)'
                            });
                    }
                });

                // On the created event, create the mask definition used to mask the graph
                chart.on('created', function (data) {
                    createMasks(data, options);
                });
            }
        };
    };
}(window, document, Chartist));
