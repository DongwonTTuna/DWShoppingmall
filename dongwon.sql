/*Require Mysql 8*/

drop database if exists dongwonmall;
drop user dongwon@localhost;
create database dongwonmall default character set utf8 collate utf8_general_ci;
create user 'dongwon'@'localhost' identified with mysql_native_password by 'thisisadminpassword';
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
    id int auto_increment,
    loginid varchar(255) not null,
    cart varchar(999), 
    orderlist varchar(999),
    order_price varchar(999),
    primary key (id, loginid)
);


create table product(
    p_id int auto_increment primary key,
    p_name varchar(255) not null,
    p_price int not null,
    p_description varchar(255) not null
);

insert into login_table values(null, 'ttuna0790@gmail.com', 'thisismypassword', 'ピーナツ', null, null);
insert into user_detail values(null, null,null,null);