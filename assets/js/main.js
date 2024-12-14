const countdown = document.querySelector(".countdown");
if (countdown) {
  const output = countdown.innerHTML;

  const countDownDate = () => {
    const timeleft =
      new Date(countdown.getAttribute("data-count")).getTime() -
      new Date().getTime();

    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    countdown.innerHTML = output
      .replace("%d", days)
      .replace("%h", hours)
      .replace("%m", minutes)
      .replace("%s", seconds);
  };

  countDownDate();
  setInterval(countDownDate, 1000);
}
