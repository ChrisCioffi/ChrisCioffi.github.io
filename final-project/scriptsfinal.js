// This code was modified from a solution built by pzp May 26, 2016. Link: https://stackoverflow.com/questions/37463289/highcharts-change-graph-when-radio-button-selected -->
  $(function() {
  var demoData = [23.6 , 23.7 , 24.5 , 17.6 , 19.7];
  var demoData2 = [19.4 , 18.5 , 19.7 , 13.3 , 16.7];
  var demoData3 = [39 , 31.9 , 31.9 , 25.4 , 24.7];

  var demotwoData = [25 , 21.3 , 22.2 , 15.5 , 17.4];
  var demotwoData2 = [33.9 , 29.2 , 29.2 , 22.6 , 23.4];
  var demotwoData3 = [29.6 , 29.7 , 33.5 , 19.3 , 22.3];

  var demothreeData = [37.9 , 33.9 , 31.5 , 22.4 , 23.8];
  var demothreeData3 = [16.6 , 18 , 18.8 , 14.7 , 16];

  var demofourData = [10.4 , 8.9 , 10 , 9.3 , 9.1];

  var categoriesName = ['1988-1994' ,'1999-2002' , '2001-2004' ,'2005-2008' , '2011-2014' ];

  var chart = new Highcharts.Chart({
    chart: {
      renderTo: 'demographics',
      type: 'line',
      title: ''
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        }
    },
    title: {
      text: 'Percentage of children aged 5-19 years with untreated cavities'
    },
    subtitle: {
        text: 'Source: Centers for Disease Control'
    },
    credits: {
      enabled: false
    },
    yAxis: {
      title: {
        text: 'Percentage of children aged 5-19'
      }
    },
    xAxis: {
      categories: categoriesName
    },
    tooltip:{
              formatter:function(){
                  console.log(this);
                  return 'In ' + this.x + ', ' + this.y + '% of '  + this.series.name + ' children in the U.S. had untreated cavities.'
                },
                backgroundColor: '#FCFFC5',
                borderColor: 'black',
                borderRadius: 10,
                borderWidth: 3
                }
              });


  $('.test').change(function() {
    value = this.getAttribute('value');
    while (chart.series.length > 0) {
      chart.series[0].remove(true);
    }
    if (value == 'a') {
      chart.addSeries({
        name: 'Male',
        data: demoData,
        showInLegend: true
      });
      chart.addSeries({
        name: 'Female',
        data: demotwoData,
        showInLegend: true
      });
    } else if (value == 'b') {
      chart.addSeries({
        name: 'White only',
        data: demoData2,
        showInLegend: true
      });
      chart.addSeries({
        name: 'Black African American only',
        data: demotwoData2,
        showInLegend: true
      });
      chart.addSeries({
        name: 'Mexican origin',
        data: demothreeData,
        showInLegend: true
      });
    } else if (value == 'c') {
      chart.addSeries({
        name: 'Below 100 percent above the poverty line',
        data: demoData3,
        showInLegend: true
      });
      chart.addSeries({
        name: '100-199 percent above the poverty line',
        data: demotwoData3,
        showInLegend: true
      });
      chart.addSeries({
        name: '200-399 percent above the poverty line',
        data: demothreeData3,
        showInLegend: true
      });
      chart.addSeries({
        name: '400 percent or more above the poverty line',
        data: demofourData,
        showInLegend: true
      });
    }
  });

  $('.test').first().prop('checked', true).trigger('change');
});
