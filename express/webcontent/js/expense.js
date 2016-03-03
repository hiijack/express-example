/**
 * 
 */

$.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd'
});

$(function() {
    $("#time").datepicker();
});

new Vue({
    el: '#app',
    data: {},
    methods: {
        addExpense: function() {
            $.post('/expense/add', $("#expense").serialize(), function(data) {
                console.log(data);
                $.refresh();
            });
        }
    }
});