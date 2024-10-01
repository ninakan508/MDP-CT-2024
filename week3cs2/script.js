let alarmOn = true;
let snoozeTime = 5; // 初始 snooze 时间（分钟）
let snoozeCountdown;
let snoozeInterval;
let previousSnoozeTime = 30; // 最大允许的初始 snooze 时间

document.addEventListener('DOMContentLoaded', () => {
    const snoozeInput = document.getElementById('snoozeInput');
    const snoozeButton = document.getElementById('snoozeButton');
    const turnOffButton = document.getElementById('turnOffButton');
    const snoozeCountdownDisplay = document.getElementById('snoozeCountdown');
    const getUpText = document.getElementById('get-up');
    const alarmBox = document.getElementById('alarm-box');
    const aButton = document.getElementById('aButton');
    const bButton = document.getElementById('bButton');

    // 透明按钮的事件监听
    aButton.addEventListener('click', () => {
        snoozeButton.click(); // 模拟点击贪睡按钮
    });

    bButton.addEventListener('click', () => {
        turnOffButton.click(); // 模拟点击关掉闹钟按钮
    });

    // 闹钟背景的方块每秒闪烁
    setInterval(() => {
        if (alarmOn) {
            alarmBox.style.opacity = alarmBox.style.opacity === '0.5' ? '1' : '0.5';
        } else {
            alarmBox.style.opacity = '0'; // 当闹钟关闭时，方块隐藏
        }
    }, 1000);

    // Snooze 按钮操作
    snoozeButton.addEventListener('click', () => {
        let inputTime = parseInt(snoozeInput.value); // 获取用户输入的 snooze 时间

        // 如果输入了时间并且时间小于等于 30 分钟，且小于等于上一次 snooze 时间
        if (inputTime && inputTime <= 30 && inputTime <= previousSnoozeTime) {
            snoozeTime = inputTime;
            previousSnoozeTime = snoozeTime; // 更新前一次的 snooze 时间
            startSnooze(snoozeTime);
        } else if (!inputTime) {
            // 如果没有输入时间，默认贪睡时间减半
            snoozeTime = Math.floor(snoozeTime / 2);
            startSnooze(snoozeTime);
        } else if (inputTime > 30) {
            // 输入的时间超过 30 分钟
            snoozeCountdownDisplay.textContent = `Please enter a snooze time less than or equal to 30 minutes.`;
        } else {
            // 输入的时间超过了上一次的 snooze 时间
            snoozeCountdownDisplay.textContent = `Snooze time cannot exceed the initial snooze time of ${previousSnoozeTime} minutes.`;
        }
    });

    // 关闭闹钟按钮
    turnOffButton.addEventListener('click', () => {
        turnOffAlarm();
    });

    function startSnooze(minutes) {
        clearInterval(snoozeInterval); // 清除之前的贪睡计时
        snoozeCountdown = minutes * 60; // 转换为秒
        updateCountdownDisplay(); // 更新显示

        snoozeInterval = setInterval(() => {
            snoozeCountdown--;
            if (snoozeCountdown > 0) {
                updateCountdownDisplay(); // 更新显示
            } else {
                turnOffAlarm(); // 到达 0 时关闭闹钟
                alarmOn = true; // 重新打开闹钟
                // 这里可以添加逻辑，例如播放闹钟声或其他提示
                alert("Time to get up!"); // 提示用户起床
            }
        }, 1000); // 每秒倒计时
        alarmBox.style.opacity = '0'; // 进入贪睡时，方块隐藏
    }

    function updateCountdownDisplay() {
        const minutes = Math.floor(snoozeCountdown / 60);
        const seconds = snoozeCountdown % 60;
        snoozeCountdownDisplay.textContent = `${minutes}m ${seconds}s left`;
    }

    function turnOffAlarm() {
        alarmOn = false;
        clearInterval(snoozeInterval);
        snoozeCountdownDisplay.textContent = 'Alarm Off';
        alarmBox.style.opacity = '0'; // 闹钟关闭时，隐藏方块
    }
});
