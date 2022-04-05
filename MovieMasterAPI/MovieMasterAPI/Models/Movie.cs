using System;
using System.Collections.Generic;

namespace MovieMasterAPI.Models
{
    public partial class Movie
    {
        public Movie()
        {
            MovieCasts = new HashSet<MovieCast>();
            MovieDirectors = new HashSet<MovieDirector>();
            MovieGenres = new HashSet<MovieGenre>();
            MovieProducers = new HashSet<MovieProducer>();
            MovieWriters = new HashSet<MovieWriter>();
            Showings = new HashSet<Showing>();
        }

        public string Title { get; set; } = null!;
        public TimeSpan RunTime { get; set; }
        public string Description { get; set; } = null!;
        public string AdminEmail { get; set; } = null!;

        public virtual SystemAdmin AdminEmailNavigation { get; set; } = null!;
        public virtual ICollection<MovieCast> MovieCasts { get; set; }
        public virtual ICollection<MovieDirector> MovieDirectors { get; set; }
        public virtual ICollection<MovieGenre> MovieGenres { get; set; }
        public virtual ICollection<MovieProducer> MovieProducers { get; set; }
        public virtual ICollection<MovieWriter> MovieWriters { get; set; }
        public virtual ICollection<Showing> Showings { get; set; }
    }
}
