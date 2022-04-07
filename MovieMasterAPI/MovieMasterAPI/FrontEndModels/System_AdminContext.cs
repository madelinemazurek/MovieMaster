using Microsoft.EntityFrameworkCore;

namespace MovieMasterAPI.FrontEndModels
{
    public class System_AdminContext : DbContext
    {
        public System_AdminContext(DbContextOptions<System_AdminContext> options) : base(options) { }

        public DbSet<System_Admin> System_Admin { get; set; }
    }
}
