using Microsoft.EntityFrameworkCore;

namespace MovieMasterAPI.FrontEndModels
{
    public class ShowroomContext : DbContext
    {
        public ShowroomContext(DbContextOptions<ShowroomContext> options) : base(options) { }

        public DbSet<Showroom> Showroom { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Showroom>()
                .HasKey(m => new { m.showRoomNo, m.branchID });
        }
    }
}
