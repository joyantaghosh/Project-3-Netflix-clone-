//scroll trend
const list = document.querySelector('.trend2 ul');
document.querySelector('.left').onclick = () =>
  list.scrollBy({ left: -1300, behavior: 'smooth' });

document.querySelector('.right').onclick = () =>
  list.scrollBy({ left: 1300, behavior: 'smooth' });

//frequently asked question section

document.addEventListener("DOMContentLoaded", function () {

  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(question => {
    question.addEventListener("click", function () {

      const answer = this.nextElementSibling;

      // Close all other answers
      document.querySelectorAll(".faq-answer").forEach(item => {
        if (item !== answer) {
          item.style.maxHeight = null;
          item.previousElementSibling.querySelector(".faq-icon").style.transform = "rotate(-90deg)";
        }
      });

      // Toggle current
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        this.querySelector(".faq-icon").style.transform = "rotate(-90deg)";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        this.querySelector(".faq-icon").style.transform = "rotate(45deg)";
      }

    });
  });

});

//social media button lik
function goToInstagram() {
  window.open("https://www.instagram.com/void_ijoyantaghosh/", "_blank");
}
function goToGmail() {
  window.open("mailto:joyantagh81@gmail.com", "_blank");
}
function goToLinkedin() {
  window.open("", "_blank");
}
function goToGithub() {
  window.open("https://github.com/joyantaghosh", "_blank");
}

//copyright section
 document.getElementById("year").textContent = new Date().getFullYear();
