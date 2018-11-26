using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using buddhistyouthgroup.Models;

namespace buddhistyouthgroup.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private buddhistyouthgroupContext database;

        [HttpGet("[action]")]
        public List<Event> GetEvents()
        {
            List<Event> list = new List<Event>();

            Event obj = new Event();
            obj.title = "No Sinh Hoat: Huynh Truong Conference";
            obj.start = "2018-10-28";
            obj.month = "Oct";
            obj.day = "10";
            obj.weekday = "Sun";
            obj.time = "12:00 PM";

            list.Add(obj);

            Event obj2 = new Event();
            obj2.title = "No Sinh Hoat: Thanksgiving Break";
            obj2.start = "2018-11-25";
            obj2.month = "Nov";
            obj2.day = "25";
            obj2.weekday = "Sun";
            obj2.time = "";

            list.Add(obj2);

            Event obj3 = new Event();
            obj3.title = "No Sinh Hoat: Winter Break";
            obj3.start = "2018-12-23";
            obj3.month = "Dec";
            obj3.day = "23";
            obj3.weekday = "Sun";
            obj3.time = "";

            list.Add(obj3);

            Event obj4 = new Event();
            obj4.title = "No Sinh Hoat: Winter Break";
            obj4.start = "2018-12-30";
            obj4.month = "Dec";
            obj4.day = "30";
            obj4.weekday = "Sun";
            obj4.time = "";

            list.Add(obj4);

            return list;
        }

        [HttpPost("[action]")]
        public JsonResult Login([FromBody] object obj)
        {
            //TwilioClient.Init(accountSid, authToken);

            //var message = MessageResource.Create(
            //    body: "TESTING, FIRST TEXT MESSAGE!",
            //    from: new Twilio.Types.PhoneNumber("+12062026893"),
            //    to: new Twilio.Types.PhoneNumber("4252330581")
            //    );

            var test = obj;
            return Json(new { token = "test" });
        }

        [HttpPost("[action]")]
        public JsonResult Login2([FromBody] object user)
        {
            bool isLoginValid = false;

            //var login = database.Users.Where(s => s.Username == user.Username && s.Password == user.Password);

            //if (login != null)
            //{
            //    isLoginValid = true;
            //}

            return Json(new { result = isLoginValid });
        }

        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
