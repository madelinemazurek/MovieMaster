using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
    public class Tickets
    {
        [Key]
        public int TicketID { get; set; }

        [Column(TypeName = "nvarchar(2)")]
        public string Row { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string AgeRange { get; set; }

        [Column(TypeName = "double")]
        public double Price { get; set; }

        [Column(TypeName = "int")]
        public int SeatNo { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Type { get; set; }

        [ForeignKey("BuyerEmail")]
        public Customer Customer { get; set; }
        public string BuyerEmail { get; set; }

        public DateTime Date { get; set; }

        public DateTime Time { get; set; }


        public int ShowRoomNo { get; set; }

        public int BranchID { get; set; }
    }
}
