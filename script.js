let coins = 1000;
let clickRate = 1;
let clickLimit = 5;
let upgradeCost = 100;
let clicks = 0;
let lastClickTime = Date.now();
let upgradeLevel = 1;
const maxUpgradeLevel = 10;

function upgradeClick() {
    if (upgradeLevel >= maxUpgradeLevel) {
        alert("شما به حداکثر سطح ارتقا رسیده‌اید.");
        return;
    }
    
    if (coins >= upgradeCost) {
        coins -= upgradeCost;
        clickRate *= 2;
        clickLimit *= 2;  // افزایش محدودیت کلیک
        upgradeCost *= 2;
        upgradeLevel++;
        document.getElementById("coins").innerText = coins;
        document.getElementById("clickRate").innerText = clickRate;
        document.getElementById("upgradeCost").innerText = upgradeCost;
        document.getElementById("upgradeLevel").innerText = upgradeLevel;
    } else {
        alert("شما به اندازه کافی سکه برای ارتقا ندارید.");
    }
}

function handleClick() {
    let now = Date.now();
    let elapsedTime = now - lastClickTime;
    if (elapsedTime < 1000 / clickLimit) {
        alert("شما به حداکثر تعداد کلیک در ثانیه رسیده‌اید.");
        return;
    }
    clicks++;
    coins += clickRate;
    lastClickTime = now;
    document.getElementById("clicks").innerText = clicks;
    document.getElementById("coins").innerText = coins;

    const button = document.getElementById("coinButton");
    button.classList.add("button-clicked");

    button.addEventListener("animationend", () => {
        button.classList.remove("button-clicked");
    }, { once: true });
}