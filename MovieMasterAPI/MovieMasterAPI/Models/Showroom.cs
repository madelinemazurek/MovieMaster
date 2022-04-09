using System;
using System.Collections.Generic;

namespace MovieMasterAPI.Models
{
    public partial class Showroom
    {
        public int ShowRoomNo { get; set; }
        public int BranchId { get; set; }
        public int NumberOfSeats { get; set; }
        public string ShowRoomType { get; set; } = null!;
        public string SeatType { get; set; } = null!;

        public virtual Branch Branch { get; set; } = null!;
    }
}
