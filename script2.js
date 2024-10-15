let timer = 60;
const countdownElement = document.getElementById('timer');
const interval = setInterval(() => {
    timer--;
    countdownElement.textContent = timer;

    if (timer <= 0) {
        clearInterval(interval);
        window.location.href = "https://apps.apple.com/us/app/safetunnel-vpn-fast-proxy/id6448643898";
    }
}, 1000);

function stopLeak() {
    clearInterval(interval);
    window.location.href = "https://apps.apple.com/us/app/safetunnel-vpn-fast-proxy/id6448643898";
}
