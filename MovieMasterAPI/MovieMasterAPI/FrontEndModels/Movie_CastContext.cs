using Microsoft.EntityFrameworkCore;

namespace MovieMasterAPI.FrontEndModels
{
    public class Movie_CastContext : DbContext
    {

        public Movie_CastContext(DbContextOptions<Movie_CastContext> options) : base(options) { }

        public DbSet<Movie_Cast> Movie_Cast { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Movie_Cast>()
                .HasKey(m => new { m.movieTitle, m.castMemberName });
        }

    }
}
