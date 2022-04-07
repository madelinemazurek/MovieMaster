using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
    public class Branch
    {
        [Key]
        public int BranchID { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string BranchName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Address { get; set; }

        //[ForeignKey("TheaterName")]
        
        //public Theater Theater { get; set; }
        [MaxLength(100)]
        public string TheaterName { get; set; }

    }
}
