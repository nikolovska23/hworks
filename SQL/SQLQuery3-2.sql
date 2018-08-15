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

insert into Klienti (Id_Klient,Naziv,[Od koga e klient],Grad, Telefon)
values(2,'aab', '2018/02/05', 'Tetovo', '078/345/654')

insert into Klienti (Id_Klient,Naziv,[Od koga e klient],Grad, Telefon)
values(3,'abb', '2018/03/22', 'Skopje', '078/345/654')

insert into Klienti (Id_Klient,Naziv,[Od koga e klient],Grad, Telefon)
values(4,'bbb', '2017/03/28', 'Veles', '078/345/654')

insert into Klienti (Id_Klient,Naziv,[Od koga e klient],Grad, Telefon)
values(5,'bba', '2017/08/04', 'Bitola', '078/345/654')

insert into Klienti (Id_Klient,Naziv,[Od koga e klient],Grad, Telefon)
values(6,'baa', '2016/05/08', 'Skopje', '078/345/654')

insert into Klienti (Id_Klient,Naziv,[Od koga e klient],Grad, Telefon)
values(7,'ccc', '2018/02/21', 'Tetovo', '078/345/654')

insert into Klienti (Id_Klient,Naziv,[Od koga e klient],Grad, Telefon)
values(8,'ddd', '2011/06/04', 'Skopje', '078/345/654')

insert into Klienti (Id_Klient,Naziv,[Od koga e klient],Grad, Telefon)
values(9,'eee', '2018/04/01', 'Skopje', '078/345/654')

insert into Klienti (Id_Klient,Naziv,[Od koga e klient],Grad, Telefon)
values(10,'fff', '2006/05/05', 'Kumanovo', '078/345/654')

insert into Klienti (Id_Klient,Naziv,[Od koga e klient],Grad, Telefon)
values(11,'makk', '2017/07/05', 'Kumanovo', '078/302/222')

insert into Klienti (Id_Klient,Naziv,[Od koga e klient],Grad, Telefon)
values(12,'mak', '2016/06/05', 'Kumanovo', '078/305/654')



insert into Vraboteni(Id_Vraboten,[Ime I Prezime], [Datum na ragjanje])
values(1, 'aa aa', '2000/01/01') 

insert into Vraboteni(Id_Vraboten,[Ime I Prezime], [Datum na ragjanje])
values(2, 'bb bb', '1980/03/05') 

insert into Vraboteni(Id_Vraboten,[Ime I Prezime], [Datum na ragjanje])
values(3, 'cc cc', '1985/07/01') 

insert into Vraboteni(Id_Vraboten,[Ime I Prezime], [Datum na ragjanje])
values(4, 'dd dd', '1993/07/09') 

insert into Vraboteni(Id_Vraboten,[Ime I Prezime], [Datum na ragjanje])
values(5, 'ee ee', '1987/05/01') 

insert into Vraboteni(Id_Vraboten,[Ime I Prezime], [Datum na ragjanje])
values(6, 'ff ff', '1977/08/03') 

insert into Vraboteni(Id_Vraboten,[Ime I Prezime], [Datum na ragjanje])
values(7, 'gg gg', '1989/02/01') 

insert into Vraboteni(Id_Vraboten,[Ime I Prezime], [Datum na ragjanje])
values(8, 'hh hh', '1995/05/05') 




insert into Proizvodi(Id_Proizvod,[Naziv na proizvod],[Zemja na poteklo])
values(1, 'pr1', 'Makedonija')

insert into Proizvodi(Id_Proizvod,[Naziv na proizvod],[Zemja na poteklo])
values(2, 'pr2', 'Makedonija')

insert into Proizvodi(Id_Proizvod,[Naziv na proizvod],[Zemja na poteklo])
values(3, 'pr3', 'Srbija')

insert into Proizvodi(Id_Proizvod,[Naziv na proizvod],[Zemja na poteklo])
values(4, 'pr4', 'Germanija')

insert into Proizvodi(Id_Proizvod,[Naziv na proizvod],[Zemja na poteklo])
values(5, 'pr5', 'Turcija')





insert into Narachki(Id_Narachka,Id_Proizvod,Id_Klient,Id_Vraboten, [Vaznost na garancija])
values(1,2,1,1,null)

insert into Narachki(Id_Narachka,Id_Proizvod,Id_Klient,Id_Vraboten, [Vaznost na garancija])
values(2,3,4,1, '2018/04/25')

insert into Narachki(Id_Narachka,Id_Proizvod,Id_Klient,Id_Vraboten, [Vaznost na garancija])
values(3,3,5,2, '2018/04/25')

insert into Narachki(Id_Narachka,Id_Proizvod,Id_Klient,Id_Vraboten, [Vaznost na garancija])
values(4,4,4,6, '2018/04/27')

insert into Narachki(Id_Narachka,Id_Proizvod,Id_Klient,Id_Vraboten, [Vaznost na garancija])
values(5,4,6,6, '2018/04/27')

insert into Narachki(Id_Narachka,Id_Proizvod,Id_Klient,Id_Vraboten, [Vaznost na garancija])
values(6,3,6,3, '2018/04/25')

insert into Narachki(Id_Narachka,Id_Proizvod,Id_Klient,Id_Vraboten, [Vaznost na garancija])
values(11,5,11,3, '2018/04/25')

insert into Narachki(Id_Narachka,Id_Proizvod,Id_Klient,Id_Vraboten, [Vaznost na garancija])
values(12,4,12,3, '2018/04/25')

insert into Narachki(Id_Narachka,Id_Proizvod,Id_Klient,Id_Vraboten, [Vaznost na garancija])
values(7,4,5,4, '2018/04/27')

insert into Narachki(Id_Narachka,Id_Proizvod,Id_Klient,Id_Vraboten, [Vaznost na garancija])
values(8,1,7,6, '2019/12/01')

insert into Narachki(Id_Narachka,Id_Proizvod,Id_Klient,Id_Vraboten, [Vaznost na garancija])
values(9,1,10,8, '2019/12/01')


insert into Narachki(Id_Narachka,Id_Proizvod,Id_Klient,Id_Vraboten, [Vaznost na garancija])
values(10,2,7,8,null)




select distinct v.[Ime I Prezime], v.[Datum na ragjanje]
from   Narachki n
left join Vraboteni v on (n.Id_Vraboten = v.Id_Vraboten)



select distinct k.Id_Klient, k.Naziv, k.Grad
from   Klienti k
left join Narachki n on (n.Id_Klient = k.Id_Klient)
where n.Id_Klient is null and
      k.[Od koga e klient] >= DATEADD(MONTH, -3, GETDATE())



select count(1)
from Narachki n
left join Klienti k on( n.Id_Klient= k.Id_Klient)
where n.Id_Vraboten = 3 and
	  k.Naziv like 'mak%'



select distinct v.Id_Vraboten, v.[Ime I Prezime], k.Naziv, p.[Naziv na proizvod]
from Narachki n
left join Vraboteni v on (n.Id_Vraboten = v.Id_Vraboten)
left join Proizvodi p on (n.Id_Proizvod = p.Id_Proizvod)
left join Klienti k on (n.Id_Klient = k.Id_Klient)
where  n.[Vaznost na garancija] between GETDATE() and DATEADD(DAY, 14, GETDATE())




select * from Narachki
