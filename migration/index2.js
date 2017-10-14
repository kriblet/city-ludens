
module.exports = function(self){
    let category = self.models.mongodb.category;

    let categories = [
        {
            "_id" : "57a626f2a96ce8282050c739",
            "name" : "Agencias"
        },
        {
            "_id" : "57a62a9d8fbce92012dede69",
            "name" : "Inmobiliaria"
        },
        {
            "_id" : "57a62b2dec20fba412619993",
            "name" : "Agronomía"
        },
        {
            "_id" : "57a62c0aa275a5b01a1185e3",
            "name" : "Automotriz"
        },
        {
            "_id" : "57a633a3d253e9e32c2b7a56",
            "name" : "Restaurantes"
        },
        {
            "_id" : "57a63495cc2c466d2d39f761",
            "name" : "Turismo"
        },
        {
            "_id" : "57a634fb3e86df80252c30ba",
            "name" : "Servicios de refrigeración"
        },
        {
            "_id" : "57a634fe3e86df80252c30bb",
            "name" : "Materiales"
        },
        {
            "_id" : "57a635123e86df80252c30c1",
            "name" : "Salud"
        },
        {
            "_id" : "57a635373e86df80252c30cd",
            "name" : "Servicios profesionales"
        },
        {
            "_id" : "57a635443e86df80252c30d3",
            "name" : "Educación"
        },
        {
            "_id" : "57a635513e86df80252c30db",
            "name" : "Productos y servicios"
        },
        {
            "_id" : "57a6427bc307a08739ed94af",
            "name" : "Agronomía"
        },
        {
            "_id" : "57a642b3c307a08739ed94bb",
            "name" : "Productos y servicios"
        },
        {
            "_id" : "57a642d0c307a08739ed94bf",
            "name" : "Productos y Servicios"
        },
        {
            "_id" : "57a64335c307a08739ed94d3",
            "name" : "Inmobiliar�a"
        },
        {
            "_id" : "57a646abc307a08739ed953e",
            "name" : "",
        },
        {
            "_id" : "57a7902f8f41015c0b82614e",
            "name" : "Educación"
        },
        {
            "_id" : "57aa07aa07a9cb7c37c666b5",
            "name" : "Cultura"
        },
        {
            "_id" : "57aa07ee07a9cb7c37c666b6",
            "name" : "Resturantes"
        },
        {
            "_id" : "57aa08bcf890e8ff175d12ed",
            "name" : "Servicios Profesionales"
        },
        {
            "_id" : "57aa08f6f890e8ff175d12ee",
            "name" : "Agronomia"
        },
        {
            "_id" : "57aa08fbf890e8ff175d12ef",
            "name" : "Seguridad"
        },
        {
            "_id" : "57aa5368efcc02c025c49cd9",
            "name" : "Restaurante"
        },
        {
            "_id" : "57bde8f2dba57168230f2e05",
            "name" : "Medicina y Salud"
        },
        {
            "_id" : "57bde8f3dba57168230f2e06",
            "name" : "Oficios"
        },
        {
            "_id" : "57bde8f3dba57168230f2e07",
            "name" : "Entretenimiento"
        },
        {
            "_id" : "57bde8f3dba57168230f2e08",
            "name" : "Economía"
        },
        {
            "_id" : "57c72d93cf94dbc82361de95",
            "name" : "Productos Y Servicios"
        },
        {
            "_id" : "57c73387cf94dbc82361e228",
            "name" : "salud"
        }
    ];

    categories.forEach((c)=>{
        let newCategory = new category(c);
        newCategory.save((err)=>{
            console.log('save', c.name, err);
        })
    })

};

