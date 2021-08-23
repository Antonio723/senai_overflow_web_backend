const {Model, DataTypes} = require("sequelize")

class Post extends Model(){

    static init(connecttion){
        super.init(
            {
                title: DataTypes.STRING,
                description: DataTypes.STRING,
                image: DataTypes.STRING,
                gist: DataTypes.STRING,
            },
            {
                connecttion
            }
        )
    }

    static associations(){
        
    }
}



module.exports = Post;