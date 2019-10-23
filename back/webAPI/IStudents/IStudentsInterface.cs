using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webAPI.Models;

namespace webAPI.IStudents
{
    public interface IStudentsInterface
    {
        IEnumerable<Student> GetStudent();
        Task<IActionResult> GetStudent([FromRoute] int id);
        Task<IActionResult> PutStudent([FromRoute] int id, [FromBody] Student student);
        Task<IActionResult> PostStudent([FromBody] Student student);
        Task<IActionResult> DeleteStudent([FromRoute] int id);


    }
}
