using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task_01
{
    class Program
    {
        static int RealCalculator()
        {
            Console.Write("Enter the First number:");
            int first = Int32.Parse(Console.ReadLine());
            Console.Write("Enter the Second number:");
            int second = Int32.Parse(Console.ReadLine());
            Console.Write("Enter the Operation:"); 
            string operation= Console.ReadLine();

            int result=0;

            if (operation == "+")
            {
                result= first + second;
            }
            else if (operation == "-")
            { 
                result=first - second;
            }

            else if (operation == "*")
            {
                result= first * second;
            }

            else if (operation == "/")
            {
               result= first / second;
            }
            
            return result; 

        }


        static void SwapNumbers()
        {
            Console.Write("Enter the First number:");
            int a = Int32.Parse(Console.ReadLine());
            Console.Write("Enter the Second number:");
            int b = Int32.Parse(Console.ReadLine());

            a += b;
            b = a - b;
            a = a - b;

            // Another way
            //int tmp=a;
            //a=b;
            //b=tmp;

            //OR just by swapping the variables positions in the printing line ;)
            

            Console.WriteLine("After swapping:\n First number: {0}\n Second number: {1}", a, b);
        } 
        static void Main(string[] args)
        {
            Console.WriteLine("The result is: {0}\n", RealCalculator());
            SwapNumbers();
            Console.ReadLine();
        }
    }
}
