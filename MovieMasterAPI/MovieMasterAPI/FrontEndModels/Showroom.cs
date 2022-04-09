using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
    public class Showroom
    {

        [Required]
        public int branchID { get; set; }

        [Required]
        public int showRoomNo { get; set; }

        [Column(TypeName = "int")]
        public int numberOfSeats { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string showRoomType { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string seatType { get; set; }


    }
}
