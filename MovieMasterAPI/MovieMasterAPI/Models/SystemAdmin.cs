using System;
using System.Collections.Generic;

namespace MovieMasterAPI.Models
{
    public partial class SystemAdmin
    {
        public SystemAdmin()
        {
            Movies = new HashSet<Movie>();
            Showings = new HashSet<Showing>();
        }

        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string Fname { get; set; } = null!;
        public string Lname { get; set; } = null!;
        public int BranchId { get; set; }

        public virtual Branch Branch { get; set; } = null!;
        public virtual ICollection<Movie> Movies { get; set; }
        public virtual ICollection<Showing> Showings { get; set; }
    }
}
