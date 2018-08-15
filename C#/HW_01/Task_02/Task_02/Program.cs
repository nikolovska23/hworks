using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task_02
{
    class Program
    {
        static void AverageNumber()
        {
            Console.Write("Enter the First number:");
            int a= Int32.Parse(Console.ReadLine());
            Console.Write("Enter the Second number:");
            int b = Int32.Parse(Console.ReadLine());
            Console.Write("Enter theThird number:");
            int c= Int32.Parse(Console.ReadLine());
            Console.Write("Enter the Fourth number:");
            int d = Int32.Parse(Console.ReadLine());

            Console.WriteLine("The average of {0}, {1}, {2} and {3} is: {4}", a, b, c, d, (a+b+c+d) / 4);

            
        }
        static void Main(string[] args)
        {
            AverageNumber();
            Console.ReadLine();
        }
    }
}
