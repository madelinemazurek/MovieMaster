using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
    public class Shows
    {

        [ForeignKey("TheaterName")]
        public Theater Theater { get; set; }

        [Required]
        [MaxLength(100)]
        public string TheaterName { get; set; }

        [ForeignKey("MovieTitle")]
        public Movie Movie { get; set; }   
        
        [Required]
        public string MovieTitle { get; set; }
    }
}
