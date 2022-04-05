using System;
using System.Collections.Generic;

namespace MovieMasterAPI.Models
{
    public partial class MovieDirector
    {
        public string MovieTitle { get; set; } = null!;
        public string DirectorName { get; set; } = null!;

        public virtual Movie MovieTitleNavigation { get; set; } = null!;
    }
}
