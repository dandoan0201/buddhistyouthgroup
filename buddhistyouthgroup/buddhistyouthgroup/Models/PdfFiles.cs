using System;
using System.Collections.Generic;

namespace buddhistyouthgroup.Models
{
    public partial class PdfFiles
    {
        public int Id { get; set; }
        public string Class { get; set; }
        public string FileName { get; set; }
        public DateTime? Date { get; set; }
        public byte[] FileData { get; set; }
    }
}
