using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Test.Models;

namespace Metapi
{
    [Route("api/employee")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly EmployeeContext _context;

        public EmployeesController(EmployeeContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees(string departmet, string name, string birthday, string startwork, decimal salary,
           string sortOrder = "FullNameAsc")
        {
           
            IQueryable<Employee> employees = _context.Employees;
            if (!string.IsNullOrEmpty(name))
            {
                employees = employees.Where(x => x.FullName!.Contains(name));
            }
            if (!string.IsNullOrEmpty(departmet))
            {
                employees = employees.Where(x => x.Department!.Contains(departmet));
            }
            if (null != birthday)
            {
                employees = employees.Where(x => x.Birthday == DateTime.Parse( birthday));
            }
            if (null != startwork)
            {
                employees = employees.Where(x => x.DateStartOfWork == DateTime.Parse(startwork));
            }
            if (salary != 0)
            {
                employees = employees.Where(x => x.Salary == salary);
            }
            switch (sortOrder)
            {
                case "DepartmentAsc":
                    employees = employees.OrderByDescending(s => s.Department);
                    break;
                case "DepartmentDesc":
                    employees = employees.OrderBy(s => s.Department);
                    break;
                case "FullNameAsc":
                    employees = employees.OrderBy(s => s.FullName);
                    break;
                case "FullNameDesc":
                    employees = employees.OrderByDescending(s => s.FullName);
                    break;
                case "BirthdayAsc":
                    employees = employees.OrderBy(s => s.Birthday);
                    break;
                case "BirthdayDesc":
                    employees = employees.OrderByDescending(s => s.Birthday);
                    break;
                case "DateStartOfWorkAsc":
                    employees = employees.OrderBy(s => s.DateStartOfWork);
                    break;
                case "DateStartOfWorkDesc":
                    employees = employees.OrderByDescending(s => s.DateStartOfWork);
                    break;
                case "SalaryAsc":
                    employees = employees.OrderBy(s => s.Salary);
                    break;
                case "SalaryDesc":
                    employees = employees.OrderByDescending(s => s.Salary);
                    break;
            }
            return await employees.ToListAsync();
            }
            
            [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
            var employee = await _context.Employees.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }

        [HttpPut]
        public async Task<IActionResult> PutEmployee(Employee employee)
        {
            if (ModelState.IsValid)
            {
                _context.Update(employee);
                await _context.SaveChangesAsync();
                return Ok(employee);
            }
            return BadRequest(ModelState);
        }

        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        {
            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployee", new { id = employee.Id }, employee);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Employee>> DeleteEmployee(int id)
        {
            var employee = await _context.Employees.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }

            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();

            return employee;
        }
      
    }
}
