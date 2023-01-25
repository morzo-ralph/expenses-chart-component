const data = 
     [
          {
            "day": "mon",
            "amount": 17.45
          },
          {
            "day": "tue",
            "amount": 34.91
          },
          {
            "day": "wed",
            "amount": 52.36
          },
          {
            "day": "thu",
            "amount": 31.07
          },
          {
            "day": "fri",
            "amount": 23.39
          },
          {
            "day": "sat",
            "amount": 43.28
          },
          {
            "day": "sun",
            "amount": 25.48
          }
        ];

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(row => row.day),
      datasets: [
          {
               labels: '',
               data: data.map(row => row.amount),
               backgroundColor: 'hsl(10, 79%, 65%)',
               hoverBackgroundColor: 'hsl(186, 34%, 60%)',
               borderRadius: '10',
          }
      ]
    },
    options: {
     plugins: {
          legend: {
               display: false
           },
           tooltip: {
               backgroundColor: 'hsl(25, 47%, 15%)',
               displayColors: false,
               caretSize: 0,
               position: 'average',
               xAlign: 'center',
               yAlign: 'bottom',
               callbacks: {
                    title:  function( ) { return '' },
               }
           },
      },
      scales: {
          x: {
               display: false,
          },
          y: {
               display: false
          }
      }
      
    }
  });