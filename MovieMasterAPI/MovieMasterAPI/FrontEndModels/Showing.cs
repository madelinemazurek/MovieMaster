using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
    public class Showing
    {
        
        [Required]
        public int branchID { get; set; }

        [Required]
        public int showRoomNo { get; set; }

        [Required]
        public string date { get; set; }

        [Required]
        public string time { get; set; }

        public string adminEmail { get; set; }

        public string movieTitle { get; set; }

    }
}
