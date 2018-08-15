use CompanyDB
go


--1
;with cte_OrdersByProduct as
(
	select p.ProductID, p.ProductName, count(*) as OrdersByProduct
	from [Order Details] od
	join Products p on (od.ProductID=p.ProductID)
	group by p.ProductID, p.ProductName
	having count(*) >25
)


--2
create function dbo.TerritoriesByRegion(@RegionID int)
returns int
as
begin
declare @count int =0;

select @count= count(*) 
from Territories t
join Region r on( t.RegionID = r.RegionID)
where t.RegionID = @RegionID

return @count;
end


select dbo.TerritoriesByRegion(1)
select dbo.TerritoriesByRegion(3)




--3
create function dbo.MaxO ()
returns nvarchar(40)
as
begin
return(
select c.CompanyName 
from Customers c
where c.CustomerID like (select sq.CustomerID 
                         from (select top 1 count(*) as co, c.CustomerID
                               from Orders o
                               join Customers c on (o.CustomerID = c.CustomerID)
			                   group by c.CustomerID
			                   order by co desc) as sq)
      );
end	 

select dbo.MaxO()
	 



--4
create function Total_Pri(@OrderID int)
returns int
as
begin
declare @res int;

set @res=(
  select sum(od.Quantity * od.UnitPrice)
  from [Order Details] od
  where od.OrderID = @OrderID
)
return @res;
end



create proc sp_Orders
@DateFrom date,
@DateTo date
as

select o.OrderID, e.FirstName, o.OrderDate, o.ShipCity, dbo.Total_Pri(o.OrderID) [TotalPrice], 
  case 
  when dbo.Total_Pri(o.OrderID) < 1500 then 'Nema popust'
  when dbo.Total_Pri(o.OrderID) >= 1500 and dbo.Total_Pri(o.OrderID) < 3000 then '10% popust'
  when dbo.Total_Pri(o.OrderID) >= 3000 then 'Gratis podarok'
  end as [popust/podarok]
from Orders o
join Employees e on(o.EmployeeID = e.EmployeeID)
where o.OrderDate between @DateFrom and @DateTo



exec sp_Orders '1997-07-01' , '1997-07-31'






