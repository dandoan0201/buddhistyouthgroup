﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace buddhistyouthgroup.Models
{
    public partial class buddhistyouthgroupContext : DbContext
    {
        public buddhistyouthgroupContext()
        {
        }

        public buddhistyouthgroupContext(DbContextOptions<buddhistyouthgroupContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CalendarEvents> CalendarEvents { get; set; }
        public virtual DbSet<PdfFiles> PdfFiles { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=tcp:buddhistyouthgroup.database.windows.net,1433;Initial Catalog=buddhistyouthgroup;Persist Security Info=False;User ID=dandoan;Password=Lieuquan1978;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CalendarEvents>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.EndDate).HasColumnType("datetime");

                entity.Property(e => e.EventName).IsUnicode(false);

                entity.Property(e => e.StartDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<PdfFiles>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Course).IsUnicode(false);

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.FileName).IsUnicode(false);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .IsUnicode(false);
            });
        }
    }
}
