using Microsoft.EntityFrameworkCore;

namespace MovieMasterAPI.FrontEndModels
{
    public class Movie_GenreContext : DbContext
    {
        public Movie_GenreContext(DbContextOptions<Movie_GenreContext> options) : base(options) { }

        public DbSet<Movie_Genre> Movie_Genre { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Movie_Genre>()
                .HasKey(m => new { m.MovieTitle, m.Genre });
        }
    }
}
