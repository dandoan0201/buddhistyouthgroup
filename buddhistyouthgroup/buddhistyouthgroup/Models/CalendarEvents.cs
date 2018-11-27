﻿using System;
using System.Collections.Generic;

namespace buddhistyouthgroup.Models
{
    public partial class CalendarEvents
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
    }
}
