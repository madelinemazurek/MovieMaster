using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
    public class Movie_Producer
    {
        [ForeignKey("MovieTitle")]
        public Movie Movie { get; set; }

        [Required]
        public string MovieTitle { get; set; }

        [Required]
        [MaxLength(100)]
        public string ProducerName { get; set; }
    }
}
