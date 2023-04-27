'use strict';

import {Model} from 'sequelize';

interface ProjectAttributes{
  id:number,
  title:string,
  status:string
}


module.exports = (sequelize:any, DataTypes:any) => {
  class Project extends Model<ProjectAttributes> implements ProjectAttributes {
    id!:number;
    title!:string;
    status!:string;    
    static associate(models:any) {
      // define association here
      Project.belongsToMany(models.User,{
        through:'ProjectUser'
      })
    }
  }
  Project.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    title:{
      type:DataTypes.STRING,
      allowNull:false      
    },
    status:{
      type:DataTypes.STRING,
      allowNull:false      
    }
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};