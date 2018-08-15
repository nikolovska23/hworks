using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace homework_9.classes
{
    class Student
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public EnumGender Gender { get; set; }
      

        public double AverageGrade { get; set; }


        public Student (string firstName, string lastName, EnumGender gender, double averageGrade){
            FirstName = firstName;
            LastName = lastName;
            Gender = gender;
            AverageGrade = averageGrade;

        }

        public void PrintInfo()
        {
            Console.WriteLine(FirstName + " " + LastName);
        }



        
    public enum EnumGender
    {
        Male,
        Female
    }

}   

            
}
