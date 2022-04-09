using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
    public class Movie
    {
        [Key]
        public string Title { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string RunTime { get; set; }

        [Column(TypeName = "nvarchar(255)")]
        public string Description { get; set; }

        [ForeignKey("AdminEmail")]
        public string AdminEmail { get; set; }


    }
}
