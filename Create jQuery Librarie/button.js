class Button {
  constructor(el, classes = 'defaultButton') {
    this.button = el;
    this.classes = classes;
    this.addingClass();
  }

  // Adding Custom Classe Of The Client //
  addingClass() {
    for (let i = 0; i < this.button.length; i++) {
      this.button[i].classList.add(this.classes);
    }
  }

  invertColor() {
    this.cl = "invertedBasic";
    for (let i = 0; i < this.button.length; i++) {
       if (this.button[i].classList == "basic") {
          this.button[i].classList.remove('basic');
          this.button[i].classList.add(this.classes);
       }
    }
  }

  enableHovering () {
    let hoveringClass = 'basicHovering';
    let actualClass = this.cl;

    for (let i = 0; i < this.button.length; i++) {

        this.addListenerMulti(this.button[i], 'mouseover mouseout',  function(evt) {
            // Checking what event is Fired //
            evt.type === "mouseover" ?  
            (this.classList.remove(actualClass),
              this.classList.add(hoveringClass)) :

            (this.classList.remove (hoveringClass),
             this.classList.add(actualClass));

        });
    }
  }

  get cl () {
    return this.classes;
  }
  
  set cl (c) {
    this.classes = c;
  }


  addListenerMulti(el, s, fn) {
    s.split(' ').forEach(e => el.addEventListener(e, fn, false));
  }
}
let test = new Button(document.querySelectorAll('button'), 'basic');

test.invertColor();
test.enableHovering()


