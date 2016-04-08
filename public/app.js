function add_to_cart(id)
{
	var key = 'product_' + id;

	var x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	window.localStorage.setItem(key, x);
}

function enumerate_l_s()
{
	var x = 0
	for(var i=0, len=localStorage.length; i<len; i++)  {
		 var key = localStorage.key(i);
		 var value = localStorage[key];
		 x = x * 1 + value * 1;
 	}
 	alert(x)
}

function something()
{

	var x = window.localStorage.getItem('aaa');
	x = x * 1 + 1;
	window.localStorage.setItem('aaa',x);
	alert(x);
	x=x+1;
}
