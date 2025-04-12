// CONFIGURAR LA VISUALIZACION DE INICIO (PRIMERA VISUAL AL CARGAR LA PAGINA)
Q3D.Config.allVisible = true;
Q3D.Config.viewpoint = {
  lookAt: { // POSICION observada
    x: -59, // Ajusta según sea necesario
    y: -37, // Ajusta según sea necesario
    z: 0
  },
  pos: { // DESDE DONDE SE MIRA
    x: -59, // Ajusta según sea necesario
    y: -38, // Ajusta según sea necesario
    z: 15000
  }
};
Q3D.Config.localMode = true;

var container = document.getElementById("view"),
    app = Q3D.application,
    gui = Q3D.gui;

app.init(container);       // initialize viewer

// ELECCION DEL MAPA
// PARA CAMBIAR DE MAPA MODIFICAR LA RUTA (ahora es BS porque muestra a Buenos Aires)
// cargar la escena
app.loadSceneFile("./data/index/BS.js", function (scene) {
  // el archivo de la escena ha sido cargado
  app.start();
}, function (scene) {
  // todos los archivos relevantes han sido cargados

});