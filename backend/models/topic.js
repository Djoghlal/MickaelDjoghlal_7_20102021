module.exports = (sequelize, Datatypes) => {
    //Création des champs de la table
    const Topic = sequelize.define(
        "topics", {
            id: { 
                autoIncrement: true,
                type: Datatypes.INTEGER,
                allowNull: false,
                primaryKey: true
            }, 

            userId: {
                type: Datatypes.INTEGER,
                allowNull: false,
                references: {
                    model: "users",
                    key: "id",
                }
            },

            // creator: { 
            //     type: Datatypes.STRING(255),
            //     allowNull: false
            // },

            // dateCreate: {
            //     type: Datatypes.DATE(NOW),
            //     allowNull: false
            // },

            topic: {
                type: Datatypes.TEXT,
                allowNull: false
            }
        },

        {
            sequelize,
            tableName: "topics",
            timestamps: true,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
                {
                    name: "fk_topics_users_idx",    //Clé étrangère va de la table topics vers la table users.
                    using: "BTREE",
                    fields: [{ name: "userId" }],   //Le résultat va dans le champ userId.
                },
            ],
        }
    )

    return Topic;
}