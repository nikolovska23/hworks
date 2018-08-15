using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task2
{
    class Program
    {
        static void PrintStudentGroup(string[] arr1, string[] arr2)
        {

            Console.WriteLine("Enter student group (1 or 2):");
            int gr = Int32.Parse(Console.ReadLine());
            if(gr==1)
                Console.WriteLine("The students in G1 are:\n{0}", string.Join("\n", arr1));
            else if (gr==2)
                Console.Write("The students in G2 are:\n{0}", string.Join("\n", arr2));

        }
        static void Main(string[] args)
        {
            string[] arr1 = new string[] { "Jonathon", "Lia", "Mathias", "Joanna","Eddie" };
            string[] arr2 = new string[] { "Thalia", "Justine ", "Angela", "Marcus", "John" };
            PrintStudentGroup(arr1, arr2);
            Console.ReadLine();
        }
    }
}
