using System;
using System.Collections.Generic;

namespace MovieMasterAPI.Models
{
    public partial class Theater
    {
        public Theater()
        {
           Branches = new HashSet<Branch>();
        }
    
        public string Name { get; set; } = null!;

        public virtual ICollection<Branch> Branches { get; set; }
    }
}
