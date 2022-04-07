using Microsoft.EntityFrameworkCore;

namespace MovieMasterAPI.FrontEndModels
{
    public class BranchContext : DbContext
    {
        public BranchContext(DbContextOptions<BranchContext> options) : base(options) { }

        public DbSet<Branch> Branch { get; set; }

    }
}
