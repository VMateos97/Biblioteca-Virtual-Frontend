export var host = "http://localhost:8080/biblioteca/";
export var sesion = sessionStorage.getItem("sesion") == null?null:JSON.parse(sesion = sessionStorage.getItem("sesion"));
export class Util{}