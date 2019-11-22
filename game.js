// 创建画布
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//载入背景图像
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";
//载入背景图像2
var bgReady2 = false;
var bgImage2 = new Image();
bgImage2.src = "images/background2.jpg";
// 载入英雄图像
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/1.png";

// 载入英雄图像
var heroReadyyou = false;
var heroImageyou = new Image();
heroImageyou.onload = function () {
	heroReadyyou = true;
};
heroImageyou.src = "images/4.png";


// 载入英雄图像
var heroReadyshang = false;
var heroImageshang = new Image();
heroImageshang.onload = function () {
	heroReadyshang = true;
};
heroImageshang.src = "images/2.png";

// 载入英雄图像
var heroReadyzuo = false;
var heroImagezuo = new Image();
heroImagezuo.onload = function () {
	heroReadyzuo = true;
};
heroImagezuo.src = "images/3.png";

// 载入怪兽图像
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/monster.png";


// 载入怪兽图像2
var monsterReady2 = false;
var monsterImage2 = new Image();
monsterImage2.onload = function () {
	monsterReady2 = true;
};
monsterImage2.src = "images/monster2.png";

//羽毛
var monsterReady3 = false;
var monsterImage3 = new Image();
monsterImage3.onload = function () {
	monsterReady3 = true;
};
monsterImage3.src = "images/monster3.png";

//血瓶
var monsterReady4 = false;
var monsterImage4 = new Image();
monsterImage4.onload = function () {
	monsterReady4 = true;
};
monsterImage4.src = "images/monster4.png";
// 设置参数
var hero = {
	speed: 256 // 设置英雄每秒256像素
};
var monster = {};
var monstersCaught = 0;

var monster2 = {};
var monstersCaught2 = 0;

var monster3 = {};
var monstersCaught3 = 0;

var monster4 = {};
var monstersCaught4 = 0;

var  dqhreo=heroImage;
// 处理键盘按钮事件
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// 当英雄抓到怪兽时候，重置位置
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// 把怪兽放到画布的任意位置
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
	
	// 把怪兽放到画布的任意位置
	monster2.x = 32 + (Math.random() * (canvas.width - 64));
	monster2.y = 32 + (Math.random() * (canvas.height - 64));

	// 把怪兽放到画布的任意位置
	monster3.x = 32 + (Math.random() * (canvas.width - 64));
	monster3.y = 32 + (Math.random() * (canvas.height - 64));

	monster4.x = 32 + (Math.random() * (canvas.width - 64));
	monster4.y = 32 + (Math.random() * (canvas.height - 64));
};

// 刷新页面，移动对象
var update = function (modifier) {
	if (38 in keysDown) { // 按向上键，英雄往上移动
		hero.y -= hero.speed * modifier;
		dqhreo = heroImageshang;
	}
	if (40 in keysDown) { // 按向下键，英雄往下移动
		hero.y += hero.speed * modifier;
		dqhreo = heroImage;
	}
	if (37 in keysDown) { // 按向左键，英雄往左移动
		hero.x -= hero.speed * modifier;
		dqhreo = heroImagezuo;
	}
	if (39 in keysDown) { // 按向右键，英雄往右移动
		hero.x += hero.speed * modifier;
		dqhreo = heroImageyou;
	}
	if(hero.x<0)
	{
		hero.x=0;
	}
	if(hero.x>512-50)
	{
		hero.x=512-50;
	}
	if(hero.y<0)
	{
		hero.y=0;
	}
	if(hero.y>480-64)
	{
		hero.y=480-64;
	}
	// 判断是否碰撞
	if (
		hero.x <= (monster.x + 30)
		&& monster.x <= (hero.x + 30)
		&& hero.y <= (monster.y + 30)
		&& monster.y <= (hero.y + 30)
	) {
		++monstersCaught;
		reset();
	}
	
	if (
		hero.x <= (monster2.x + 30)
		&& monster2.x <= (hero.x + 30)
		&& hero.y <= (monster2.y + 30)
		&& monster2.y <= (hero.y + 30)
	) {
		alert("勇敢的冒险者重新开始吧喵(=￣ω￣=)贪心没有好下场的喵ε-(=｀ω´=)");
		location.replace(location);
	}

	if (
		hero.x <= (monster4.x + 30)
		&& monster4.x <= (hero.x + 30)
		&& hero.y <= (monster4.y + 30)
		&& monster4.y <= (hero.y + 30)
	) {
		--monstersCaught;
		reset();
	}

	if (
		hero.x <= (monster3.x + 30)
		&& monster3.x <= (hero.x + 30)
		&& hero.y <= (monster3.y + 30)
		&& monster3.y <= (hero.y + 30)
	) {
		++monstersCaught3;
		reset();
	}

	if (monstersCaught * 100 + monstersCaught2 * (-1000) + monstersCaught3 * 200 +100 <= 0) {

		alert("作为勇者你还不够格呢喵o(=•ェ•=)m回去再修炼几年再来吧喵");
		location.replace(location);
		heroReady = false;
		monsterReady = false;
		monsterReady2 = false;
		monsterReady3 = false;
		monsterReady4 = false;
	}

	if (monstersCaught3 >= 15) {
		alert("恭喜勇者大人通关了喵(ฅ´ω`ฅ)不愧是勇者大人呢喵");
		location.replace(location);
	}
	
	if(monstersCaught*100+monstersCaught2*50>1000)
	{
		bgReady=false;
		bgReady2 = true;
	}
	else
	{
		bgReady=true;
		bgReady2 = false;
	}
	
};

// 绘制所有内容
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}
	if (bgReady2) {
		ctx.drawImage(bgImage2, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(dqhreo, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}
	
	if (monsterReady2) {
		ctx.drawImage(monsterImage2, monster2.x, monster2.y);
	}

	if (monsterReady3) {
		ctx.drawImage(monsterImage3, monster3.x, monster3.y);
	}
	if (monsterReady4) {
		ctx.drawImage(monsterImage4, monster4.x, monster4.y);
	}

	// 画布绘制
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("HP: " + (monstersCaught * 100 + 100 + monstersCaught2 * -1000 + monstersCaught3 * 200), 32, 32);
	ctx.fillText("羽毛: " + (monstersCaught3), 32, 64);
};

// 主游戏循环
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);   //更新坐标
	render();               //重新绘制

	then = now;

	// 动画定时刷新，间隔时间由系统根据硬件判断
	requestAnimationFrame(main);
};

// 各种浏览器支持requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// 开始游戏
var then = Date.now();
reset();
main();
