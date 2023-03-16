class SeguroSocial{
  constructor(pasientes,citas){
    this._pasientes = pasientes;
    this._citas = citas;
    }
    set pasientes(pasientes){
      this._pasientes = pasientes;
    }
    get pasientes(){
      return this._pasientes;  
    }
    set citas(citas){
      this._citas = citas;
    }
    get citas(){
      return this._citas;  
    }
    muestra(){
      console.log(`Pasientes: ${this._pasientes}`); 
      console.log(`Citas: ${this._citas}`); 
    }
  }
  class clinica183 extends SeguroSocial{
    constructor(pasientes,citas,turnos){
      super (pasientes,citas);
      this._turnos = turnos;
    }
    set turnos(turnos){
      this._turnos = turnos;
    }
    get turnos(){
      return this._turnos;  
    }
    muestra(){
      super.muestra();
      console.log(`Turnos: ${this._turnos}`);
      }
    }
    class clinica13 extends SeguroSocial{
      constructor(pasientes,citas,consultorios){
        super(pasientes,citas);
        this._consultorios = consultorios;
    }
    set consultorios(consultorios){
      this._consultorios = consultorios;
    }
    get consultorios(){
      return this._consultorios;  
    }
    muestra(){
      super.muestra();
      console.log(`Consultorios: ${this._consultorios}`);
    }
  }
  let tipodeatencion = new SeguroSocial("mixtos", "de 8 a 19:30h");
  let tipodeatencion183 = new clinica183("mixtos", "de 8 a 19:30h", "Matutino y Vespertino");
  let tipodeatencion13 = new clinica13("mixtos", "de 8 a 19:30h", "Del 1 al 15");
  tipodeatencion.muestra();
  tipodeatencion183.muestra();
  tipodeatencion13.muestra();
  
  console.log("==CON CAMBIOS==.")
  tipodeatencion._pasientes = "mixtos";
  tipodeatencion._citas = "de 8 a 19:30h";
  tipodeatencion183._pasientes = "mixtos";
  tipodeatencion183._citas = "de 8 a 19:30h";
  tipodeatencion183._turnos = "Matutino, Vespertino";
  tipodeatencion13._pasientes = "mixtos";
  tipodeatencion13._citas = "de 8 a 19:30h";
  tipodeatencion13._consultorios = "Del 1 al 15";
  tipodeatencion.muestra();
  tipodeatencion183.muestra();
  tipodeatencion13.muestra();