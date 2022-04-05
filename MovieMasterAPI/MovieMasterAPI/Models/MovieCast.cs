using System;
using System.Collections.Generic;

namespace MovieMasterAPI.Models
{
    public partial class MovieCast
    {
        public string MovieTitle { get; set; } = null!;
        public string CastMemberName { get; set; } = null!;

        public virtual Movie MovieTitleNavigation { get; set; } = null!;
    }
}
