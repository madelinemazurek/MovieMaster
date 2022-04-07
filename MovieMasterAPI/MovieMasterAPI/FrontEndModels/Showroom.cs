using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
    public class Showroom
    {

        [ForeignKey("BranchID")]
        public Branch Branch { get; set; }

        [Required]
        public int BranchID { get; set; }

        [Required]
        public int ShowRoomNo { get; set; }

        [Column(TypeName = "int")]
        public int NumberOfSeats { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string ShowRoomType { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string SeatType { get; set; }

        //public ICollection<Showing> Showings { get; set; }


    }
}
