create database if not exists burgers_db;

use burgers_db;

create table burgers (
    id int(10) auto_increment not null,
    burger_name varchar(255) not null,
    devoured bool default false,
    primary key (id)
);
