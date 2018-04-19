/*
$(function() {
  $('button').defaultButton({

  });
});
*/
class button {
  constructor(el, classes = 'defaultButton') {
    this.button = el;
    this.classes = classes;
    this.show();
    this.addingClass();
  }

  show() {
    console.log(this.button);
  }

  addingClass() {
    for (let i = 0; i < this.button.length; i++) {
      this.button[i].classList.add(this.classes);
    }
  }

  invertColor() {
    for (let i = 0; i < this.button.length; i++) {
       if (this.button[i].classList === "basic");
      this.button[i].classList.add("invertedBasic");
    }
  }

  enableHovering () {
    for (let i = 0; i < this.button.length; i++) {
      this.button[i].addEventListener('mouseover', function () {
        document.querySelector('.basic').classList.remove('basic');
      });
    }
  }
}
let test = new button(document.querySelectorAll('button'), "basic");
test.invertColor();
