window.onload = function () {
    CanvasJS.addColorSet("greenShades",
        [ //colorSet Array
            "#37B04C", //nett
            "#289E45", //gross
            "#7AE28C", //average
            "#707070", //transaction
            "#FFE854"
        ]);

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        colorSet: "greenShades",
        height: 350,
        dataPointMaxWidth: 30,
        theme: "light2",
        axisX: {
            labelFormatter: function (e) {
                return CanvasJS.formatDate(e.value, "DDD");
            },
            tickLength: 15,
            tickColor: "transparant"
        },
        axisY: {
            labelFormatter: addSymbols
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
                type: "stackedColumn",
                name: "Nett",
                showInLegend: true,
                xValueFormatString: "DDDD/MMMM/YYYY",
                yValueFormatString: "#####",
                dataPoints: [{
                        x: new Date(2020, 1, 3),
                        y: 15000
                    },
                    {
                        x: new Date(2020, 1, 4),
                        y: 30000
                    },
                    {
                        x: new Date(2020, 1, 5),
                        y: 25000
                    },
                    {
                        x: new Date(2020, 1, 6),
                        y: 70000
                    },
                    {
                        x: new Date(2020, 1, 7),
                        y: 50000
                    },
                    {
                        x: new Date(2020, 1, 8),
                        y: 35000
                    },
                    {
                        x: new Date(2020, 1, 9),
                        y: 30000
                    }
                ]
            },

            {
                type: "stackedColumn",
                name: "Gross",
                showInLegend: true,
                xValueFormatString: "DDDD/MMMM/YYYY",
                yValueFormatString: "#####",
                dataPoints: [{
                        x: new Date(2020, 1, 3),
                        y: 2000
                    },
                    {
                        x: new Date(2020, 1, 4),
                        y: 4000
                    },
                    {
                        x: new Date(2020, 1, 5),
                        y: 3000
                    },
                    {
                        x: new Date(2020, 1, 6),
                        y: 8000
                    },
                    {
                        x: new Date(2020, 1, 7),
                        y: 6000
                    },
                    {
                        x: new Date(2020, 1, 8),
                        y: 4000
                    },
                    {
                        x: new Date(2020, 1, 9),
                        y: 4000
                    }
                ]
            },

            {
                type: "stackedColumn",
                name: "Average Purchase Value",
                showInLegend: true,
                xValueFormatString: "DDDD/MMMM/YYYY",
                yValueFormatString: "#####",
                dataPoints: [{
                        x: new Date(2020, 1, 3),
                        y: 60
                    },
                    {
                        x: new Date(2020, 1, 4),
                        y: 60
                    },
                    {
                        x: new Date(2020, 1, 5),
                        y: 20
                    },
                    {
                        x: new Date(2020, 1, 6),
                        y: 28
                    },
                    {
                        x: new Date(2020, 1, 7),
                        y: 30
                    },
                    {
                        x: new Date(2020, 1, 8),
                        y: 82
                    },
                    {
                        x: new Date(2020, 1, 9),
                        y: 41
                    }
                ]
            },

            {
                type: "stackedColumn",
                name: "Unit per Transaction",
                showInLegend: true,
                xValueFormatString: "DDDD/MMMM/YYYY",
                yValueFormatString: "0.00",
                dataPoints: [{
                        x: new Date(2020, 1, 3),
                        y: 0.15
                    },
                    {
                        x: new Date(2020, 1, 4),
                        y: 0.33
                    },
                    {
                        x: new Date(2020, 1, 5),
                        y: 2.55
                    },
                    {
                        x: new Date(2020, 1, 6),
                        y: 7.06
                    },
                    {
                        x: new Date(2020, 1, 7),
                        y: 5.03
                    },
                    {
                        x: new Date(2020, 1, 8),
                        y: 4.53
                    },
                    {
                        x: new Date(2020, 1, 9),
                        y: 3.03
                    }
                ]
            },

            {
                type: "line",
                name: "Expected Sales",
                showInLegend: false,
                yValueFormatString: "#####",
                dataPoints: [{
                        x: new Date(2020, 1, 3),
                        y: 15000
                    },
                    {
                        x: new Date(2020, 1, 4),
                        y: 30000
                    },
                    {
                        x: new Date(2020, 1, 5),
                        y: 25000
                    },
                    {
                        x: new Date(2020, 1, 6),
                        y: 70000
                    },
                    {
                        x: new Date(2020, 1, 7),
                        y: 50000
                    },
                    {
                        x: new Date(2020, 1, 8),
                        y: 35000
                    },
                    {
                        x: new Date(2020, 1, 9),
                        y: 30000
                    }
                ]
            }
        ]
    });
    chart.render();

    function addSymbols(e) {
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);

        if (order > suffixes.length - 1)
            order = suffixes.length - 1;

        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }

}