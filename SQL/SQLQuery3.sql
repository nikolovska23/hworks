create database Mdb
go

use Mdb
go

create table Vraboteni(
	Id_Vraboten int primary key,
	[Ime I Prezime] nvarchar(30),
	[Datum na ragjanje] date constraint con check ([Datum na ragjanje] < dateadd(yyyy, -18, getdate())),
	[Datum na vrabotuvanje] date,
)

create table Klienti(
	Id_Klient int primary key,
	Naziv nvarchar(30),
	[Od koga e klient] date,
	Adresa nvarchar(30),
	Grad nvarchar(25),
	Telefon nvarchar(20)
)

create table Proizvodi(
	Id_Proizvod int primary key,
	[Naziv na proizvod] nvarchar(30),
	Proizvoditel nvarchar(30),
	[Zemja na poteklo] nvarchar(30)
)

create table Narachki(
	Id_Narachka int primary key,
	Id_Proizvod int foreign key references Proizvodi (Id_Proizvod) ,
	Id_Vraboten int foreign key references Vraboteni (Id_Vraboten),
	Id_Klient int foreign key references Klienti (Id_Klient),
	[Datum na narachka] date,
	[Vaznost na garancija] date constraint [DF_garancija] default (dateadd(yyyy, 2, getdate()))
)


insert into Klienti (Id_Klient,Naziv,[Od koga e klient],Grad, Telefon)
values(1,'aaa', '2005/05/05', 'Skopje', '078/345/654')

insert into Vraboteni(Id_Vraboten,[Ime I Prezime], [Datum na ragjanje])
values(1, 'aa aa', '2000/01/01') 

insert into Narachki(Id_Narachka,Id_Klient,Id_Vraboten, [Vaznost na garancija])
values(1,1,1,null)

insert into Narachki(Id_Narachka,Id_Klient,Id_Vraboten)
values(2,1,1)

select * from Narachki
