using System;
using System.Collections.Generic;

namespace MovieMasterAPI.Models
{
    public partial class MovieWriter
    {
        public string MovieTitle { get; set; } = null!;
        public string WirterName { get; set; } = null!;

        public virtual Movie MovieTitleNavigation { get; set; } = null!;
    }
}
