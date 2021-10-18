import { Column, Model, Table } from "sequelize-typescript";

@Table
export class user extends Model {
    @Column
    name : string

    @Column({unique : true})
    email : string

    @Column
    password : string
}