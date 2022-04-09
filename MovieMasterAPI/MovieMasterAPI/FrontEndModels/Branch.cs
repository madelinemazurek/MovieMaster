using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
    public class Branch
    {
        [Key]
        public int branchID { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string branchName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string address { get; set; }

        //[ForeignKey("TheaterName")]
        
        //public Theater Theater { get; set; }
        [MaxLength(100)]
        public string theaterName { get; set; }

    }
}
