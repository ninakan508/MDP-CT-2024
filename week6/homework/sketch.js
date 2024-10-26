let treeImage;
let apples = [];
let treeX, treeY;
let maturitySlider; 
const MAX_APPLES = 20; 
const GROUND_Y = 480; // 地面位置
let pacManX = 0; // 吃豆人横坐标
let eating = false; // 是否正在吃苹果
let pacManMouthOpen = false; // 吃豆人的嘴是否张开
let mouthFrameCount = 0; // 控制嘴巴动画的帧数

function preload() {
  treeImage = loadImage('tree.jpg'); // 替换为你的树的图片链接
}

function setup() {
  createCanvas(600, 600);
  treeX = width / 2;
  treeY = height / 2;
  maturitySlider = createSlider(0, 1, 0, 0.01); // 从0到1
  maturitySlider.position(20, height - 40); 

  let eatButton = createButton('Eat Apples');
  eatButton.position(20, height - 80);
  eatButton.mousePressed(startEating); // 按钮按下时开始吃苹果
}

function draw() {
  background("white");
  
  // 绘制树
  let imgWidth = 400; 
  let imgHeight = 400; 
  image(treeImage, width / 2 - imgWidth / 2, height / 2 - imgHeight / 2, imgWidth, imgHeight);
  
  // 检查滑块值并处理掉落逻辑
  if (maturitySlider.value() >= 1) {
    for (let apple of apples) {
      if (!apple.isFalling) {
        apple.isFalling = true;
        apple.fallSpeed = random(2, 5); // 随机掉落速度
      }
    }
  }

  // 更新并绘制苹果
  for (let i = apples.length - 1; i >= 0; i--) {
    let apple = apples[i];
    if (apple.isFalling) {
      apple.y += apple.fallSpeed; // 更新掉落位置
      if (apple.y > GROUND_Y) {
        apple.y = GROUND_Y; // 确保苹果停留在地面上
        apple.isFalling = false; // 不再掉落
      }
    }
    
    // 检查吃豆人是否吃掉苹果
    if (eating && pacManX + 15 > apple.x - 10 && pacManX < apple.x + 10 && apple.y >= GROUND_Y - 25) {
      apples.splice(i, 1); // 吃掉苹果
    }

    drawApple(apple); // 使用自定义绘制苹果的函数
  }

  // 吃豆人动画
  if (eating) {
    fill('yellow'); // 吃豆人的颜色

    // 控制嘴巴动画的速度
    mouthFrameCount++;
    if (mouthFrameCount % 10 === 0) { // 每10帧切换一次嘴的状态
      pacManMouthOpen = !pacManMouthOpen; 
    }

    if (pacManMouthOpen) {
      arc(pacManX, GROUND_Y - 15, 30, 30, QUARTER_PI, TWO_PI - QUARTER_PI, OPEN); // 张嘴
    } else {
      ellipse(pacManX, GROUND_Y - 15, 30, 30); // 闭嘴
    }

    // 将吃豆人的位置设置为苹果的 x 坐标
    pacManX += 3; // 向右移动

    // 检查吃豆人是否超出画布
    if (pacManX > width) {
      resetGame(); // 重置游戏
    }
  }
}

function mousePressed() {
  // 仅在当前苹果数量未达到上限时添加新苹果
  if (apples.length < MAX_APPLES) {
    let newApple;
    let overlap; // 检查重叠的标志

    do {
      overlap = false; 
      let appleX = random(treeX - 150, treeX + 150); 
      let appleY = random(treeY, treeY - 150); 
      newApple = { x: appleX, y: appleY, isSelected: false, isFalling: false }; 

      // 检查新苹果是否与已有苹果重叠
      for (let apple of apples) {
        if (dist(newApple.x, newApple.y, apple.x, apple.y) < 30) { // 检查半径
          overlap = true; 
          break; // 退出循环
        }
      }
    } while (overlap); 

    apples.push(newApple); // 添加新的苹果
  }
}

// 自定义绘制苹果的函数
function drawApple(apple) {
  let sliderValue = maturitySlider.value(); // 获取滑块值
  let appleColor;

  // 青绿色到红色渐变
  let r = map(sliderValue, 0, 1, 139, 150); // 红色通道
  let g = map(sliderValue, 0, 1, 176, 23);  // 绿色通道
  let b = map(sliderValue, 0, 1, 114, 17);  // 蓝色通道
  
  appleColor = color(r, g, b); // 根据计算的 RGB 值创建颜色
  
  fill(appleColor);
  noStroke();
  
  // 绘制苹果形状
  ellipse(apple.x, apple.y, 20, 25); 
  ellipse(apple.x - 10, apple.y, 20, 25); 
  
  // 添加树叶
  fill(0, 100, 0); 
  push();
  translate(apple.x - 7, apple.y - 17); // 苹果顶部
  rotate(-PI / 6); 
  ellipse(0, 0, 8, 15); 
  pop();
}

// 启动吃苹果的动画
function startEating() {
  pacManX = 0; // 初始化吃豆人的位置
  eating = true; // 开始吃苹果
  mouthFrameCount = 0; // 重置嘴巴动画计数器
}

// 重置游戏
function resetGame() {
  apples = []; // 清空苹果
  eating = false; // 停止吃苹果
  pacManX = 0; // 重置吃豆人的位置
  maturitySlider.value(0); // 重置滑块位置
}
