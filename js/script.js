// sidebar
const sidebarCollapse = document.querySelector('#sidebarCollapse');
const sidebar = document.querySelector('#sidebar');
sidebarCollapse.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

const item = document.querySelectorAll('ul li.item');
item.forEach((e) => {
    e.addEventListener('mouseenter', () => {
        sidebar.classList.add('active');
    });
    e.addEventListener('mouseleave', () => {
        sidebar.classList.remove('active');
    });
});

const dash1 = document.querySelector('a#dash1');
const d1 = document.querySelector('#dashboard1');

dash1.addEventListener('click', function () {
    d1.setAttribute('style', 'display: block');
    d2.setAttribute('style', 'display: none');
    d3.setAttribute('style', 'display: none');
});

// product
const bgProduct = document.querySelectorAll('.bg-product');

bgProduct.forEach((e) => {
    e.addEventListener('click', () => {
        // bgProduct.classList.toggle('bg-active');
        console.log(e);
        e.classList.toggle('bg-active');
    });
});

// date range picker
$('#picker').daterangepicker({
    startDate: moment().subtract(6, 'days'),
    endDate: moment(),
    applyClass: 'btn-success',
    ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    locale: {
        cancelLabel: '<i class="fas fa-times"></i>',
        customRangeLabel: 'Custom',
        monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
    },
    alwaysShowCalendars: true,
    opens: 'left'
}, function (start, end) {
    $('#date').html(start.format('DD MMMM YYYY') + ' - ' + end.format('DD MMMM YYYY'))
});
$('#date').html(moment().subtract(6, 'days').format('DD MMMM YYYY') + ' - ' + moment().format('DD MMMM YYYY'))

$('#picker').on('cancel.daterangepicker', function (ev, picker) {
    //do something, like clearing an input
    $('#picker').val('');
});