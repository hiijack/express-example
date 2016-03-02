/**
 * 
 */
new Vue({
  el: '#app',
  data: {
  },
  methods: {
	  addExpense: function() {
		  $.post('/expense/add', $("#expense").serialize(), function(data) {
			 console.log(data); 
		  });
	  }
  }
});