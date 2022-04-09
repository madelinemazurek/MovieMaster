using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
    public class Showing
    {
        
        //public Showroom Showroom { get; set; }

        //[ForeignKey("BranchID")]
        //public Branch Branch { get; set; }

        [Required]
        public int BranchID { get; set; }

       // [ForeignKey("ShowRoomNo")]
        [Required]
        public int ShowRoomNo { get; set; }

       // public List<Showroom> Showrooms { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public DateTime Time { get; set; }


     //   [ForeignKey("AdminEmail")]
        //public System_Admin System_Admin { get; set; }
        public string AdminEmail { get; set; }


        [ForeignKey("MovieTitle")]
        public string MovieTitle { get; set; }

    }
}
