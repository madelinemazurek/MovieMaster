using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
    public class Shows
    {

        [Required]
        [MaxLength(100)]
        public string theaterName { get; set; }
        
        [Required]
        public string movieTitle { get; set; }
    }
}
