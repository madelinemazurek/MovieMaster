using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
    public class Customer
    {
        [Key]
        public string email { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string fName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string lName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string password { get; set; }

        [Column(TypeName = "nvarchar(3)")]
        public string cVV { get; set; }

        [Column(TypeName = "nvarchar(16)")]
        public string cardNumber { get; set; }

        // mm/dd/yyyy
        [Column(TypeName = "nvarchar(10)")]
        public string expirationDate { get; set; }


    }
}
