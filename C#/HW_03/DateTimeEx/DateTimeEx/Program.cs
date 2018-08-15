using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DateTimeEx
{
    class Program
    {
        static int BirthdayDate(DateTime bday)
        {
            DateTime today = DateTime.Now;
            int age = today.Year - bday.Year;

            if (today.Month < bday.Month || (today.Month == bday.Month && today.Day < bday.Day))
                age--;

            return age;      
        }

        static void Main(string[] args)
        {

            Console.WriteLine($"You are {BirthdayDate(new DateTime(1996, 5, 23))} years old");
            Console.ReadLine();
        }
    }
}
