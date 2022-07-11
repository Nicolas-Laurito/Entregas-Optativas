
let indice,saldoActual, montoIngresado
const saldoAcumulado=0

class Usuario {
  constructor(dni, nombre, apellido, contrasena, saldoCuenta){
    this.dni=dni
    this.nombre=nombre
    this.apellido=apellido
    this.contrasena=contrasena
    this.saldoCuenta=saldoCuenta
  }
  depositar (dineroIngresado=0){
    this.saldoCuenta +=dineroIngresado
  }

  extraer (retiroDinero=0){
    this.saldoCuenta-=retiroDinero
  }
}

const usuario1 =new Usuario ("32152341", "Nicolas", "Laurito", "123456", 10000)
const usuario2 = new Usuario("31452674", "Andrea", "Gimenez", "654321", 15000)
const usuario3 = new Usuario("55105712", "Julieta", "Laurito", "987654", 25000)

const arrayUsuarios = [usuario1, usuario2, usuario3]



//PROGRAMA
const idUser = document.getElementById(`idUser`)
const idClave = document.getElementById(`idClave`)
const btnIngresar = document.getElementById(`btnIngresar`)
const btnRegistro = document.getElementById(`btnRegistro`)
const contenedorGeneral = document.getElementById(`contenedorGeneral`)
const mensaje = document.getElementById(`mensaje`)
const btnDepositar=document.getElementById(`btnDepositar`)
const btnExtraer=document.getElementById(`btnExtraer`)
const btnSaldo=document.getElementById(`btnSaldo`)
const contenedorOpciones=document.getElementById(`contenedorOpciones`)


btnIngresar.addEventListener(`click` , ()=>{
  
  indice= arrayUsuarios.findIndex(arrayUser =>arrayUser.dni===idUser.value && arrayUser.contrasena===idClave.value)
  let valor = arrayUsuarios.some(arrayUser =>arrayUser.dni===idUser.value && arrayUser.contrasena===idClave.value)

  if(valor===true){
    mensaje.innerHTML=`
    <p> Ingreso Exitoso </p>
 
  `
  const idUser = document.getElementById(`idUser`)
  const idClave = document.getElementById(`idClave`)
  idUser.value=""
  idClave.value=""

  console.log(indice)
  
  }else{

    mensaje.innerHTML=`
    <p> Usuario Incorrecto </p>
  
  `
  const idUser = document.getElementById(`idUser`)
  const idClave = document.getElementById(`idClave`)
  idUser.value=""
  idClave.value=""

  }

})



//BOTON REGISTRAR QUEDA PARA MAS ADELANTE CUANDO PUEDA CREAR UN EVENTO DE UN BOTON INCLUIDO CON INNERHTML
// btnRegistro.addEventListener(`click`, ()=>{
//   contenedorGeneral.innerHTML+=`
//   <input type="text" id="idNuevoDni" placeholder="Ingrese DNI">
//   <input type="text" id="idNuevoNombre" placeholder="Ingrese Nombre">
//   <input type="text" id="idNuevoApellido" placeholder="Ingrese Apellido">
//   <input type="text" id="idNuevoClave" placeholder="Ingrese Contraseña">
  
//   `

//   let idNuevoDNI=document.getElementById(`idNuevoDNI`)
//   let idNuevoNombre=document.getElementById(`idNuevoNombre`)
//   let idNuevoApellido=document.getElementById(`idNuevoApelldio`)
//   let idNuevoClave=document.getElementById(`idNuevoClave`)
//   const usuarioNuevo = new Usuario (idNuevoDNI,idNuevoNombre,idNuevoApellido,idNuevoClave, nuevoSaldo=0)
//   arrayUsuarios.push(usuarioNuevo)
//   indice = arrayUsuarios.indexOf(usuarioNuevo)
//   console.log(usuarioNuevo)
//   console.log(indice)

// })




btnDepositar.addEventListener(`click`, ()=>{

  montoIngresado= document.getElementById(`montoIngresado`)
  arrayUsuarios[indice].depositar(parseFloat(montoIngresado.value))
  montoIngresado.value=""
  const mensaje1=document.getElementById(`mensaje1`)
  mensaje1.innerHTML=`
    <p> Gracias por Depositar </p>
 `
})

btnExtraer.addEventListener(`click`, ()=>{

  montoIngresado= document.getElementById(`montoIngresado`)
  arrayUsuarios[indice].extraer(parseFloat(montoIngresado.value))
  montoIngresado.value=""
  const mensaje1=document.getElementById(`mensaje1`)
  mensaje1.innerHTML=`
    <p> Gracias por operar con Nosotros </p>
 `
 
})

btnSaldo.addEventListener(`click`, ()=>{
  const mensaje1=document.getElementById(`mensaje1`)
  mensaje1.innerHTML=`
    <p>El saldo Actual de su cuenta es: ${arrayUsuarios[indice].saldoCuenta} </p>

  `

})




