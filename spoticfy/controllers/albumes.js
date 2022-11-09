const conn = require("../db");

const getAlbumes = (_, res) => {
    // Completar con la consulta que devuelve todos los albumes
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        [
            {
                "id": 1,
                "nombre": "Nombre del album",
                "nombre_artista": "Nombre del artista"
            },
            {
                "id": 2,
                "nombre": "Nombre del album",
                "nombre_artista": "Nombre del artista"
            },
            ...
        ]
    */

        conn.query("SELECT * FROM albumes", (err, rows) => {
            if (err) {
                console.error("Error: ", err);
                return;
            }
        
            res.send(rows);
        });
};

const getAlbum = (req, res) => {
    // Completar con la consulta que devuelve un album por id
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        {
            "id": 1,
            "nombre": "Nombre del album",
            "nombre_artista": "Nombre del artista"
        }
    */


    const {id} = req.params;

    conn.query("SELECT * FROM albumes WHERE id = ?", [id], (err, rows) => {
        if (err) {
            console.error("Error: ", err);
            return;
        }
    
        res.send(rows);
    });

    

};

const createAlbum = (req, res) => {
    // Completar con la consulta que crea un album
    // Recordar que los parámetros de una consulta POST se encuentran en req.body
    // Deberían recbir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del album",
            "artista": "Id del artista"
        }
    */

    const {nombre, artista} = req.body;
    console.log(req.body)
    conn.query("INSERT INTO albumes (nombre, artista) VALUES (?,?) ", [nombre, artista], (err) => {
        if (err) {
            console.error("Error: ", err);
            return;
        }
    
        res.send("Se ha creado correctamente");
    });
};

const updateAlbum = (req, res) => {
    // Completar con la consulta que actualiza un album
    // Recordar que en este caso tienen parámetros en req.params (el id) y en req.body (los demás datos)
    // Deberían recbir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del album",
            "artista": "Id del artista"
        }
    */

    const {id} = req.params;
    const {nombre, artista} = req.body;

    conn.query ("UPDATE albumes SET nombre = ?, artista = ? WHERE id = ?", [nombre, artista, id], (err) => {
        if (err){
            console.log("Error: ", err)
            return;
        }

        res.send ("Se han actualizado correctamente");
    });
};

const deleteAlbum = (req, res) => {
    // Completar con la consulta que elimina un album
    // Recordar que los parámetros de una consulta DELETE se encuentran en req.params

    const {id} = req.params;
    conn.query ("DELETE FROM albumes WHERE id = ?", [id], (err) => {
        if (err){
            console.log("Error: ", err)
            return;
        }

        res.send ("Se ha eliminado correctamente");
    });
};

const getCancionesByAlbum = (req, res) => {
    // Completar con la consulta que devuelve las canciones de un album
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getCanciones

    const {id} = req.params;
    conn.query ("SELECT * FROM canciones WHERE album = ?", [id], (err, rows) => {
        if (err){
            console.log("Error: ", err)
            return;
        }

        res.send (rows);
    });

  
};

module.exports = {
    getAlbumes,
    getAlbum,
    createAlbum,
    updateAlbum,
    deleteAlbum,
    getCancionesByAlbum,
};
