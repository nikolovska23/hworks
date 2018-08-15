using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassEx.Classes
{
    class CEO:Employee  
    {
        public Employee[] employees { get; set; }
        public int Shares { get; set; }
        private double SharesPrice { get; set; }

        public CEO(string firstN, string lastN, double salary, int shares)
        {
            FirstName = firstN;
            LastName = lastN;
            Salary=salary;
            Shares = shares;
        }

        public void AddSharesPrice(double value)
        {
            SharesPrice += value;
        }

        public void PrintEmployees(Employee[] employees)
        {
            foreach (Employee element in employees)
            {
                element.PrintInfo();
            }
        }

        public override double GetSalary()
        {
            return Salary + Shares * SharesPrice;
        }
    }
}
