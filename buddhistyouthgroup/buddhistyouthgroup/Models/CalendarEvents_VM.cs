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
        public bool? IsDeleted { get; set; }
        public string StartMonthAbbr { get; set; }
        public int StartMonth { get; set; }
        public int StartDay { get; set; }
        public int StartYear { get; set; }
        public string StartWeekday { get; set; }
        public string StartTime { get; set; }
        public int StartTimeHour { get; set; }
        public int StartTimeMinute { get; set; }
        public string EndMonthAbbr { get; set; }
        public string EndMonth { get; set; }
        public string EndDay { get; set; }
        public string EndYear { get; set; }
        public string EndWeekday { get; set; }
        public string EndTime { get; set; }
        public int EndTimeHour { get; set; }
        public int EndTimeMinute { get; set; }
        public string title { get; set; }
        public string start { get; set; }
        public string end { get; set; }
    }
}
