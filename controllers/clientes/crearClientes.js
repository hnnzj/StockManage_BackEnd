const { Op } = require("sequelize");
const db = require("../../database");

const crearClientes = async (req, res, next) => {
  const { nombre, apellido, telefono, email, direccion, ciudad, pais, estado } =
    req.body;

  try {
    const cliente = await db.Client.findOne({
      where: {
        [Op.or]: [
          {
            nombre,
          },
          { apellido },
          { email },
          { telefono },
        ],
      },
    });
    if (cliente) {
      res.json({
        msg: "El cliente ya existe!",
        data: [],
        ok: true,
      });
    } else {
      await db.Client.create({
        nombre,
        apellido,
        telefono,
        email,
        direccion,
        ciudad,
        pais,
        estado,
      });
      const data = await db.Client.findAll();
      res.json({
        msg: "Cliente creado correctamente!",
        data: data,
        ok: false,
      });
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = crearClientes;
