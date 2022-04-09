using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
    public class Movie_Writer
    {

        [Required]
        public string movieTitle { get; set; }

        [Required]
        [MaxLength(100)]
        public string writerName { get; set; }
    }
}
