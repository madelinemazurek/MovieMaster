using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
    public class Movie_Cast
    {
        [ForeignKey("MovieTitle")]
        public Movie Movie { get; set; }

        [Required]
        public string MovieTitle { get; set; }

        [Required]
        [MaxLength(100)]
        public string CastMemberName { get; set; }


    }
 
}
