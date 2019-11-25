let t, m =0;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


var app = new Vue({
	el: "#app",
	data: {
		price: '46944430086',
		mortage: 0,
		monthly: 0,
		down: 0,
		interestPrinciple: 0,
		tax: 0,
		hoa: 0,
		n: 12*30,
		y: 30,
		r: 4/12/100,
	},

	methods: {
    	calculate: function () {
      		this.price = this.price;
      		this.down = this.price/5;
      		this.mortgage = this.price - this.down;
      		console.log(this.mortgage)
      		console.log(this.r)
      		this.interestPrinciple = Number(this.mortgage*(this.r*Math.pow((1+this.r),(this.n*this.y)))/(Math.pow((1+this.r),(this.n*this.y))));
      		console.log(this.interestPrinciple)
      		this.tax = this.price*0.0014;
      		this.hoa = 32287410;
      		this.monthly = sum(this.tax,this.hoa,this.interestPrinciple);
      		console.log(this.monthly)

      		this.down = formatNumber(this.down);
      		this.monthly = formatNumber(this.monthly);
      		this.interestPrinciple = formatNumber(this.interestPrinciple);
      		this.tax = formatNumber(this.tax);
          this.hoa = formatNumber(this.hoa);

    },
    resetData: function() {
			this.price = null;
			this.monthly = null;
			this.down = null;
			this.tax = null;
			this.hoa = null;
		}
  }
});

function sum(tax, hoa, interest){
	let total = tax + hoa + interest;
	return total;
}

function formatNumber(num) {
	num = num.toFixed(0);
  	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
