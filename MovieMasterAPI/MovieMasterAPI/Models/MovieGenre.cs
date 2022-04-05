using System;
using System.Collections.Generic;

namespace MovieMasterAPI.Models
{
    public partial class MovieGenre
    {
        public string MovieTitle { get; set; } = null!;
        public string Genre { get; set; } = null!;

        public virtual Movie MovieTitleNavigation { get; set; } = null!;
    }
}
