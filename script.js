function seeResults() {
    window.location.href = "results.html";
}

window.addEventListener('DOMContentLoaded', (event) => {
    const adsBlocked = 50; // This is just an example, you can update it with the actual count of blocked ads

    // Update the blocked and non-blocked ads count in test-adblocker.html
    document.getElementById('blockedAds').textContent = adsBlocked;
    document.getElementById('nonBlockedAds').textContent = 140 - adsBlocked;

    // Update the circle percentage in test-adblocker.html
    const circle = document.querySelector('.circle');
    const percentage = document.querySelector('.percentage');
    const percent = Math.round((adsBlocked / 140) * 100);
    percentage.textContent = percent + '%';
    circle.style.setProperty('--percent', percent);
});
