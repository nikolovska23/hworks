using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassEx.Classes
{
    class Manager:Employee
    {
        public string Department { get; set;}
        private double Bonus { get; set; }

        public Manager(string firstN, string lastN,string department )
        {
            FirstName = firstN;
            LastName = lastN;
            Salary =3000;
            Department = department;
        }

        public Manager(string demartment)
        {
            Department = demartment;
        }

        public void addBonus(int value )
        {
            Bonus += value;
        }

        public override double GetSalary()
        {
            return Salary + Bonus;
        }

    }
}
