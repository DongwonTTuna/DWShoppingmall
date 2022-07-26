drop database if exists dongwonmall;
DROP USER dongwon@localhost;
create database dongwonmall default character set utf8 collate utf8_general_ci;
create user 'dongwon'@'localhost' identified WITH mysql_native_password by 'thisisadminpassword';
grant all on dongwonmall.* to 'dongwon'@'localhost';
use dongwonmall;

create table login_table(
    id int auto_increment primary key,
    loginid varchar(255) not null,
    passwd varchar(255) not null,
    nickname varchar(255) not null,
    expires int,
    randomid int
);

create table user_detail(
    id int auto_increment primary key,
    cart varchar(999), 
    orderlist varchar(999),
    order_price varchar(999)
);


create table product(
    p_id int auto_increment primary key,
    p_name varchar(255) not null,
    p_price int not null,
    p_description varchar(255) not null
);

insert into login_table values(null, 'ttuna0790@gmail.com', 'thisismypassword', 'ピーナツ', null, null);
insert into user_detail values(null, null,null,null);

DELIMITER $$
DROP PROCEDURE IF EXISTS Regestoration $$
CREATE PROCEDURE Regestoration (
    loginid varchar(255),
    passwd varchar(255),
    nickname varchar(255),
    email varchar(255),
)
BEGIN
END$$
DELIMITER ;
DELIMITER $$
DROP PROCEDURE IF EXISTS GetLogin $$
CREATE PROCEDURE GetLogin(
    loginid varchar(255),
    passwd varchar(255),
)
DELIMITER ;
