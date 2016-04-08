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

function cart_get_number_of_items()
{
	var cnt = 0;

	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i); // получаем ключ
		var value = window.localStorage.getItem(key); // получаем значение, аналог в ruby: hh[key] = x

		if(key.indexOf('product_') == 0)
		{
			cnt = cnt + value * 1;
		}
	}

	return cnt;
}

function something()
{

	var x = window.localStorage.getItem('aaa');
	x = x * 1 + 1;
	window.localStorage.setItem('aaa',x);
	alert(x);
	x=x+1;
}
function cart_get_orders()
{
	var orders = '';

	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i); // получаем ключ
		var value = window.localStorage.getItem(key); // получаем значение, аналог в ruby: hh[key] = x

		if(key.indexOf('product_') == 0)
		{
			orders = orders + key + '=' + value + ',';
		}
	}

	return orders;
}
