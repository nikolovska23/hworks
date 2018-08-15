﻿using homework_9.classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static homework_9.classes.Student;

namespace homework_9
{
    class Program
    {




        static void print(List<Student> list)
        {
            foreach (var student in list)
            {
                student.PrintInfo();
            }

        }


        static double average(List<Student> list)
        {
            double averageTotal = 0;

            for (int i = 0; i < list.Count; i++)
            {
                averageTotal += list[i].AverageGrade;
            }

            return averageTotal / list.Count;
        }


        static void Main(string[] args)
        {


            try
            {

                Student student1 = new Student("Kristijan", "Spirov", EnumGender.Male, 9.5);
                Student student2 = new Student("Bojan", "Ilev", EnumGender.Male, 6.2);
                Student student3 = new Student("Ivana", "Nakeva", EnumGender.Female, 8.5);
                Student student4 = new Student("Antonio", "Delev", EnumGender.Male, 2.9);
                Student student5 = new Student("Biljana", "Arsova", EnumGender.Female, 7.2);
                Student student6 = new Student("Angelina", "Gerovska", EnumGender.Female, 4.7);
                Student student7 = new Student("Silvija", "Bashovska", EnumGender.Female, 7.0);
                Student student8 = new Student("Adrijan", "Gigov", EnumGender.Male, 9.0);
                Student student9 = new Student("Simona", "Aneva", EnumGender.Female, 10.0);
                Student student10 = new Student("Ilina", "Spirkovska", EnumGender.Female, 5.6);

                List<Student> class1 = new List<Student>() { student1, student2, student3, student4, student5, student6, student7, student8, student9, student10 };
                Student student11 = new Student("Gorjan", "Kirov", EnumGender.Male, 8.0);
                Student student12 = new Student("Vasko", "Pecov", EnumGender.Male, 7.6);
                Student student13 = new Student("Ivona", "Zdravevska", EnumGender.Female, 9.0);
                Student student14 = new Student("Lara", "Ivevska", EnumGender.Female, 5.9);
                Student student15 = new Student("Boris", "Savevski", EnumGender.Male, 7.0);
                Student student16 = new Student("Slavko", "Topuzov", EnumGender.Male, 3.5);
                Student student17 = new Student("Tijana", "Ickovska", EnumGender.Female, 4.6);
                Student student18 = new Student("Gorjan", "Petrevski", EnumGender.Male, 8.4);
                Student student19 = new Student("Vedran", "Mackov", EnumGender.Male, 9.8);
                Student student20 = new Student("Mirka", "Andreevska", EnumGender.Female, 6.0);
                List<Student> class2 = new List<Student>() { student11, student12, student13, student14, student15, student16, student17, student18, student19, student20 };



                Console.WriteLine("Choose a class 1 or 2:");
                int input = Int32.Parse(Console.ReadLine());

                List<Student> classInput = new List<Student>();

                if (input == 1)
                    classInput = class1;
                else if (input == 2)
                    classInput = class2;
                else

                    throw new Exception("You must enter 1 or 2");



                List<Student> femaleList = classInput.Where(s => s.Gender == EnumGender.Female).ToList();
                List<Student> maleList = classInput.Where(s => s.Gender == EnumGender.Male).ToList().ToList();


                Start:
                Console.WriteLine("Choose an action:\n" +
                               "1)Print all female students\n2)Print all male students\n3)Print all students with a first letter of a name\n4)Print all students with a grade higher than \n5)Print the Average of all students AverageGrade in the class");
                int option = Int32.Parse(Console.ReadLine());


                if (option == 1)
                    print(femaleList);

                else if (option == 2)
                    print(maleList);


                else if (option == 3)
                {
                    Console.WriteLine("Enter a first letter");
                    string letterInput = Console.ReadLine().ToUpper();

                    List<Student> firstLetter = classInput.Where(s => s.FirstName.StartsWith(letterInput)).ToList();

                    print(firstLetter);
                }


                else if (option == 4)
                {
                    Console.WriteLine("Enter a grade");
                    double gradeInput = Double.Parse(Console.ReadLine());

                    List<Student> higherGrade = classInput.Where(s => s.AverageGrade >= gradeInput).ToList();

                    print(higherGrade);

                }

                else if (option == 5)

                    Console.WriteLine($"The Average of all students AverageGrade in the class is {average(classInput)}");


                else

                    throw new Exception("You must enter a number from 1 to 5");
            }


            catch (Exception ex)
            {

                Console.WriteLine(ex.Message);

            }



            Console.ReadLine();

        }

    }
}
