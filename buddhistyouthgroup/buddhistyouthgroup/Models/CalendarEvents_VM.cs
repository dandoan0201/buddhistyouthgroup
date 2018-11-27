using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace buddhistyouthgroup.Models
{
    public class CalendarEvents_VM
    {
        public int Id { get; set; }
        public string EventName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Month { get; set; }
        public string Day { get; set; }
        public string Weekday { get; set; }
        public string Time { get; set; }
        public bool? IsDeleted { get; set; }
        public string title { get; set; }
        public string start { get; set; }
    }
}
