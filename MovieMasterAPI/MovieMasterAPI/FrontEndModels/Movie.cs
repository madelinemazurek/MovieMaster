using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
    public class Movie
    {
        [Key]
        public string title { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string runtime { get; set; }

        [Column(TypeName = "nvarchar(255)")]
        public string description { get; set; }

        [ForeignKey("AdminEmail")]
        public string adminEmail { get; set; }


    }
}
