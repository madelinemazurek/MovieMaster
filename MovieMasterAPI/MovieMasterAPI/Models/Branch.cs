using System;
using System.Collections.Generic;

namespace MovieMasterAPI.Models
{
    public partial class Branch
    {
        public Branch()
        {
            Showrooms = new HashSet<Showroom>();
            SystemAdmins = new HashSet<SystemAdmin>();
        }

        public int BranchId { get; set; }
        public string BranchName { get; set; } = null!;
        public string Address { get; set; } = null!;
        public string TheaterName { get; set; } = null!;

        public virtual Theater TheaterNameNavigation { get; set; } = null!;
        public virtual ICollection<Showroom> Showrooms { get; set; }
        public virtual ICollection<SystemAdmin> SystemAdmins { get; set; }
    }
}
