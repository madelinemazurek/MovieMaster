using System;
using System.Collections.Generic;

namespace MovieMasterAPI.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Tickets = new HashSet<Ticket>();
        }

        public string Email { get; set; } = null!;
        public string Fname { get; set; } = null!;
        public string Lname { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string Cvv { get; set; } = null!;
        public string CardNumber { get; set; } = null!;
        public string ExpirationDate { get; set; } = null!;

        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
