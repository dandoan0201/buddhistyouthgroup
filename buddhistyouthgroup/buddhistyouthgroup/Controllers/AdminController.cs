using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
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
            

            List<CalendarEvents> list = database.CalendarEvents.Where(s => s.IsDeleted == null).ToList();

            List<CalendarEvents_VM> list2 = new List<CalendarEvents_VM>();

            // handle the end date with ?
            foreach(var item in list)
            {
                CalendarEvents_VM obj = new CalendarEvents_VM();
                obj.Id = item.Id;
                obj.EventName = item.EventName;
                obj.StartDate = item.StartDate;
                obj.EndDate = item.EndDate;
                obj.StartMonthAbbr = item.StartDate.ToString("MMM", CultureInfo.InvariantCulture);
                obj.StartMonth = item.StartDate.Month;
                obj.StartDay = item.StartDate.Day;
                obj.StartYear = item.StartDate.Year;
                obj.StartWeekday = item.StartDate.ToString("ddd", CultureInfo.InvariantCulture);
                obj.StartTime = "";
                if(item.StartDate.ToLongTimeString() != "12:00:00 AM")
                {
                    obj.StartTime = item.StartDate.ToLongTimeString();
                    obj.StartTimeHour = item.StartDate.Hour;
                    obj.StartTimeMinute = item.StartDate.Minute;
                }
                obj.title = item.EventName;
                obj.start = item.StartDate.ToString("yyyy-MM-dd");

                obj.end = "";
                obj.EndTime = "";
                if(item.EndDate != null)
                {
                    // this is needed to be done unless EndDate field is null
                    DateTime dt = item.EndDate ?? DateTime.Now;

                    obj.end = dt.ToString("yyyy-MM-dd");

                    if(dt.ToLongTimeString() != "12:00:00 AM")
                    {
                        obj.EndTime = dt.ToLongTimeString();
                        obj.EndTimeHour = dt.Hour;
                        obj.EndTimeMinute = dt.Minute;
                    }
                }
                list2.Add(obj);
            }
            return list2;
        }

        [HttpPost("[action]")]
        public bool IsCalendarEventAdded(string eventname, string startdate, string enddate, string starttime, string endtime)
        {
            DateTime ConvertStartDate = Convert.ToDateTime(startdate);
            DateTime ConvertStartTime;
            if (starttime != null)
            {
                ConvertStartTime = Convert.ToDateTime(starttime);
                ConvertStartDate = ConvertStartDate.AddHours(ConvertStartTime.Hour).AddMinutes(ConvertStartTime.Minute);
            }

            DateTime ConvertEndDate = Convert.ToDateTime("00:00");
            if (enddate != null)
            {
                ConvertEndDate = Convert.ToDateTime(enddate);
                DateTime ConvertEndTime;
                if(endtime != null)
                {
                    ConvertEndTime = Convert.ToDateTime(endtime);
                    ConvertEndDate = ConvertEndDate.AddHours(ConvertEndTime.Hour).AddMinutes(ConvertEndTime.Minute);
                }
            }


            var newEvent = database.Set<CalendarEvents>();

            if(enddate != null)
            {
                newEvent.Add(new CalendarEvents
                {
                    EventName = eventname,
                    StartDate = ConvertStartDate,
                    EndDate = ConvertEndDate
                });
            }
            else
            {
                newEvent.Add(new CalendarEvents
                {
                    EventName = eventname,
                    StartDate = ConvertStartDate
                });
            }

            database.SaveChanges();

            return true;
        }

        [HttpPost("[action]")]
        public bool IsCalendarEventUpdated(int ID, string eventname, string startdate, string enddate, string starttime, string endtime)
        {
            DateTime ConvertStartDate = Convert.ToDateTime(startdate);
            DateTime ConvertStartTime;
            if (starttime != null)
            {
                ConvertStartTime = Convert.ToDateTime(starttime);
                ConvertStartDate = ConvertStartDate.AddHours(ConvertStartTime.Hour).AddMinutes(ConvertStartTime.Minute);
            }

            DateTime ConvertEndDate = Convert.ToDateTime("00:00");
            if (enddate != null)
            {
                ConvertEndDate = Convert.ToDateTime(enddate);
                DateTime ConvertEndTime;
                if (endtime != null)
                {
                    ConvertEndTime = Convert.ToDateTime(endtime);
                    ConvertEndDate = ConvertEndDate.AddHours(ConvertEndTime.Hour).AddMinutes(ConvertEndTime.Minute);
                }
            }

            var calendarEvent = database.CalendarEvents.SingleOrDefault(s => s.Id == ID);
            if(calendarEvent != null)
            {
                if(enddate == null)
                {
                    calendarEvent.EventName = eventname;
                    calendarEvent.StartDate = ConvertStartDate;
                }

                else
                {
                    calendarEvent.EventName = eventname;
                    calendarEvent.StartDate = ConvertStartDate;
                    calendarEvent.EndDate = ConvertEndDate;
                }
                database.SaveChanges();
            }

            return true;
        }

        [HttpPost("[action]")]
        public bool IsCalendarEventDeleted(int ID)
        {

            var calendarEvent = database.CalendarEvents.SingleOrDefault(s => s.Id == ID);
            if (calendarEvent != null)
            {
                calendarEvent.IsDeleted = true;
                database.SaveChanges();
            }

            return true;
        }


        [HttpPost("[action]"), DisableRequestSizeLimit]
        public ActionResult UploadFile(string Course, string FileName, string Date)
        {
            try
            {
                var file = Request.Form.Files[0];

                DateTime ConvertDate = Convert.ToDateTime(Date);
                byte[] filebyte;
                var ms = new MemoryStream();
                file.CopyTo(ms);
                filebyte = ms.ToArray();
                //string folderName = "Upload";
                //string webRootPath = _hostingEnvironment.WebRootPath;
                //string newPath = Path.Combine(webRootPath, folderName);
                //if (!Directory.Exists(newPath))
                //{
                //    Directory.CreateDirectory(newPath);
                //}
                //if (file.Length > 0)
                //{
                //    string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                //    string fullPath = Path.Combine(newPath, fileName);
                //    using (var stream = new FileStream(fullPath, FileMode.Create))
                //    {
                //        file.CopyTo(stream);
                //    }
                //}

                var newPDF = database.Set<PdfFiles>();

                newPDF.Add(new PdfFiles
                {
                    Course = Course,
                    FileName = FileName,
                    Date = ConvertDate,
                    FileData = filebyte
                });

                database.SaveChanges();

                return Json("File Upload Successfully.");
            }
            catch (System.Exception ex)
            {
                return Json("Upload Failed: " + ex.Message);
            }
        }

        [HttpPost("[action]"), DisableRequestSizeLimit]
        public ActionResult UpdateFile(int ID, string Course, string FileName, string Date)
        {
            try
            {
                var file = Request.Form.Files[0];

                DateTime ConvertDate = Convert.ToDateTime(Date);
                byte[] filebyte;
                var ms = new MemoryStream();
                file.CopyTo(ms);
                filebyte = ms.ToArray();
                //string folderName = "Upload";
                //string webRootPath = _hostingEnvironment.WebRootPath;
                //string newPath = Path.Combine(webRootPath, folderName);
                //if (!Directory.Exists(newPath))
                //{
                //    Directory.CreateDirectory(newPath);
                //}
                //if (file.Length > 0)
                //{
                //    string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                //    string fullPath = Path.Combine(newPath, fileName);
                //    using (var stream = new FileStream(fullPath, FileMode.Create))
                //    {
                //        file.CopyTo(stream);
                //    }
                //}

                var record = database.PdfFiles.SingleOrDefault(b => b.Id == ID);
                if(record != null)
                {
                    record.Course = Course;
                    record.FileName = FileName;
                    record.Date = ConvertDate;
                    record.FileData = filebyte;
                    database.SaveChanges();
                }


                //newPDF.Add(new PdfFiles
                //{
                //    Course = Course,
                //    FileName = FileName,
                //    Date = ConvertDate,
                //    FileData = filebyte
                //});

                //database.SaveChanges();

                return Json("File Update Successfully.");
            }
            catch (System.Exception ex)
            {
                return Json("Upload Failed: " + ex.Message);
            }
        }

        [HttpPost("[action]")]
        public bool IsFileDeleted(int ID)
        {
            var record = database.PdfFiles.SingleOrDefault(s => s.Id == ID);
            if (record != null)
            {
                database.PdfFiles.Remove(record);
                database.SaveChanges();
            }

            return true;
        }

        [HttpPost("[action]")]
        public List<PdfFiles> GetCourseFiles(string Course)
        {
            List<PdfFiles> list = new List<PdfFiles>();

            if(Course == "canhMem")
            {
                list = database.PdfFiles.FromSql("SELECT * FROM PDFFiles WHERE course = {0}", "Canh Mem").ToList();
            }

            return list;
        }

    }
}