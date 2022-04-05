using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MovieMasterAPI.Models
{
    public partial class MovieMasterDbContext : DbContext
    {
        public MovieMasterDbContext()
        {
        }

        public MovieMasterDbContext(DbContextOptions<MovieMasterDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Branch> Branches { get; set; } = null!;
        public virtual DbSet<Customer> Customers { get; set; } = null!;
        public virtual DbSet<Movie> Movies { get; set; } = null!;
        public virtual DbSet<MovieCast> MovieCasts { get; set; } = null!;
        public virtual DbSet<MovieDirector> MovieDirectors { get; set; } = null!;
        public virtual DbSet<MovieGenre> MovieGenres { get; set; } = null!;
        public virtual DbSet<MovieProducer> MovieProducers { get; set; } = null!;
        public virtual DbSet<MovieWriter> MovieWriters { get; set; } = null!;
        public virtual DbSet<Showing> Showings { get; set; } = null!;
        public virtual DbSet<Showroom> Showrooms { get; set; } = null!;
        public virtual DbSet<SystemAdmin> SystemAdmins { get; set; } = null!;
        public virtual DbSet<Theater> Theaters { get; set; } = null!;
        public virtual DbSet<Ticket> Tickets { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
// #warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=MovieMasterDb;Trusted_Connection=True;MultipleActiveResultSets=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Branch>(entity =>
            {
                entity.ToTable("Branch");

                entity.Property(e => e.BranchId)
                    .ValueGeneratedNever()
                    .HasColumnName("BranchID");

                entity.Property(e => e.Address).HasMaxLength(100);

                entity.Property(e => e.BranchName).HasMaxLength(100);

                entity.Property(e => e.TheaterName).HasMaxLength(100);

                entity.HasOne(d => d.TheaterNameNavigation)
                    .WithMany(p => p.Branches)
                    .HasForeignKey(d => d.TheaterName)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Branch_Theater");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.Email);

                entity.ToTable("Customer");

                entity.Property(e => e.Email).HasMaxLength(100);

                entity.Property(e => e.CardNumber).HasMaxLength(16);

                entity.Property(e => e.Cvv)
                    .HasMaxLength(3)
                    .HasColumnName("CVV");

                entity.Property(e => e.ExpirationDate).HasMaxLength(5);

                entity.Property(e => e.Fname)
                    .HasMaxLength(100)
                    .HasColumnName("FName");

                entity.Property(e => e.Lname)
                    .HasMaxLength(100)
                    .HasColumnName("LName");

                entity.Property(e => e.Password).HasMaxLength(100);
            });

            modelBuilder.Entity<Movie>(entity =>
            {
                entity.HasKey(e => e.Title);

                entity.ToTable("Movie");

                entity.Property(e => e.Title).HasMaxLength(100);

                entity.Property(e => e.AdminEmail).HasMaxLength(100);

                entity.HasOne(d => d.AdminEmailNavigation)
                    .WithMany(p => p.Movies)
                    .HasForeignKey(d => d.AdminEmail)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Movie_System_Admin");
            });

            modelBuilder.Entity<MovieCast>(entity =>
            {
                entity.HasKey(e => new { e.MovieTitle, e.CastMemberName });

                entity.ToTable("Movie_Cast");

                entity.Property(e => e.MovieTitle).HasMaxLength(100);

                entity.Property(e => e.CastMemberName).HasMaxLength(100);

                entity.HasOne(d => d.MovieTitleNavigation)
                    .WithMany(p => p.MovieCasts)
                    .HasForeignKey(d => d.MovieTitle)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Movie_Cast_Movie");
            });

            modelBuilder.Entity<MovieDirector>(entity =>
            {
                entity.HasKey(e => new { e.MovieTitle, e.DirectorName });

                entity.ToTable("Movie_Director");

                entity.Property(e => e.MovieTitle).HasMaxLength(100);

                entity.Property(e => e.DirectorName).HasMaxLength(100);

                entity.HasOne(d => d.MovieTitleNavigation)
                    .WithMany(p => p.MovieDirectors)
                    .HasForeignKey(d => d.MovieTitle)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Movie_Director_Movie");
            });

            modelBuilder.Entity<MovieGenre>(entity =>
            {
                entity.HasKey(e => new { e.MovieTitle, e.Genre });

                entity.ToTable("Movie_Genre");

                entity.Property(e => e.MovieTitle).HasMaxLength(100);

                entity.Property(e => e.Genre).HasMaxLength(100);

                entity.HasOne(d => d.MovieTitleNavigation)
                    .WithMany(p => p.MovieGenres)
                    .HasForeignKey(d => d.MovieTitle)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Movie_Genre_Movie");
            });

            modelBuilder.Entity<MovieProducer>(entity =>
            {
                entity.HasKey(e => new { e.MovieTitle, e.ProducerName });

                entity.ToTable("Movie_Producer");

                entity.Property(e => e.MovieTitle).HasMaxLength(100);

                entity.Property(e => e.ProducerName).HasMaxLength(100);

                entity.HasOne(d => d.MovieTitleNavigation)
                    .WithMany(p => p.MovieProducers)
                    .HasForeignKey(d => d.MovieTitle)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Movie_Producer_Movie");
            });

            modelBuilder.Entity<MovieWriter>(entity =>
            {
                entity.HasKey(e => new { e.MovieTitle, e.WirterName });

                entity.ToTable("Movie_Writer");

                entity.Property(e => e.MovieTitle).HasMaxLength(100);

                entity.Property(e => e.WirterName).HasMaxLength(100);

                entity.HasOne(d => d.MovieTitleNavigation)
                    .WithMany(p => p.MovieWriters)
                    .HasForeignKey(d => d.MovieTitle)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Movie_Writer_Movie");
            });

            modelBuilder.Entity<Showing>(entity =>
            {
                entity.HasKey(e => new { e.Date, e.Time, e.ShowRoomNo, e.BranchId });

                entity.ToTable("Showing");

                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.BranchId).HasColumnName("BranchID");

                entity.Property(e => e.AdminEmail).HasMaxLength(100);

                entity.Property(e => e.MovieTitle).HasMaxLength(100);

                entity.HasOne(d => d.AdminEmailNavigation)
                    .WithMany(p => p.Showings)
                    .HasForeignKey(d => d.AdminEmail)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Showing_System_Admin");

                entity.HasOne(d => d.MovieTitleNavigation)
                    .WithMany(p => p.Showings)
                    .HasForeignKey(d => d.MovieTitle)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Showing_Movie");

                entity.HasOne(d => d.Showroom)
                    .WithMany(p => p.Showings)
                    .HasForeignKey(d => new { d.BranchId, d.ShowRoomNo })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Showing_Showroom");
            });

            modelBuilder.Entity<Showroom>(entity =>
            {
                entity.HasKey(e => new { e.BranchId, e.ShowRoomNo });

                entity.ToTable("Showroom");

                entity.Property(e => e.BranchId).HasColumnName("BranchID");

                entity.Property(e => e.SeatType).HasMaxLength(100);

                entity.Property(e => e.ShowRoomType).HasMaxLength(100);

                entity.HasOne(d => d.Branch)
                    .WithMany(p => p.Showrooms)
                    .HasForeignKey(d => d.BranchId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Showroom_Branch");
            });

            modelBuilder.Entity<SystemAdmin>(entity =>
            {
                entity.HasKey(e => e.Email);

                entity.ToTable("System_Admin");

                entity.Property(e => e.Email).HasMaxLength(100);

                entity.Property(e => e.BranchId).HasColumnName("BranchID");

                entity.Property(e => e.Fname)
                    .HasMaxLength(100)
                    .HasColumnName("FName");

                entity.Property(e => e.Lname)
                    .HasMaxLength(100)
                    .HasColumnName("LName");

                entity.Property(e => e.Password).HasMaxLength(100);

                entity.HasOne(d => d.Branch)
                    .WithMany(p => p.SystemAdmins)
                    .HasForeignKey(d => d.BranchId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_System_Admin_Branch");
            });

            modelBuilder.Entity<Theater>(entity =>
            {
                entity.HasKey(e => e.Name);

                entity.ToTable("Theater");

                entity.Property(e => e.Name).HasMaxLength(100);
            });

            modelBuilder.Entity<Ticket>(entity =>
            {
                entity.Property(e => e.TicketId)
                    .ValueGeneratedNever()
                    .HasColumnName("TicketID");

                entity.Property(e => e.AgeRange).HasMaxLength(8);

                entity.Property(e => e.BranchId).HasColumnName("BranchID");

                entity.Property(e => e.BuyerEmail).HasMaxLength(100);

                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.Row).HasMaxLength(2);

                entity.Property(e => e.Type).HasMaxLength(100);

                entity.HasOne(d => d.BuyerEmailNavigation)
                    .WithMany(p => p.Tickets)
                    .HasForeignKey(d => d.BuyerEmail)
                    .HasConstraintName("FK_Tickets_Customer");

                entity.HasOne(d => d.Showing)
                    .WithMany(p => p.Tickets)
                    .HasForeignKey(d => new { d.Date, d.Time, d.ShowRoomNo, d.BranchId })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Tickets_Showing");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
