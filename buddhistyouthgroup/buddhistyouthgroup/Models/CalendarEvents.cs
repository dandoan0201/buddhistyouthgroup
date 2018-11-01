using System;
using System.Collections.Generic;

namespace buddhistyouthgroup.Models
{
    public partial class CalendarEvents
    {
        public int Id { get; set; }
        public DateTime? Date { get; set; }
        public string Organization { get; set; }
    }
}
