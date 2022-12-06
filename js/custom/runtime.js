var now = new Date;

function createtime() {
	now.setTime(now.getTime() + 1e3);
	var e = new Date("11/03/2021 00:00:00"),
		t = Math.trunc(234e8 + (now - e) / 1e3 * 17),
		a = (t / 1496e5).toFixed(6),
		n = new Date("11/03/2021 00:00:00"),
		s = (now - n) / 1e3 / 60 / 60 / 24,
		o = Math.floor(s),
		r = (now - n) / 1e3 / 60 / 60 - 24 * o,
		i = Math.floor(r);
	1 == String(i)
		.length && (i = "0" + i);
	var l = (now - n) / 1e3 / 60 - 1440 * o - 60 * i,
		b = Math.floor(l);
	1 == String(b)
		.length && (b = "0" + b);
	var d = (now - n) / 1e3 - 86400 * o - 3600 * i - 60 * b,
		c = Math.round(d);
	1 == String(c)
		.length && (c = "0" + c);
	let g = "";
	g = i < 18 && i >= 9 ? `
    <img class='boardsign' src='https://img.shields.io/badge/S Spaceship-Spaceship is sailing-6adea8?style=social&logo=cakephp' title='距离月入25k也就还差一个大佬带我~'>
    <span class='textTip'> <br> 
    <b>The spaceship has been sailing for about ${o} days 
    </span>
    <span id='runtime'> 
    ${i} hours ${b} minutes and ${c} seconds
    </b>
    </span> 
    <i id="heartbeat" class='fas fa-heartbeat' style='color:red'>
    </i> <br> 
    <b>Voyager 1 is currently ${t} kilometer from Earth, which is about ${a} astronomical unit🚀
    </b> <br> 
    <b><font size=2px>Look at that blip again, it's here, it's home, it's us - everyone you've ever loved, everyone you've ever known, everyone you've ever heard of, everyone you've ever been A person, all spend their whole life on it.✨
    </font>
    </b> ` : `<img class='boardsign' src='https://img.shields.io/badge/S Spaceship-Repairing the spaceship-6adea8?style=social&logo=coffeescript' title='下班了就该开开心心的玩耍，嘿嘿~'>
    <span class='textTip'> <br> 
    <b>The spaceship has been sailing for about ${o} days 
    </span>
    <span id='runtime'> 
    ${i} hours ${b} minutes and ${c} seconds
    </b>
    </span> 
    <i id="heartbeat" class='fas fa-heartbeat' style='color:red'>
    </i> <br> 
    <b>Voyager 1 is currently ${t} kilometer from Earth, which is about ${a} astronomical unit🚀
    </b> <br> 
    <b><font size=2px>Look at that blip again, it's here, it's home, it's us - everyone you've ever loved, everyone you've ever known, everyone you've ever heard of, everyone you've ever been A person, all spend their whole life on it.✨
    </font>
    </b> `, document.getElementById("workboard") && (document.getElementById("workboard")
		.innerHTML = g)
}
setInterval((() => {
	createtime()
}), 1e3);