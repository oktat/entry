create database entry
default character set utf8
collate utf8_hungarian_ci;

grant all privileges
on entry.* 
to entry@localhost
identified by 'titok';

use entry;

create table groups (
    id int not null primary key auto_increment,
    name varchar(50)
);
create table students (
    id int not null primary key auto_increment,
    name varchar(50),
    groupId int
);
create table entries (
    id int not null primary key auto_increment,
    date date,
    studentId int
);
