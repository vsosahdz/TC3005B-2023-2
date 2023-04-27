'use strict';

import {Model} from 'sequelize';

interface ProjectUserAttributes{
  ProjectId:number,
  UserId:string,
  budget:number
}


module.exports = (sequelize:any, DataTypes:any) => {
  class ProjectUser extends Model<ProjectUserAttributes> implements ProjectUserAttributes {
    ProjectId!:number;
    UserId!:string;
    budget!:number;   
    static associate(models:any) {
      // define association here      
    }
  }
  ProjectUser.init({
    ProjectId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      references:{
        model:'Project',
        key:'id'
      }
    },
    UserId:{
      type:DataTypes.STRING,
      allowNull:false,
      primaryKey:true,
      references:{
        model:'User',
        key:'awsCognitoId'
      }      
    },
    budget:DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'ProjectUser',
  });
  return ProjectUser;
};