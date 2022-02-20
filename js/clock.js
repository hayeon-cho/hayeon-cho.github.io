const clock = document.querySelector(".clock");

const getClock = () => {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");
    const second = String(now.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour}:${minute}:${second}`;
};

setInterval(getClock, 1000);
