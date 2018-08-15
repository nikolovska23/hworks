using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassEx.Classes
{
    class Contractor:Employee   
    {
        public double WorkHours { get; set; }
        public int PayPerHour { get; set; }

        public Manager ResponsibleManager { get; set; }



        public Contractor(string firstN, string lastN, double workHours, int payPerHour, Manager rManager)
        {
            FirstName = firstN;
            LastName = lastN;
            
            
            WorkHours = workHours;
            PayPerHour = payPerHour;
            ResponsibleManager = rManager;
        }

        
        public override double GetSalary()
        {
            return Salary = WorkHours * PayPerHour;
            
        }

        public string CurrentPosition()
        {
            return ResponsibleManager.Department;
        }


    }
}
