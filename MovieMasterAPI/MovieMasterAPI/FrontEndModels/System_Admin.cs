using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
    public class System_Admin
    {
        [Key]
        public string email { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string password { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string fName { get; set; }

        public string lName { get; set; }

        [ForeignKey("BranchID")]
        public int branchID { get; set; }

    }
}
