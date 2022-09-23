
-- Creating databse for postgresql

Create database mdb;
drop table mdb if exists;

-- Creating table users

    create table users(
        user_id serial not null primary key,
        user_first_name text not null,
        user_last_name text not null,
        user_age smallint not null,
        user_isfree varchar(64) not null,
        user_created_at timestamptz DEFAULT CURRENT_TIMESTAMP
    );
    
--Creating table books

create table books(
    book_id serial not null primary key,
    book_title text not null,
    book_author text not null,
    book_created_at timestamptz DEFAULT CURRENT_TIMESTAMP,
    user_ref_id int,
        FOREIGN KEY(user_ref_id)
        REFERENCES users(user_id)   
        ON DELETE CASCADE
);


--Crating new users

     insert into users(user_first_name, user_last_name,user_age, user_isfree) values('Bob','Davidson', 21 , 'false' );
     insert into users(user_first_name, user_last_name,user_age, user_isfree) values('Alex','Martinson', 21 , 'true' );

     insert into books(book_title,book_author, user_ref_id ) values('Clean Architecture', 'Rober Martin', 2);
     insert into books(book_title,book_author, user_ref_id ) values('Otgan kunlar', 'Otkir hoshimov', 2);

     insert into books(book_title,book_author, user_ref_id ) values('In the heard of the sea', 'Nathaniel Philbrick', 1);
     insert into books(book_title,book_author, user_ref_id ) values('Winter Sister', 'Rober Oliviera', 1);

-- Creating 3 part many to many table 

Create table user_books(
    user_book_id serial not null primary key,
    user_id int REFERENCES users(user_id),
    book_id int REFERENCES books(book_id)
)

-- selecting many to many user books and book users


SELECT 
  u.user_id,
  u.user_first_name,
  b.book_title,
  b.book_author
FROM
  user_books ub
INNER JOIN
  users u
ON
  u.user_id = ub.user_id
INNER JOIN
  books b
ON
  b.book_id = ub.book_id;



-- adding book to user


insert into user_books(user_id, book_id) values(1, 1);
insert into user_books(user_id, book_id) values(1, 2);
insert into user_books(user_id, book_id) values(2, 1);
insert into user_books(user_id, book_id) values(2, 2);

  
  
  





















