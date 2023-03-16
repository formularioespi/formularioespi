class Figura {
    constructor(nombre, color) { 
      this._nombre = nombre; 
      this._color = color;
    }
    set nombre(nombre) { 
      this._nombre = nombre;
    }
    get nombre() { 
      return this._nombre;
    }
    set color(color) { 
      this._color = color;
    }
    get color() { 
      return this._color;
    }
    muestra() { 
      console.log(`Nombre: ${this._nombre}`); 
      console.log(`Color: ${this._color}`);
    }
    calcularArea() {
    }
    calcularPerimetro() {
    }
  }
  class Cuadro extends Figura{
      constructor(nombre, color, lado){ 
        super(nombre, color); this._lado = lado;
    } 
    set lado(lado) { 
      this._lado = lado; 
    }
    get lado() { 
      return this._lado;
    }
    muestra() { 
      super.muestra(); 
      console.log(`Lado: ${this._lado}`);
    }
    calcularArea() {
        var area = this._lado*this._lado;
        console.log(`Área: ${area}`);
    }
    calcularPerimetro() {
        var perimetro = this._lado*4;
        console.log(`Perímetro: ${perimetro}`);
    }
  }
  class Triangulo extends Figura {
    constructor(nombre, color, base, altura){ 
      super(nombre, color); 
      this._base = base; 
      this._altura = altura;
    }
    set base(base) { 
      this._base = base;
    }
    get base() { 
      return this._base;
    }
    set altura(altura) { 
      this._altura = altura;
    }
    get altura() { 
      return this._altura;
    }
    muestra() { 
      super.muestra();
      console.log(`Base:: ${this._base}`); 
      console.log(`Altura: ${this._altura}`);
    }
    calcularArea() {
      var area = (this._base*this._altura)/2;
      console.log(`Área: ${area}`);
    }
    calcularPerimetro() {
      var perimetro = this._base*3;
          console.log(`Perímetro: ${perimetro}`);
    }
  }
  class Circulo extends Figura{
    constructor(nombre, color, radio){ 
      super(nombre, color); 
      this._radio = radio;
    }
    set radio(radio) { 
      this._radio = radio;
    }
    get radio() { 
      return this._radio;
    }
    muestra() { 
      super.muestra(); 
      console.log(`Radio: ${this._radio}`);
    }
    calcularArea() {
      var area = 3.1416*(this._radio*this._radio);
      console.log(`Área: ${area}`);
    }
    calcularPerimetro() {
      var perimetro = 2 * 3.1416 * this._radio;
      console.log(`Perímetro: ${perimetro}`);
    }
  }
  let forma1 = new Figura("Figura Geo","Verde"); 
  let forma2 = new Cuadro("Cuadro","Amarillo",9);
  let forma3 = new Triangulo("Triangulo","Rojo",5,10); 
  let forma4 = new Circulo("Cirulo","Negro",8);
  forma1.muestra(); 
  forma1.calcularArea(); 
  forma1.calcularPerimetro();
  forma2.muestra(); 
  forma2.calcularArea(); 
  forma2.calcularPerimetro();
  forma3.muestra(); 
  forma3.calcularArea(); 
  forma3.calcularPerimetro();
  forma4.muestra(); 
  forma4.calcularArea(); 
  forma4.calcularPerimetro();
  console.log("===== REALIZANDO CAMBIOS =====");
  forma1._nombre = "Figura 1"; 
  forma1._color = "Verde";
  forma2._nombre = "Cuadro 1"; 
  forma2._color = "Amarillo"; 
  forma2._lado = 8;
  forma3._nombre = "Triangulo 1"; 
  forma3._color = "Rojo"; 
  forma3._base = 10; 
  forma3._altura = 15;
  forma4._nombre = "Circulo 1"; 
  forma4._color = "Negro"; 
  forma4._radio = 11;
  forma1.muestra(); 
  forma1.calcularArea(); 
  forma1.calcularPerimetro();
  forma2.muestra(); 
  forma2.calcularArea(); 
  forma2.calcularPerimetro();
  forma3.muestra(); 
  forma3.calcularArea(); 
  forma3.calcularPerimetro();
  forma4.muestra(); 
  forma4.calcularArea(); 
  forma4.calcularPerimetro();
      
      