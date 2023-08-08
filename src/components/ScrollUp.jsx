import "../styles/scrollup.css";

const ScrollUp = ({ theme }) => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    // const theme = document.querySelector(`#${theme}`);
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  
  
  return (
    <a href="#"  className="scrollup" id={theme}>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
