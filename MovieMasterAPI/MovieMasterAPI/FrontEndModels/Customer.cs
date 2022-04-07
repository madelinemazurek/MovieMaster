using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
    public class Customer
    {
        [Key]
        public string BuyerEmail { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string FName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string LName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Password { get; set; }

        [Column(TypeName = "nvarchar(3)")]
        public string CVV { get; set; }

        [Column(TypeName = "nvarchar(16)")]
        public string FCardNumber { get; set; }

        // mm/dd/yyyy
        [Column(TypeName = "nvarchar(10)")]
        public string ExpirationDate { get; set; }


    }
}
