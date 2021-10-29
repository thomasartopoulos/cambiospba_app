var dataset = ee.Image("Tsinghua/FROM-GLC/GAIA/v10")
var dataset = dataset.clip(partidos)
var shown = false; // true or false, 1 o 0 
var opacity = 1; // entre [0-1]
var nameLayer = 'Partidos de la Provincia de Buenos Aires'; // string
var visParams = {color: 'red', fillColor: 'transparent'}; // dictionary
Map.addLayer(partidos, visParams, nameLayer, shown, opacity);

var visualization = {
  bands: ['change_year_index'], // tomamos las bandas del dataset
  min: 0.0,
  max: 34.0,
  palette: [     // armamos la paleta de colores
    "19ff00","4af500","62ea00","72e000","7ed600","87cc00",
    "8fc200","94b800","98ae00","9ba400","9d9a00","9e9100",
    "9d8800","9c7f00","9a7600","976d00","946500","905d00",
    "8b5500","854d00","7f4607","78400d","713a11","693414",
    "612e16","582917","4f2517","462117","3d1d17","341915",
    "2a1614","211211","180d0d","0a0707",]};
    

Map.setCenter(-61.11575654, -36.23450026, 11); // ponemos el centro en San Carlos de Bolivar
Map.addLayer(dataset, visualization, "Change year index");
var Etiquetas = [
  '2018',  "2017",  "2016", "2015",  "2014",  "2013",  "2012",  "2011",  "2010",  
  "2009",  "2008",  "2007", "2006", "2005",  "2004",  "2003",  "2002",  "2001",  
  "2000",  "1999",  "1998", "1997",   "1996",  "1995",  "1994",  "1993",  "1992", 
  "1991",  "1990",  "1989",  "1988",  "1987", "1986",  "1985",  ];
  
var Titulo=ui.Label({
            value:'Cambios en la superficie de la Provincia de Buenos Aires',
            style: {fontWeight:'bold', fontSize:'20px' ,margin:'0px 0px 15px 0px',}});
var Leyenda=ui.Panel({
            style: {position: 'bottom-left', padding: '10px', height:'300px', width:'200px'}});
            Leyenda.add(Titulo);

var Simbologia= ["19ff00","4af500","62ea00","72e000","7ed600","87cc00",
    "8fc200","94b800","98ae00","9ba400","9d9a00","9e9100",
    "9d8800","9c7f00","9a7600","976d00","946500","905d00",
    "8b5500","854d00","7f4607","78400d","713a11","693414",
    "612e16","582917","4f2517","462117","3d1d17","341915",
    "2a1614","211211","180d0d","0a0707"];

var Simbolos= function(simbolo,texto){
var TextoLeyenda= ui.Label({
                  value:texto,
                  style:{margin: '6px 0px 10px 15px'}});
var CajaLeyenda= ui.Panel({
                  style:{ backgroundColor: "#" + simbolo ,
                  padding: '15px',
                  margin: '0px 0px 6px 0px'}});

var AñosyColores= ui.Panel({
                  widgets: [CajaLeyenda,TextoLeyenda],
                  style: {height: '20px', width: '80px', color:'black', fontSize: '20px', margin:'5px'},
                  layout: ui.Panel.Layout.Flow('horizontal')});
                  return AñosyColores  
                  };
                  for (var i = 0; i < 34; i++) {Leyenda.add(Simbolos(Simbologia[i], Etiquetas[i]));}

// Ver de retocar el I para que sea una function de size
Map.add(Leyenda);

