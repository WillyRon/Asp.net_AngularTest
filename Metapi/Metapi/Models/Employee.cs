using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Test.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Department { get; set; }
        public string FullName { get; set; }
        public DateTime Birthday { get; set; }
        public DateTime DateStartOfWork { get; set; }
        public decimal Salary { get; set; }

    }

}