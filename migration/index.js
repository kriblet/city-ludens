module.exports = (self)=>{
    let subCategory = self.models.mongodb.subCategory;
    subcategories.forEach((c)=>{
        let newCategory = new subCategory(c);
        newCategory.save((err)=>{
            console.log('save', c.name, err);
        })
    })
};


subcategories = [
    {
        "_id" : "57bded5d02254f6c0d5cfba7",
        "name" : "Comida mexicana",
        "category" : "57a633a3d253e9e32c2b7a56",
        "tags" : [
            "gorditas",
            "pozole",
            "menudo",
            "enchiladas",
            "flautas",
            "cazuela",
            "mole",
            "aguasfrescas"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfba5",
        "name" : "Pizzas",
        "category" : "57a633a3d253e9e32c2b7a56",
        "tags" : [
            "hawaiana",
            "mexicana",
            "pepperoni",
            "jamón",
            "champiñones",
            "carnesrojas"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfba6",
        "name" : "Comida oriental",
        "category" : "57a633a3d253e9e32c2b7a56",
        "tags" : [
            "sushi",
            "cantonesa",
            "yakimeshi",
            "teriyaki",
            "rollos",
            "arrozfrito",
            "té",
            "aderezos"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfba8",
        "name" : "Taquerías",
        "category" : "57a633a3d253e9e32c2b7a56",
        "tags" : [
            "tacos",
            "mixtas",
            "salsas",
            "cebollitas",
            "paparellena",
            "verdura",
            "aguasfrescas",
            "refrescos"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfba9",
        "name" : "Comida rápida",
        "category" : "57a633a3d253e9e32c2b7a56",
        "tags" : [
            "tortas",
            "hamburguesas",
            "hotdogs",
            "papasfritas",
            "alitasadobadas",
            "banderillas"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbac",
        "name" : "Florerías",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "arreglos",
            "globos",
            "tarjetas",
            "ramos",
            "moños",
            "flores"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbaa",
        "name" : "Comida saludable",
        "category" : "57a633a3d253e9e32c2b7a56",
        "tags" : [
            "ensaladas",
            "malteadas",
            "baguettes",
            "sandwiches",
            "cocteldefrutas",
            "licuados",
            "jugos",
            "jugoverde"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbab",
        "name" : "Comida italiana",
        "category" : "57a633a3d253e9e32c2b7a56",
        "tags" : [
            "lasaña",
            "pastas",
            "sopas",
            "pizzas",
            "salami",
            "vinos",
            "postres"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbad",
        "name" : "Dulcerías",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "dulces",
            "frituras",
            "chamoy",
            "piñatas",
            "invitaciones",
            "desechables",
            "confeti"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbae",
        "name" : "Jugueterías",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "carritos",
            "muñecas",
            "pelotas",
            "rompecabezas",
            "canicas",
            "juegosdemesa"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbb0",
        "name" : "Zapaterías",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "zapatos",
            "zapatillas",
            "huaraches",
            "tenis",
            "sandalias",
            "plantillas",
            "calcetas"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbaf",
        "name" : "Salón de eventos",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "bocinas",
            "platillos",
            "meseros",
            "mesas",
            "sillas",
            "mantelería"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbb1",
        "name" : "Fruterías",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "manzanas",
            "platanos",
            "melón",
            "papaya",
            "naranjas",
            "peras",
            "sandías",
            "verduras"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbb2",
        "name" : "Renta de mobiliario",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "mesas",
            "sillas",
            "manteles",
            "tablones",
            "brincolines",
            "rocolas",
            "sonido"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbb3",
        "name" : "Cafeterías",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "café",
            "postres",
            "capuchino",
            "panesillos",
            "frappes",
            "té",
            "bocadillos"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbb5",
        "name" : "Mueblerías",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "comedor",
            "salas",
            "recámaras",
            "bases",
            "colchones",
            "alfombras",
            "cocinaintegral",
            "vitrinas",
            "escritorios",
            "closets"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbb4",
        "name" : "Agua Purificada",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "aguaembotellada",
            "garrafones",
            "purificación"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbb6",
        "name" : "Artículos para fiesta",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "globos",
            "antifaces",
            "serpentinas",
            "confetis",
            "dulceros",
            "inflables",
            "pelucas",
            "centrodemesas",
            "letreros",
            "desechables"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbb7",
        "name" : "Auto lavado",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "engrasado",
            "lavado",
            "encerado",
            "aspirado"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbb8",
        "name" : "Papelerías",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "hojas",
            "cartulinas",
            "plumas",
            "lápices, borradores",
            "sacapuntas",
            "colores",
            "plastilinas",
            "plumones",
            "libretas"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbb9",
        "name" : "Tiendas Departamentales",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "ropa",
            "zapatos",
            "electrodomésticos",
            "juguetes",
            "electrónica",
            "dulcería",
            "futasyverduras",
            "higiene"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbba",
        "name" : "Carnicerías",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "diezmillo",
            "res",
            "puerco",
            "machaca",
            "chicharrones",
            "carnitas",
            "palomilla",
            "cabrería"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbbc",
        "name" : "Cerrajerías",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "chapas",
            "llaves",
            "soldadura",
            "carros",
            "puertas",
            "duplicados"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbbb",
        "name" : "Pescaderías",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "camarones",
            "ostiones",
            "pulpo",
            "filetes",
            "callos",
            "cochito",
            "pescado",
            "calamar"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbbd",
        "name" : "Cremerías",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "queso",
            "crema",
            "salchichas",
            "jamón",
            "tocino",
            "huevos",
            "abarrotes"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbbe",
        "name" : "Boutique",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "ropa",
            "zapatos",
            "bolsas",
            "perfumes",
            "accesorios",
            "carteras"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbbf",
        "name" : "Gimnasio",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "aparatos",
            "bicicletas",
            "pesas",
            "caminadoras",
            "suplementos, proteínas",
            "vitaminas"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbc1",
        "name" : "Pastelerías",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "chocolate",
            "fresa",
            "vainilla",
            "cajetoso",
            "pay",
            "flan",
            "chocoflan"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbc0",
        "name" : "Librerías",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "revistas",
            "libros",
            "periódicos",
            "postales, historietas",
            "mapas",
            "bibliografías"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbc2",
        "name" : "Salón de belleza",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "shampoo",
            "maquillajes",
            "labiales",
            "tratamientos",
            "espejos",
            "extenciones",
            "tijeras",
            "secadora",
            "plancha",
            "ferros"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbc3",
        "name" : "Lavanderías",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "ropa",
            "sabanas",
            "colchas",
            "cobertores, edredones",
            "chamarras",
            "lavado",
            "secado"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbc4",
        "name" : "Panaderías",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "donas",
            "conchas",
            "biscochos",
            "bollitos",
            "panque",
            "leños",
            "cortadillos",
            "empanadas"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbc5",
        "name" : "Mensajería",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "documentos",
            "paquetes",
            "postales",
            "cajas",
            "dinero",
            "envíos"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbc6",
        "name" : "Tintorerías",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "planchado",
            "sastrería",
            "vestidos",
            "seda",
            "lino"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbc7",
        "name" : "Seguros",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "vida",
            "autos",
            "personales",
            "salud",
            "accidentes",
            "incendios",
            "créditos",
            "transportes"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbc8",
        "name" : "Servicios de limpieza",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "casas",
            "oficinas",
            "negocios",
            "aseo"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbc9",
        "name" : "Fumigación",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "plagas",
            "aspersora",
            "bichos",
            "tierras",
            "casas"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbca",
        "name" : "Venta de computadoras",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "bocinas",
            "mouse",
            "teclado",
            "laptop",
            "cpu",
            "monitor"
        ],
        
    },
    {
        "_id" : "57bded5d02254f6c0d5cfbcb",
        "name" : "Constructoras",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "casas",
            "departamentos",
            "edificios"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbcc",
        "name" : "Mantelería",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "cubresillas",
            "servilletas",
            "manteles",
            "cubiertos"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbd0",
        "name" : "Maderería",
        "category" : "57a634fe3e86df80252c30bb",
        "tags" : [
            "maderas",
            "aglomerado",
            "cimbra",
            "formaica",
            "vigas",
            "moduras",
            "triplay",
            "pegamento",
            "cambrin"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbcd",
        "name" : "Organizador de eventos",
        "category" : "57a635513e86df80252c30db",
        "tags" : [
            "montaje",
            "mantelería",
            "mobiliario",
            "fotografíayvideo",
            "decoración",
            "sonido"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbce",
        "name" : "Acabados de construcción",
        "category" : "57a634fe3e86df80252c30bb",
        "tags" : [
            "azulejos",
            "pisos",
            "baños",
            "pinturas",
            "mármol",
            "tirol"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbcf",
        "name" : "Construcción",
        "category" : "57a634fe3e86df80252c30bb",
        "tags" : [
            "cemento",
            "grava",
            "ladrillos",
            "blocks",
            "yeso",
            "barillas",
            "teja",
            "cal"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbd1",
        "name" : "Ferretería",
        "category" : "57a634fe3e86df80252c30bb",
        "tags" : [
            "tornillos",
            "chapas",
            "tuercas",
            "clavos",
            "lijas",
            "martillos",
            "bisagras",
            "cables"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbd3",
        "name" : "Agroquímicos",
        "category" : "57a62b2dec20fba412619993",
        "tags" : [
            "insecticidas",
            "herbicidas",
            "fertilizantes",
            "fungicidas",
            "acaricidas",
            "plaguicidas"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbd2",
        "name" : "Electrónica",
        "category" : "57a634fe3e86df80252c30bb",
        "tags" : [
            "bocinas",
            "celulares",
            "videojuegos",
            "audífonos, cámaras",
            "cargadores",
            "baterias",
            "cables"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbd4",
        "name" : "Agroindustrias",
        "category" : "57a62b2dec20fba412619993",
        "tags" : [
            "alimentosprocesados",
            "fabricas",
            "materiaprima",
            "procesos",
            "máquinas"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbd5",
        "name" : "Agro equipos",
        "category" : "57a62b2dec20fba412619993",
        "tags" : [
            "tractores",
            "cosechadoras",
            "rastras",
            "sembradoras",
            "trilladoras"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbd6",
        "name" : "Agropecuarios",
        "category" : "57a62b2dec20fba412619993",
        "tags" : [
            "pesca",
            "ganadería",
            "agricultura",
            "cultivos"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbd7",
        "name" : "Agroinsumos",
        "category" : "57a62b2dec20fba412619993",
        "tags" : [
            "semillas",
            "granos",
            "fertilizantes",
            "productos",
            "cosecha"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbd8",
        "name" : "Fertilizantes",
        "category" : "57a62b2dec20fba412619993",
        "tags" : [
            "orgánico, mineral",
            "químico, líquido",
            "one32",
            "surfacit",
            "amoníaco"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbd9",
        "name" : "Clínicas",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "consultas",
            "estudios",
            "cirujías",
            "pediatría",
            "hospitalización",
            "ortopedia"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbda",
        "name" : "Dentistas",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "consultas",
            "implantes",
            "placas",
            "braquets",
            "limpieza",
            "extracciones",
            "empastado",
            "blanqueamientodental"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbdb",
        "name" : "Nutriólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "planalimenticio",
            "dietas",
            "nutriciónysalud",
            "nutriciónclínica",
            "nutricióncelular",
            "nutricióndeportiva",
            "nutriciónfitness",
            "nutricióngourmet"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbdd",
        "name" : "Dermatólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "piel",
            "salud",
            "dermatitis",
            "tratamientoantiacné",
            "alergia",
            "cutis",
            "hongos",
            "peelings"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbdc",
        "name" : "Laboratorio",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "análisis",
            "pruebas",
            "adn",
            "glucosa",
            "colesterol",
            "triglicéridos",
            "perfilreumático",
            "vih",
            "reaccionesfebriles"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbde",
        "name" : "Farmacias",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "medicamento",
            "antibióticos",
            "inyecciones",
            "jarabes",
            "calmantes",
            "fármacos",
            "suspenciones",
            "pastillas",
            "pomadas",
            "ungüentos"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbdf",
        "name" : "Ginecólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "exploración",
            "menopausia",
            "esterilidad",
            "planificación",
            "alteraciones, papanicolau",
            "infertilidad",
            "infecciones"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbe1",
        "name" : "Alergólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "alergias",
            "asma",
            "dermatitis, inmunoterapia, rinitis",
            "sinusitis"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbe0",
        "name" : "Cardiólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "electrocardiograma, ecocardiograma",
            "monitoreoholter",
            "hipertensiónarterial",
            "taquicardía",
            "enfermedadesvasculares",
            "insuficienciacardiaca"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbe3",
        "name" : "Pediatras",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "consultas",
            "análisis",
            "niños",
            "recetas",
            "dulces"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbe2",
        "name" : "Urólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "infertilidad",
            "disfuncióneréctil",
            "patologíadepróstata",
            "vasectomía",
            "circuncisión",
            "eyaculaciónprecoz",
            "sangrado",
            "ets"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbe4",
        "name" : "Podólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "onicomicosis",
            "piedeatleta",
            "callos",
            "hongos",
            "pieplano",
            "uñas",
            "durezaenpie",
            "sudoración",
            "juanetes"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbe5",
        "name" : "Geriatras",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "hipertensión",
            "diabetes",
            "colesterol",
            "problemasarticulares",
            "pérdidadememoria",
            "fatiga",
            "escapesurinarios"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbe6",
        "name" : "Traumatólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "artritis, esguinces",
            "luxaciones",
            "contusiones",
            "fracturas",
            "rehabilitación",
            "ligamentos"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbe7",
        "name" : "Nefrólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "infecciones, hematuria",
            "nefritis, diálisis",
            "biopsiarenal, cateteres",
            "depuracióndesangre"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbe8",
        "name" : "Gastroenterólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "colitis",
            "cólicos",
            "gastritis",
            "gastroscopía",
            "colonoscopía",
            "hematemesis",
            "reflujo"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbe9",
        "name" : "Oftalmólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "cataratas",
            "miopía, infeccionesoculares",
            "nervioóptico",
            "trastornos, neoplasiasoculares",
            "óptica",
            "astigmatismo"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbea",
        "name" : "Proctólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "hemorroides",
            "fisuras",
            "trombosis",
            "verrugas",
            "picazónanal, anoscopía"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbeb",
        "name" : "Psiquiatras",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "depresión",
            "esquizofrenia",
            "estrés",
            "fobias",
            "bulimia",
            "anorexia",
            "autismo",
            "bipolaridad",
            "psicosis"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbed",
        "name" : "Otorrinolaringólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "acufenos",
            "otinnitus",
            "afasia",
            "operacióndeamigdalas",
            "cáncerdelaringe",
            "disfoníasorgánicas",
            "faringitis",
            "ronquera",
            "laringuitis",
            "rinoplastía",
            "vértigo",
            "oídos",
            "garganta"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbec",
        "name" : "Psicólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "trastornos",
            "tartamudeo",
            "drogadicción",
            "adicciones",
            "bajaautoestima",
            "bullying",
            "depresión",
            "disfunciónsexual",
            "estrés"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbee",
        "name" : "Reumatólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "artrosis",
            "dolorlumbrarcrónico",
            "osteoporosis",
            "artritis",
            "reumatoide",
            "tendinitis",
            "fibromialguia"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbef",
        "name" : "Obstetras",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "embarazos",
            "partosycesáreas",
            "cuidadospostparto"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbf0",
        "name" : "Hematólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "anemia",
            "leucemia",
            "plaquetas",
            "coagulacióndesangre",
            "hemofilia",
            "mieloma"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbf3",
        "name" : "Endocrinólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "hipo",
            "hipertiroidismo",
            "bocios",
            "nódulos",
            "tiroicleos",
            "cáncerdetiroide",
            "transtornosovaricos",
            "transtornostesticulares",
            "giniecomastia",
            "osteoporosis"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbf1",
        "name" : "Oncólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "tratamientos",
            "quimioterapias",
            "quistes",
            "deteccióndecáncer",
            "biopsias",
            "extraccióndetumores",
            "cáncer"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbf2",
        "name" : "Neumólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "toscrónica, neumonía",
            "asma",
            "fibrosisquística",
            "respiraciónruidosa",
            "apnea",
            "pulmones"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbf4",
        "name" : "Cirujanos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "plástica, cirugíareconstructiva",
            "mamoplastía",
            "implantesdesenos",
            "peelling",
            "rinoplastía",
            "lipoescultura",
            "vaginoplastia"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfbf7",
        "name" : "Anestesiólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "local",
            "regional",
            "general",
            "epidural"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbf5",
        "name" : "Angiólogos",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "calambres",
            "piernascansadas",
            "tobillos",
            "hormigueo",
            "problemascirculatorios",
            "ecografía",
            "varices"
        ],
        
    },
    {
        "_id" : "57bded5e02254f6c0d5cfbf6",
        "name" : "Enfermeros",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "inyecciones",
            "cuidadodeenfermos",
            "curaciones",
            "tarapia",
            "tratamientos",
            "rehabilitación"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfbf8",
        "name" : "Químico Farmacéutico",
        "category" : "57bde8f2dba57168230f2e05",
        "tags" : [
            "biología",
            "análisisclínicos",
            "microbiología",
            "aumentos"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfbf9",
        "name" : "Hoteles",
        "category" : "57a63495cc2c466d2d39f761",
        "tags" : [
            "cuartos",
            "recepción",
            "baños",
            "restaurante",
            "gimnasio",
            "spa",
            "albercas",
            "restaurantes",
            "televisión"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfbfa",
        "name" : "Líneas aéreas",
        "category" : "57a63495cc2c466d2d39f761",
        "tags" : [
            "agentedeviajes",
            "vuelos",
            "vigilancia",
            "equiaje",
            "traslado"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfbfc",
        "name" : "Deportes acuáticos",
        "category" : "57a63495cc2c466d2d39f761",
        "tags" : [
            "paseos",
            "competencias",
            "lanchas",
            "canoas",
            "motos",
            "surfistas",
            "kitesurfing",
            "snorkel",
            "kayak"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfbfb",
        "name" : "Tours",
        "category" : "57a63495cc2c466d2d39f761",
        "tags" : [
            "paisaje",
            "viajes",
            "guías",
            "transportes",
            "paseos",
            "tours",
            "actividadesrecreativas",
            "tirolesa"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfbfd",
        "name" : "Restaurant-bar",
        "category" : "57a63495cc2c466d2d39f761",
        "tags" : [
            "bebidas",
            "botanas",
            "cervezas",
            "música",
            "alitas",
            "papas",
            "tarros"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfbfe",
        "name" : "Actividades recreativas",
        "category" : "57a63495cc2c466d2d39f761",
        "tags" : [
            "paseos",
            "cuatrimotos",
            "tirolesa",
            "yate",
            "snorkel",
            "patinaje",
            "gotcha",
            "excursiones",
            "maratones",
            "deportes",
            "golf"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfbff",
        "name" : "Transporte y logística",
        "category" : "57a63495cc2c466d2d39f761",
        "tags" : [
            "camiones",
            "cajas",
            "torton",
            "mudanzas",
            "plataformas",
            "jaulas",
            "tarimas",
            "remolque",
            "tanque"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc01",
        "name" : "Academias de baile",
        "category" : "57a635443e86df80252c30d3",
        "tags" : [
            "ballet",
            "jazz",
            "hiphop",
            "danzafolklórica"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc00",
        "name" : "Agencias de viaje",
        "category" : "57a63495cc2c466d2d39f761",
        "tags" : [
            "paisajes",
            "tours",
            "turismo",
            "reservaciones",
            "alquiler",
            "guías",
            "turísticas"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc02",
        "name" : "Colegios",
        "category" : "57a635443e86df80252c30d3",
        "tags" : [
            "cursos",
            "maestros",
            "bilingüe",
            "preescolar",
            "primaria",
            "secundaria"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc03",
        "name" : "Capacitaciones",
        "category" : "57a635443e86df80252c30d3",
        "tags" : [
            "computación",
            "corteyconfección",
            "culturadebelleza",
            "carpintería",
            "asistenteejecutivo",
            "electricidad",
            "refrigeración"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc06",
        "name" : "Escuelas de artes marciales",
        "category" : "57a635443e86df80252c30d3",
        "tags" : [
            "karate",
            "taekwondo",
            "kungfu",
            "sumo",
            "boxeo",
            "artesmarciales",
            "taebo",
            "capoeira"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc04",
        "name" : "Escuelas de gastronomía",
        "category" : "57a635443e86df80252c30d3",
        "tags" : [
            "comidarápida",
            "comidavanguardista",
            "comidaregional",
            "gastronomíamolecular",
            "chef",
            "arteculinario"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc05",
        "name" : "Escuelas de artes plásticas",
        "category" : "57a635443e86df80252c30d3",
        "tags" : [
            "pintura",
            "esculturas",
            "grabado",
            "dibujo",
            "arquitecturas"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc07",
        "name" : "Escuelas de inglés",
        "category" : "57a635443e86df80252c30d3",
        "tags" : [
            "cursosdeidiomas",
            "certificación",
            "dinámicas",
            "gramática",
            "lenguaje"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc0a",
        "name" : "Escuelas de belleza",
        "category" : "57a635443e86df80252c30d3",
        "tags" : [
            "manicure",
            "colorimetría",
            "maquillaje",
            "cortes",
            "masajes",
            "peinados",
            "faciales",
            "tratamientoscorporales",
            "pedicure"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc09",
        "name" : "Escuelas de música",
        "category" : "57a635443e86df80252c30d3",
        "tags" : [
            "piano",
            "guitarra",
            "violin, saxofón",
            "canto",
            "solfeo"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc08",
        "name" : "Escuelas de computación",
        "category" : "57a635443e86df80252c30d3",
        "tags" : [
            "cursos",
            "talleres",
            "programas",
            "computadoras",
            "informática",
            "software"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc0b",
        "name" : "Escuelas de pintura",
        "category" : "57a635443e86df80252c30d3",
        "tags" : [
            "óleo",
            "acuarelas",
            "gisalpastel",
            "boceteo"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc0c",
        "name" : "Escuelas de actuación",
        "category" : "57a635443e86df80252c30d3",
        "tags" : [
            "cómica",
            "trágica",
            "infantil",
            "títeres",
            "teatro",
            "gramática",
            "mímico",
            "pedagógico",
            "escenario"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc0d",
        "name" : "Abogados",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "demandas, divorcios",
            "pensiónalimenticia",
            "despidosinjustificados",
            "negacióndeaumentos",
            "robos",
            "asesoramiento",
            "defensadeintereses",
            "potestad"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc0e",
        "name" : "Contadores públicos",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "asesoramientofiscal",
            "estadosfinancieros",
            "liquidación",
            "auditorías",
            "solvencias, facturación",
            "registrodeoperaciones",
            "balances"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc0f",
        "name" : "Fotógrafos",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "sesióndefotos",
            "videos",
            "photoshop, edición",
            "revelados",
            "impresión",
            "diseño"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc11",
        "name" : "Ingenieros Civiles",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "planos",
            "albañiles",
            "materiales",
            "proyectos"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc10",
        "name" : "Arquitectos",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "proyectos",
            "planos",
            "diseños",
            "organización"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc13",
        "name" : "Mercadólogos",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "investigación",
            "estrategias",
            "estudiosdemercado",
            "marcas",
            "publicidad, análisisfoda"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc12",
        "name" : "Lic. En Administración",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "procesos",
            "organización",
            "control",
            "metas",
            "estrategas, misión",
            "visión"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc16",
        "name" : "Diseñadores Gráficos",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "dibujos",
            "ideas",
            "creatividad",
            "sitiosweb",
            "diseños"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc14",
        "name" : "Publicistas",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "internet",
            "promociones",
            "proyectos",
            "marcas",
            "slogans",
            "banners",
            "comerciales",
            "spot, jingle"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc15",
        "name" : "Ingenieros Ambientales",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "naturaleza",
            "agua",
            "fauna",
            "flora",
            "aire",
            "contaminación",
            "investigación",
            "estrategias"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc17",
        "name" : "Lic. En Turismo",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "ventas",
            "viajes",
            "tours",
            "guíaturística",
            "transporte"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc18",
        "name" : "Lic. En Hotelería",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "turismo",
            "gastronomía",
            "hospedaje",
            "administración",
            "servicios"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc19",
        "name" : "Lic. En Artes",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "creación",
            "artística",
            "cultura",
            "creatividad",
            "pintura",
            "escultura",
            "danza",
            "canto"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc1b",
        "name" : "Ingenieros en software",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "programadores",
            "sistemas",
            "informática",
            "tecnologías",
            "sitioweb",
            "desarrollo",
            "optimización"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc1a",
        "name" : "Comunicólogos",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "comunicación",
            "difusión",
            "marketing",
            "medios",
            "empresarial",
            "contenidos",
            "correción"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc1c",
        "name" : "Lic. En Informática",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "organismos",
            "información",
            "software",
            "mantenimiento",
            "formateo"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc1d",
        "name" : "Biólogos",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "cientficos",
            " organismos",
            "biologia",
            "ciencia",
            "medioambiente",
            "florayfauna"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc1e",
        "name" : "Lic. En Mecatrónica",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "sistemas",
            "procesos",
            "innovación",
            "ingenieria",
            "robótica",
            "automatización",
            "diseño",
            "mecatrónico"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc1f",
        "name" : "Ingeniero en alimentos",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "nutrición",
            "procesos",
            "tecnología",
            "industrialización",
            "fabricación",
            "materiasprimasorgánicas",
            "envasados"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc20",
        "name" : "Ingeniero en biotecnología",
        "category" : "57a635373e86df80252c30cd",
        "tags" : [
            "tecnologías",
            "industrias",
            "farmacéutica",
            "organismos",
            "procesos",
            "ambiente",
            "biología"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc21",
        "name" : "Museos",
        "category" : "57aa07aa07a9cb7c37c666b5",
        "tags" : [
            "galerías",
            "arte",
            "cultura",
            "ciencia",
            "arqueología",
            "exhibición",
            "obras"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc22",
        "name" : "Galerías de arte",
        "category" : "57aa07aa07a9cb7c37c666b5",
        "tags" : [
            "esculturas",
            "cuadros",
            "historia",
            "cultura",
            "fotografía",
            "diseño"
        ],
        
    },
    {
        "_id" : "57bded5f02254f6c0d5cfc23",
        "name" : "Casas Culturales",
        "category" : "57aa07aa07a9cb7c37c666b5",
        "tags" : [
            "historia",
            "pinturas",
            "Literatura",
            "arte"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc24",
        "name" : "Teatros",
        "category" : "57aa07aa07a9cb7c37c666b5",
        "tags" : [
            "escenarios",
            "telón",
            "talento",
            "entretenimiento",
            "obras",
            "opera",
            "musicales",
            "guión"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc25",
        "name" : "Autos",
        "category" : "57a626f2a96ce8282050c739",
        "tags" : [
            "servicio",
            "mantenimiento",
            "venta",
            "autos",
            "comercialización"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc26",
        "name" : "Modelaje",
        "category" : "57a626f2a96ce8282050c739",
        "tags" : [
            "modelos",
            "edecanes",
            "pasarelas",
            "promociones",
            "servicio"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc27",
        "name" : "Publicidad",
        "category" : "57a626f2a96ce8282050c739",
        "tags" : [
            "campañaspublicitarias",
            "logos",
            "diseño",
            "web",
            "diseñográfico",
            "marketing",
            "comunicación",
            "creatividad",
            "relacionespúblicas"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc28",
        "name" : "Aduanas",
        "category" : "57a626f2a96ce8282050c739",
        "tags" : [
            "comercio",
            "aduanal",
            "exportación",
            "importación",
            "logística"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc29",
        "name" : "Alarmas",
        "category" : "57a62c0aa275a5b01a1185e3",
        "tags" : [
            "vehículo",
            "instalación",
            "seguridad",
            "estereos",
            "polarizados",
            "sonido"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc2b",
        "name" : "Taller mecánico",
        "category" : "57a62c0aa275a5b01a1185e3",
        "tags" : [
            "servicio",
            "reparación",
            "frenos",
            "alineación",
            "motor",
            "mantenimiento",
            "cambioaceite",
            "suspensiones",
            "baterias"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc2a",
        "name" : "Llanteras",
        "category" : "57a62c0aa275a5b01a1185e3",
        "tags" : [
            "neumáticos",
            "servicios",
            "ventas",
            "rines",
            "alineación",
            "amortiguadores",
            "instalación",
            "vehículo"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc2c",
        "name" : "Seguros",
        "category" : "57a62c0aa275a5b01a1185e3",
        "tags" : [
            "autos",
            "aseguradora",
            "contratos",
            "asegurador",
            "póliza"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc2d",
        "name" : "Vulcanizadoras",
        "category" : "57a62c0aa275a5b01a1185e3",
        "tags" : [
            "llantas",
            "reparación,neumáticos",
            "desponchadora",
            "parches",
            "servicios"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc30",
        "name" : "Eléctrico",
        "category" : "57a62c0aa275a5b01a1185e3",
        "tags" : [
            "mantenimiento",
            "reparación",
            "vehículo",
            "motor",
            "baterías",
            "servicio",
            "alternadores",
            "alineación",
            "luces"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc2e",
        "name" : "Refaccionarias",
        "category" : "57a62c0aa275a5b01a1185e3",
        "tags" : [
            "amortiguadores",
            "aceites",
            "baterías",
            "bandas",
            "autopartes",
            "mangueras",
            "ventas"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc32",
        "name" : "Pintura automotriz",
        "category" : "57a62c0aa275a5b01a1185e3",
        "tags" : [
            "autos",
            "acabados",
            "retoques",
            "pulido",
            "pintura",
            "lijado",
            "hojalatería",
            "estética",
            "mecánica"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc2f",
        "name" : "Stereos",
        "category" : "57a62c0aa275a5b01a1185e3",
        "tags" : [
            "sonidos",
            "bocinas,instalación",
            "autos",
            "audios",
            "reproductor",
            "auxiliar"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc31",
        "name" : "Polarizados",
        "category" : "57a62c0aa275a5b01a1185e3",
        "tags" : [
            "cristales",
            "venta",
            "instalación",
            "reparaciónestereos",
            "autos"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc34",
        "name" : "Carpintería",
        "category" : "57bde8f3dba57168230f2e06",
        "tags" : [
            "mesas",
            "sillas",
            "puertas",
            "closets",
            "reparación",
            "muebles",
            "madera"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc33",
        "name" : "Herrería",
        "category" : "57bde8f3dba57168230f2e06",
        "tags" : [
            "fabricación",
            "reparación",
            "instalación",
            "portones",
            "protecciones",
            "barandales",
            "estructuras",
            "puertas",
            "rejas",
            "cortinas",
            "canceles",
            "baño",
            "escaleras",
            "pasamanos",
            "ventanas"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc35",
        "name" : "Plomería",
        "category" : "57bde8f3dba57168230f2e06",
        "tags" : [
            "construcción",
            "tuberías",
            "alcantarillado",
            "tuberiasdegas",
            "escapedeagua",
            "fregaderos"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc36",
        "name" : "Jardinería",
        "category" : "57bde8f3dba57168230f2e06",
        "tags" : [
            "plantas",
            "siembra",
            "plantar",
            "cortarcésped",
            "regar",
            "cuidadoplantas",
            "diseñodejardín"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc37",
        "name" : "Pintura",
        "category" : "57bde8f3dba57168230f2e06",
        "tags" : [
            "diseño",
            "combinaciones",
            "barniz",
            "detallado",
            "paredes"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc3a",
        "name" : "Parques",
        "category" : "57bde8f3dba57168230f2e07",
        "tags" : [
            "bancas",
            "canchas",
            "columpios",
            "resbaladillas",
            "pasamanos",
            "paisaje"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc38",
        "name" : "Albañilería",
        "category" : "57bde8f3dba57168230f2e06",
        "tags" : [
            "construcción",
            "paredes",
            "muros",
            "canalizacón",
            "aperturadezanjas",
            "mezcla",
            "cemento",
            "techo",
            "enjarrado"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc39",
        "name" : "Tapiceros",
        "category" : "57bde8f3dba57168230f2e06",
        "tags" : [
            "asientos",
            "domésticos",
            "automóviles",
            "motocicletas",
            "instalaciónmuelles",
            "espumas",
            "fibrasvegetales",
            "telas"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc3b",
        "name" : "Clubes deportivos",
        "category" : "57bde8f3dba57168230f2e07",
        "tags" : [
            "gimnasia",
            "natación",
            "tennis",
            "voleibol",
            "basquetbol",
            "futbol",
            "fronton",
            "pelota"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc3c",
        "name" : "Centro comercial",
        "category" : "57bde8f3dba57168230f2e07",
        "tags" : [
            "ropa",
            "comidas",
            "zapaterías",
            "accesorios",
            "tiendaregalos",
            "cine",
            "electrónica"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc3e",
        "name" : "Boliche",
        "category" : "57bde8f3dba57168230f2e07",
        "tags" : [
            "bolas",
            "pinos",
            "comidas",
            "bebidas",
            "zapatos",
            "dulces",
            "mesasbillar"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc3d",
        "name" : "Centro de videojuegos",
        "category" : "57bde8f3dba57168230f2e07",
        "tags" : [
            "maquinitas",
            "controles",
            "bocinas",
            "consolas",
            "dulces"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc3f",
        "name" : "Pista de patinaje",
        "category" : "57bde8f3dba57168230f2e07",
        "tags" : [
            "patines",
            "andaderas",
            "vigilancia",
            "pistahielo",
            "música"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc40",
        "name" : "Cine",
        "category" : "57bde8f3dba57168230f2e07",
        "tags" : [
            "combos",
            "postres",
            "palomitas",
            "refrescos",
            "nachos",
            "hotdogs",
            "frappes",
            "café",
            "té",
            "dulces",
            "chocolates",
            "películas",
            "estrenos"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc41",
        "name" : "Casas de cambio",
        "category" : "57bde8f3dba57168230f2e08",
        "tags" : [
            "monedas",
            "crédito",
            "billetes",
            "dólares",
            "metales",
            "comprametales",
            "cheques",
            "venta",
            "compras"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc44",
        "name" : "Casas de empeño",
        "category" : "57bde8f3dba57168230f2e08",
        "tags" : [
            "dinero",
            "préstamos",
            "cadenas",
            "electródomesticos",
            "oro"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc42",
        "name" : "Bancos",
        "category" : "57bde8f3dba57168230f2e08",
        "tags" : [
            "ventanillas",
            "cajeros",
            "vigilancia",
            "transferencia",
            "monedas",
            "cheques",
            "billetes",
            "préstamos"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc43",
        "name" : "Financieras",
        "category" : "57bde8f3dba57168230f2e08",
        "tags" : [
            "liquidez",
            "solvencia",
            "rentabilidad",
            "préstamos",
            "crédito"
        ],
        
    },
    {
        "_id" : "57bded6002254f6c0d5cfc45",
        "name" : "Prestamistas",
        "category" : "57bde8f3dba57168230f2e08",
        "tags" : [
            "cheques",
            "dinero",
            "contratos",
            "interesés",
            "plazos",
            "aval"
        ],
    }
];


