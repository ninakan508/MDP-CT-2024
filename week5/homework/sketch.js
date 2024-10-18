let numPetals = 13;  //花瓣数量
let petalLength = 150;  //花瓣长度
let petalWidth = 70;  //花瓣宽度
let rotationSpeed = 0.001;  //旋转速度
let angleOffset = 0;  // 角度偏移量
let bkgndClr;  // 背景颜色
let timerID;
let beeRadius = 15;  // 小蜜蜂的大小
let beeOrbitRadius = 200;  // 小蜜蜂围绕花朵飞行的半径
let beeSpeed = 0.002;  // 小蜜蜂飞行的速度

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100);  // 使用 HSB 色彩模式
  noStroke();
  
  // 初始化背景颜色为浅棕色
  bkgndClr = color(30, 10, 95);  // 设置一个非常浅的棕色
  
  // 每2秒切换一次背景颜色，颜色在浅棕色范围内变化
  timerID = setInterval(() => {
    let hue = random(30, 45);  // 棕色的色相
    let saturation = random(10, 20);  // 非常低的饱和度
    let brightness = random(90, 100);  // 保持高亮度
    bkgndClr = color(hue, saturation, brightness);
  }, 2000);  // 每2000毫秒切换颜色
}

function draw() {
  background(bkgndClr);  // 设置背景为浅棕色，颜色会切换
  translate(width / 2, height / 2);  // 将坐标原点移动到画布中心

  angleOffset += rotationSpeed;  // 随着时间增加角度偏移量

  // 绘制花朵
  for (let i = 0; i < numPetals; i++) {
    let angle = TWO_PI / numPetals * i + angleOffset;  // 每个花瓣的旋转角度
    let x = cos(angle) * petalLength / 2;
    let y = sin(angle) * petalLength / 2;

    push();
    translate(x, y);
    rotate(angle + HALF_PI);  // 花瓣旋转
    
    // 生成浅粉色花瓣颜色
    let pinkHue = random(300, 360);  // 粉色调的色相
    fill(pinkHue, random(30, 50), 100);  // 使用较低饱和度 (30-50) 和高亮度 (100)
    
    ellipse(0, 0, petalWidth, petalLength);  // 绘制椭圆形花瓣
    pop();
  }

  // 绘制小蜜蜂
  let beeX = beeOrbitRadius * cos(millis() * beeSpeed);  // 使用 cos() 计算蜜蜂的 x 坐标
  let beeY = beeOrbitRadius * sin(millis() * beeSpeed);  // 使用 sin() 计算蜜蜂的 y 坐标

  fill("yellow");  // 小蜜蜂的身体
  ellipse(beeX, beeY, beeRadius, beeRadius);  // 画出小蜜蜂的身体

  fill("black");  // 小蜜蜂的头
  ellipse(beeX + beeRadius / 3, beeY, beeRadius / 2, beeRadius / 2);  // 画出小蜜蜂的头
}
