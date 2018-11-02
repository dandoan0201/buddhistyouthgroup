using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace buddhistyouthgroup.Models
{
    public partial class Event
    {
        public string title { get; set; }
        public string start { get; set; }
        public string month { get; set; }
        public string day { get; set; }
        public string weekday { get; set; }
        public string time { get; set; }
    }
}
