using System;
using System.Collections.Generic;

namespace MovieMasterAPI.Models
{
    public partial class Ticket
    {
        public int TicketId { get; set; }
        public string Row { get; set; } = null!;
        public string AgeRange { get; set; } = null!;
        public double Price { get; set; }
        public int SeatNo { get; set; }
        public string Type { get; set; } = null!;
        public string? BuyerEmail { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan Time { get; set; }
        public int ShowRoomNo { get; set; }
        public int BranchId { get; set; }

        public virtual Customer? BuyerEmailNavigation { get; set; }
        public virtual Showing Showing { get; set; } = null!;
    }
}
