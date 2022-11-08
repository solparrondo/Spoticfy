const conn = require("../db");

const getCanciones = (_, res) => {
    // Completar con la consulta que devuelve todas las canciones
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        [
            {
                "id": "Id de la canción",
                "nombre": "Nombre de la canción",
                "nombre_artista": "Id del artista",
                "nombre_album": "Id del album",
                "duracion": "Duración de la canción",
                "reproducciones": "Reproducciones de la canción"
            },
            {
                "id": "Id de la canción",
                "nombre": "Nombre de la canción",
                "nombre_artista": "Id del artista",
                "nombre_album": "Id del album",
                "duracion": "Duración de la canción",
                "reproducciones": "Reproducciones de la canción"
            },
            ...
        ]
    */

        conn.query("SELECT * FROM canciones", (err, rows) => {
            if (err) {
                console.error("Error: ", err);
                return;
            }
        
            res.send(rows);
        });
};

const getCancion = (req, res) => {
    // Completar con la consulta que devuelve una canción
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        {
            "id": "Id de la canción",
            "nombre": "Nombre de la canción",
            "nombre_artista": "Id del artista",
            "nombre_album": "Id del album",
            "duracion": "Duración de la canción",
            "reproducciones": "Reproducciones de la canción"
        }
    */

        const {id} = req.params;
        
        conn.query("SELECT * FROM canciones WHERE id = ?", [id], (err, rows) => {
            if (err) {
                console.error("Error: ", err);
                return;
            }
        
            res.send(rows);
        });
};

const createCancion = (req, res) => {
    // Completar con la consulta que crea una canción
    // Recordar que los parámetros de una consulta POST se encuentran en req.body
    // Deberían recibir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre de la canción",
            "album": "Id del album",
            "duracion": "Duración de la canción",
        }
    */
    // (Reproducciones se inicializa en 0)

        const {nombre, album, duracion} = req.body;
        conn.query("INSERT INTO canciones (nombre, album, duracion) VALUES (?, ?, ?) ", [nombre, album, duracion], (err, rows) => {
            if (err) {
                console.error("Error: ", err);
                return;
            }
        
            res.send("Se ha creado correctamente");
        });
};

const updateCancion = (req, res) => {
    // Completar con la consulta que actualiza una canción
    // Recordar que los parámetros de una consulta PUT se encuentran en req.body
    // Deberían recibir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre de la canción",
            "album": "Id del album",
            "duracion": "Duración de la canción",
        }
    */
    // (Reproducciones no se puede modificar con esta consulta)

    const {id} = req.params;
    const {nombre, album, duracion} = req.body;

    conn.query ("UPDATE canciones SET nombre = ?, album = ?, duracion = ? WHERE id = ?", [nombre, album, duracion, id], (err, rows) => {
        if (err){
            console.log("Error: ", err)
            return;
        }

        res.send ("Se han actualizado correctamente");
    });
};

const deleteCancion = (req, res) => {
    // Completar con la consulta que elimina una canción
    // Recordar que los parámetros de una consulta DELETE se encuentran en req.params

    const {id} = req.params;
    conn.query ("DELETE FROM canciones WHERE id = ?", [id], (err, rows) => {
        if (err){
            console.log("Error: ", err)
            return;
        }

        res.send ("Se ha eliminado correctamente");
    });
};

const reproducirCancion = (req, res) => {
    // Completar con la consulta que aumenta las reproducciones de una canción
    // En este caso es una consulta PUT, pero no recibe ningún parámetro en el body, solo en los params

    const {id} = req.params;
    conn.query ("UPDATE canciones SET duracion = duracion + 1 WHERE id = ?", [duracion, id], (err, rows) => {
        if (err){
            console.log("Error: ", err)
            return;
        }

        res.send ("Se ha actualizado correctamente");
    });

};

module.exports = {
    getCanciones,
    getCancion,
    createCancion,
    updateCancion,
    deleteCancion,
    reproducirCancion,
};
