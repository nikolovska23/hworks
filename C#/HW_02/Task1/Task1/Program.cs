
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task1
{
    class Program
    {
        static int SumOfEven()
        {
            int sum = 0;
            int[] arr = new int[6];
            
            for (int i = 0; i < arr.Length; i++)
            {
                Console.WriteLine("Enter integer no.{0}", i);
                arr[i] = Int32.Parse(Console.ReadLine());
                if(arr[i] % 2 != 0)
                {
                    sum += arr[i];
                }
            }
            return  sum;
            
        }
        static void Main(string[] args)
        {
            Console.WriteLine("\nThe sum of the odd elements in the array is {0}", SumOfEven());
            Console.ReadLine();
        }
    }
}
