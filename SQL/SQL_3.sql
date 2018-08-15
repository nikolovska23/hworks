use CompanyDB
go 

--1

--IN
select *
from Territories t
where t.RegionID in ( select RegionID 
			          from Region r 
					  where r.RegionDescription = 'Eastern')
--EXISTS
select *
from Territories t
where exists( select *
			  from Region r 
			  where t.RegionID = r.RegionID and
			  r.RegionDescription = 'Eastern')




--2

select distinct c.CustomerID, c.CompanyName, isnull(c.Fax, c.Phone) [Fax/Phone]
from Customers c
join Orders o on (c.CustomerID = o.CustomerID)
where o.EmployeeID not in(select EmployeeID
                           from Employees e
                           where e.City like 'London')




						   
--3

select o.OrderID, c.CompanyName, left(c.Address,10) 
from Customers c 
join Orders o on(c.CustomerID = o.CustomerID)
join Employees e on (e.EmployeeID = o.EmployeeID)
where c.Country = e.Country


--4

select distinct t.TerritoryID, t.TerritoryDescription, count(1)
from Territories t
join EmployeeTerritories et on(t.TerritoryID = et.TerritoryID)
join Orders o on (o.EmployeeID = et.EmployeeID)
group by t.TerritoryID, t.TerritoryDescription



--5
--???
select p.ProductID, p.ProductName
from Products p
join OrderProductDetails op on(p.ProductID = op.ProductID)
where op.Quantity > 20



 --6
 --???
 select p.CategoryID,c.CategoryName, max(op.UnitPrice* op.Quantity* p.Discontinued)
 from Products p
 join OrderProductDetails op on(p.ProductID = op.ProductID)
 join Categories c on (c.CategoryID = p.CategoryID)
 group by p.CategoryID,c.CategoryName, op.UnitPrice, op.Quantity, p.Discontinued


