
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
    public class Movie_Genre
    {
        [Required]
        public string movieTitle { get; set; }

        [Required]
        [MaxLength(100)]
        public string genre { get; set; }


    }
}
