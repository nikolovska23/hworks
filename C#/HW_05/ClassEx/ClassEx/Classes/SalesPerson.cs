using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassEx.Classes
{
    class SalesPerson:Employee
    {
        public int SuccessSaleRevenue { get; set; }

        public SalesPerson(string firstN, string lastN,int successSale)
        {
            FirstName = firstN;
            LastName = lastN;
            Salary = 500;
            SuccessSaleRevenue = successSale;

        }

        public void providedValue(int value)
        {
            SuccessSaleRevenue += value;
        }

        public override double GetSalary()
        {
            if (SuccessSaleRevenue <= 2000)
                return Salary + 500;
            else if (SuccessSaleRevenue < 2000 && 5000 > SuccessSaleRevenue)
                return Salary + 800;
            else if (SuccessSaleRevenue > 5000)
                return Salary + 2000;
            else
                return 0;
        }
    }
}
