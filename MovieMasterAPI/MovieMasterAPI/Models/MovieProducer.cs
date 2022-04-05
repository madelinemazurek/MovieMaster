using System;
using System.Collections.Generic;

namespace MovieMasterAPI.Models
{
    public partial class MovieProducer
    {
        public string MovieTitle { get; set; } = null!;
        public string ProducerName { get; set; } = null!;

        public virtual Movie MovieTitleNavigation { get; set; } = null!;
    }
}
