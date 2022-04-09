using System.ComponentModel.DataAnnotations;

namespace MovieMasterAPI.FrontEndModels
{
    public class Theater
    {
        [Key]
        [MaxLength(100)]
        public string name { get; set; }

       //public List<Branch> Branches { get; set; }  

    }
}
