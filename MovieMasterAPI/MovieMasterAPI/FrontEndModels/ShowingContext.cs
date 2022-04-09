using Microsoft.EntityFrameworkCore;

namespace MovieMasterAPI.FrontEndModels
{
    public class ShowingContext : DbContext
    {
        public ShowingContext(DbContextOptions<ShowingContext> options) : base(options) { }

        public DbSet<Showing> Showing { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Showing>()
                .HasKey(m => new { m.date, m.time, m.showRoomNo, m.branchID });
        }
    }
}
