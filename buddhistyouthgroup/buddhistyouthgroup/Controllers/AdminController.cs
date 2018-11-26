using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using buddhistyouthgroup.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace buddhistyouthgroup.Controllers
{
    [Route("api/[controller]")]
    public class AdminController : Controller
    {
        private buddhistyouthgroupContext database = new buddhistyouthgroupContext();

        [HttpPost("[action]")]
        public bool Login(string username, string password)
        {
            bool isLoginValid = false;

            var login = database.Users.Where(s => s.Username.Equals(username) && s.Password.Equals(password)).FirstOrDefault();

            if (login != null)
            {
                isLoginValid = true;
            }

            return isLoginValid;
        }
    }
}