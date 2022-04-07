using Microsoft.EntityFrameworkCore;

namespace MovieMasterAPI.FrontEndModels
{
    public class Movie_ProducerContext : DbContext
    {
        public Movie_ProducerContext(DbContextOptions<Movie_ProducerContext> options) : base(options) { }

        public DbSet<Movie_Producer> Movie_Producer { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Movie_Producer>()
                .HasKey(m => new { m.MovieTitle, m.ProducerName });
        }
    }
}
