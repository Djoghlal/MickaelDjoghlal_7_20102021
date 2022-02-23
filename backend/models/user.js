module.exports = (sequelize, Datatypes) => {
    //Création des champs de la table User
    const User = sequelize.define(
        "users", {
            id: { 
                autoIncrement: true,
                type: Datatypes.INTEGER,
                allowNull: false,
                primaryKey: true
            }, 

            name: { 
                type: Datatypes.STRING(255),
                allowNull: false,
                defaultValue: "Anonyme",
            },

            password: {
                type: Datatypes.STRING(120),
                allowNull: false
            },

            email: {
                type: Datatypes.STRING(100),
                allowNull: false,
                unique: "email_UNIQUE"
            },

            rang: {
                type: Datatypes.TINYINT,
                allowNull: false,
                defaultValue: 1
            },

            dateOfBirth: {
                type: Datatypes.DATE,
                allowNull: true
            },

            hiringDate: {
                type: Datatypes.DATE,
                allowNull: true
            },

            job: {
                type: Datatypes.STRING(255),
                allowNull: true
            },

            img: {
                type: Datatypes.STRING(255),
                allowNull: false,
                defaultValue: "http://localhost:3000/images/avatar.png"
            }
        },

        {
            sequelize,
            tableName: "users",
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
                {
                    name: "email_UNIQUE",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "email" }],
                },
            ],
        }
    )

    return User;
}