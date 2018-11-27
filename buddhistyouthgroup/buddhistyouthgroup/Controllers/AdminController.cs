using System;
using System.Collections.Generic;
using System.Globalization;
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

        [HttpGet("[action]")]
        public List<CalendarEvents_VM> GetCalendarEvents()
        {
            

            List<CalendarEvents> list = database.CalendarEvents.ToList();

            List<CalendarEvents_VM> list2 = new List<CalendarEvents_VM>();

            foreach(var item in list)
            {
                CalendarEvents_VM obj = new CalendarEvents_VM();
                obj.Id = item.Id;
                obj.EventName = item.EventName;
                obj.StartDate = item.StartDate;
                obj.EndDate = item.EndDate;
                obj.Month = item.StartDate.ToString("MMM", CultureInfo.InvariantCulture);
                obj.Day = item.StartDate.ToString("dd", CultureInfo.InvariantCulture);
                obj.Weekday = item.StartDate.ToString("ddd", CultureInfo.InvariantCulture);
                obj.Time = "";
                if(item.StartDate.ToLongTimeString() != "12:00:00 AM")
                {
                    obj.Time = item.StartDate.ToLongTimeString();
                }
                obj.title = item.EventName;
                obj.start = item.StartDate.ToString("yyyy-MM-dd");

                list2.Add(obj);
            }



            return list2;
        }
    }
}