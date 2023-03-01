// Дано:

class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }


// Расширяем класс

class ExtendedClock extends Clock {

    constructor(options) {
        super(options);
        let { precision = 1000 } = options;
        this.precision = precision;
      }
      // Создаем свой конструктор внутри нового класса
      // Вызываем super(), чтобы создать объект для this
      // 
    
      start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
      }
      // Запускаем старт
      // Запускаем основную функцию render
      // Запускаем таймер, в который помещаем функцию setInterval, которая запускает функцию render() (в ДАННОМ контексте) и обозначает временной интервал precision
}