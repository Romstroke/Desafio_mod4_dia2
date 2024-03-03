////////////////////////////////////////////////////// CONSULTAS ////////////////////////////////////////////////////
//Esos tres puntos son porque las funciones constructoras(práctica de antaño) fueron desplazadas por las clases?
//Es mejor que nombreConsultorio y su parámetro se llamen igual o que la propiedad privada se llame solo _nombre?
//Se puede mejorar la manera en que muestro el consultorio al que pertenece el paciente encontrado por su nombre?

// Función constructora para Consultorio
function Consultorio(nombreConsultorio, pacientes) {
    this._nombreConsultorio = nombreConsultorio;
    this._pacientes = pacientes || [];
}

// Función constructora para Paciente
function Paciente(nombrePaciente, edad, rut, diagnostico) {
    this._nombrePaciente = nombrePaciente;
    this._edad = edad;
    this._rut = rut;
    this._diagnostico = diagnostico;
}

// Métodos getter y setter para datos de pacientes

// Getter
Paciente.prototype.obtenerNombrePaciente = function () {
    return this._nombrePaciente;
}
Paciente.prototype.obtenerEdad = function () {
    return this._edad;
}
Paciente.prototype.obtenerRut = function () {
    return this._rut;
}
Paciente.prototype.obtenerDiagnostico = function () {
    return this._diagnostico;
}

// Setter para cambiar el nombre del paciente
Paciente.prototype.cambiarNombrePaciente = function (nuevoNombrePaciente) {
    this._nombrePaciente = nuevoNombrePaciente;
}
Paciente.prototype.cambiarEdad = function (nuevaEdad) {
    this._edad = nuevaEdad;
}
Paciente.prototype.cambiarRut = function (nuevoRut) {
    this._rut = nuevoRut;
}
Paciente.prototype.cambiarDiagnostico = function (nuevoDiagnostico) {
    this._diagnostico = nuevoDiagnostico;
}

//Getter para obtener nombre de consultorios instanciados
Consultorio.prototype.obtenerNombreConsultorio = function () {
    return this._nombreConsultorio;
}

// Setter para agregar paciente a un arreglo de pacientes en el consultorio
Consultorio.prototype.agregarPaciente = function (paciente) {
    this._pacientes.push(paciente);
}

// Getter para obtener cada objeto paciente, osea todos los datos de los pacientes(usuarios) registrados
Consultorio.prototype.obtenerPacientes = function () {
    console.log('Pacientes registrados en:', this.obtenerNombreConsultorio());
    this._pacientes.forEach(function (paciente, index) {
        console.log("Paciente", index + 1);
        console.log("Nombre:", paciente.obtenerNombrePaciente());
        console.log("Edad:", paciente.obtenerEdad());
        console.log("Rut:", paciente.obtenerRut());
        console.log("Diagnóstico:", paciente.obtenerDiagnostico());
        console.log('_________________________');
    });
}

// Getter para buscar los datos de paciente por su nombre
Consultorio.prototype.obtenerPacientePorNombre = function (pacienteBuscado) {
    console.log('El paciente encontrado pertenece a:', this.obtenerNombreConsultorio());
    this._pacientes.forEach(function (paciente, index) {
        if (paciente.obtenerNombrePaciente() === pacienteBuscado) {
            console.log('Paciente encontrado por su nombre:');
            console.log("Paciente", index + 1);
            console.log("Nombre:", paciente.obtenerNombrePaciente());
            console.log("Edad:", paciente.obtenerEdad());
            console.log("Rut:", paciente.obtenerRut());
            console.log("Diagnóstico:", paciente.obtenerDiagnostico());
            console.log('_________________________');
        };
    });
}

// Creación de instancia de Paciente
const paciente1 = new Paciente("Pepe", 12, "20400500-2", "salmonela");
const paciente2 = new Paciente("Yorch", 85, "3200500-K", "flojera")

// Creación de instancia de Consultorio y adición del paciente1
const consultorio1 = new Consultorio('SAPU', [paciente1]);
const consultorio2 = new Consultorio('CESFAM', [paciente2])

// Agregar más pacientes al consultorio
consultorio1.agregarPaciente(new Paciente("Ana", 25, "20300600-3", "gripe"));
consultorio1.agregarPaciente(new Paciente("Juan", 40, "20200700-4", "fractura"));

// Obtener y mostrar pacientes en el consultorio
consultorio1.obtenerPacientes();
consultorio2.obtenerPacientes();

//Obtener pacientes por su nombre
consultorio1.obtenerPacientePorNombre('Ana');
consultorio2.obtenerPacientePorNombre('Yorch');
