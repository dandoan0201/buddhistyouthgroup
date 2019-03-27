using System;
using System.Collections.Generic;

namespace buddhistyouthgroup.Models
{
    public partial class PdfFiles
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public byte[] FileData { get; set; }
    }
}
