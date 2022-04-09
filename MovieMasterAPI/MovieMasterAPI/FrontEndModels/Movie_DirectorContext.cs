using Microsoft.EntityFrameworkCore;

namespace MovieMasterAPI.FrontEndModels
{
    public class Movie_DirectorContext : DbContext
    {
        public Movie_DirectorContext(DbContextOptions<Movie_DirectorContext> options) : base(options) { }

        public DbSet<Movie_Director> Movie_Director { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Movie_Director>()
                .HasKey(m => new { m.movieTitle, m.directorName });
        }
    }
}
