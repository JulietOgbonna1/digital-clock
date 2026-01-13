function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours24 = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const meridiem = hours24 >= 12 ? 'PM' : 'AM';
    const hours12 = hours24 % 12 || 12;
    const hours = String(hours12).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    clockElement.textContent = timeString;

}
setInterval(updateClock, 1000);
updateClock();
