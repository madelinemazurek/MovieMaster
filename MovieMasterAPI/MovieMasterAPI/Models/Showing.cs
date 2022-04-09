using System;
using System.Collections.Generic;

namespace MovieMasterAPI.Models
{
    public partial class Showing
    {
        public Showing()
        {
            Tickets = new HashSet<Ticket>();
        }

        public DateTime Date { get; set; }
        public TimeSpan Time { get; set; }
        public int ShowRoomNo { get; set; }
        public int BranchId { get; set; }
        public string AdminEmail { get; set; } = null!;
        public string MovieTitle { get; set; } = null!;

        public virtual Movie MovieTitleNavigation { get; set; } = null!;
        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
