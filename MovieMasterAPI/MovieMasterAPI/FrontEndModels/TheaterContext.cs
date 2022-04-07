using Microsoft.EntityFrameworkCore;

namespace MovieMasterAPI.FrontEndModels
{
    public class TheaterContext : DbContext
    {
        public TheaterContext(DbContextOptions<TheaterContext> options) : base(options) { }

        public DbSet<Theater> Theater { get; set; }
    }
}
