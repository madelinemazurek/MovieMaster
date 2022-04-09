using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
    public class System_Admin
    {
        [Key]
        public string Email { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Password { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Fname { get; set; }

        public string LName { get; set; }

        [ForeignKey("BranchID")]
        public int BranchID { get; set; }




    }
}
