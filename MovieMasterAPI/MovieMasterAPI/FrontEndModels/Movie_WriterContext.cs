using Microsoft.EntityFrameworkCore;

namespace MovieMasterAPI.FrontEndModels {
    public class Movie_WriterContext : DbContext
    {
        public Movie_WriterContext(DbContextOptions<Movie_WriterContext> options) : base(options) { }

        public DbSet<Movie_Writer> Movie_Writer { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Movie_Writer>()
                .HasKey(m => new { m.movieTitle, m.writerName });
        }
    }
}
