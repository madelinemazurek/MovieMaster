using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieMasterAPI.FrontEndModels
{
  public class Tickets
  {
    [Key]
    public int ticketID { get; set; }

    [Column(TypeName = "nvarchar(2)")]
    public string row { get; set; }

    [Column(TypeName = "nvarchar(10)")]
    public string ageRange { get; set; }

    [Column(TypeName = "double")]
    public string price { get; set; }

    [Column(TypeName = "int")]
    public int seatNo { get; set; }

    [Column(TypeName = "nvarchar(100)")]
    public string type { get; set; }

    public string buyerEmail { get; set; }

    public string date { get; set; }

    public string time { get; set; }

    public int showRoomNo { get; set; }

    public int branchID { get; set; }
  }
}
