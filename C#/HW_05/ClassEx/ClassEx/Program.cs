using ClassEx.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassEx
{
    class Program
    {
        static void Main(string[] args)
        {
            Contractor contractor1 = new Contractor("Evelyn", "Bradley", 140, 40, new Manager("Sales"));
            Contractor contractor2 = new Contractor("Tanya", "Floyd", 140, 40, new Manager("Sales"));
            Manager manager1= new Manager("Annette", "Elliott", "Marketing");
            Manager manager2= new Manager("Willard", "Patton", "Accounting");
            SalesPerson salesPerson= new SalesPerson("Ray", "Wade", 2000);

            CEO ceo = new CEO("Billie", "Tucker", 2500, 30);

            Employee[] Company = new Employee[5];
            Company[0] = contractor1;
            Company[1] = contractor2;
            Company[2] = manager1;
            Company[3] = manager2;
            Company[4] = salesPerson;

            ceo.AddSharesPrice(1000);

            Console.WriteLine($"The department of the manager responsable for the contractor {contractor1.FirstName} {contractor1.LastName}: {contractor1.CurrentPosition()}");
            Console.WriteLine($"The salary of the contractor {contractor2.FirstName} {contractor2.LastName} is {contractor2.GetSalary()}");
            Console.WriteLine($"The CEO {ceo.FirstName} {ceo.LastName} has salary of {ceo.GetSalary()}\n");
            ceo.PrintEmployees(Company);

            Console.ReadLine();


        }
    }
}
