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

        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
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
