const clock = document.querySelector(".clock");

const getClock = () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    clock.innerText = `${hour}:${minute}:${second}`;
};

setInterval(getClock, 1000);
