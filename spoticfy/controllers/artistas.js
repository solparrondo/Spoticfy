const conn = require("../db");

const getArtistas = (_, res) => {
    // Completar con la consulta que devuelve todos los artistas
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        [
            {
                "id": "Id del artista",
                "nombre": "Nombre del artista"
            },
            {
                "id": "Id del artista",
                "nombre": "Nombre del artista"
            },
            ...
        ]
    */
    
    conn.query("SELECT * FROM artistas", (err, rows) => {
        if (err) {
            console.error("Error: ", err);
            return;
        }
    
        res.send(rows);
    });
    
};

const getArtista = (req, res) => {
    // Completar con la consulta que devuelve un artista
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        {
            "id": "Id del artista",
            "nombre": "Nombre del artista"
        }
    */

        const {id} = req.params;

        conn.query("SELECT * FROM artistas WHERE id = ?", [id], (err, rows) => {
            if (err) {
                console.error("Error: ", err);
                return;
            }
        
            res.send(rows);
        });
};

const createArtista = (req, res) => {
    // Completar con la consulta que crea un artista
    // Recordar que los parámetros de una consulta POST se encuentran en req.body
    // Deberían recibir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del artista",
        }
    */

        const {nombre} = req.body;
        conn.query("INSERT INTO artistas (nombre) VALUES (?) ", [nombre], (err, rows) => {
            if (err) {
                console.error("Error: ", err);
                return;
            }
        
            res.send("Se ha creado correctamente", rows);
        });
};

const updateArtista = (req, res) => {
    // Completar con la consulta que actualiza un artista
    // Recordar que en este caso tienen parámetros en req.params (el id) y en req.body (los demás datos)
    // Deberían recibir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del artista"
        }
    */

        const {id} = req.params;
        const {nombre, artista} = req.body;

        conn.query ("UPDATE artistas SET nombre = ?, artista = ? WHERE id = ?", [nombre, artista, id], (err, rows) => {
            if (err){
                console.log("Error: ", err)
                return;
            }
    
            res.send ("Se han actualizado correctamente", rows);
        });
};

const deleteArtista = (req, res) => {
    // Completar con la consulta que elimina un artista
    // Recordar que los parámetros de una consulta DELETE se encuentran en req.params

    const {id} = req.params;
    conn.query ("DELETE FROM artistas WHERE id = ?", [id], (err, rows) => {
        if (err){
            console.log("Error: ", err)
            return;
        }

        res.send ("Se ha eliminado correctamente", rows);
    });


};

const getAlbumesByArtista = (req, res) => {
    // Completar con la consulta que devuelve las canciones de un artista 
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getAlbumes
};

const getCancionesByArtista = (req, res) => {
    // Completar con la consulta que devuelve las canciones de un artista
    // (tener en cuenta que las canciones están asociadas a un álbum, y los álbumes a un artista)
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getCanciones
};

module.exports = {
    getArtistas,
    getArtista,
    createArtista,
    updateArtista,
    deleteArtista,
    getAlbumesByArtista,
    getCancionesByArtista,
};
