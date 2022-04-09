#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieMasterAPI.FrontEndModels;

namespace MovieMasterAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Movie_GenreController : ControllerBase
    {
        private readonly Movie_GenreContext _context;

        public Movie_GenreController(Movie_GenreContext context)
        {
            _context = context;
        }

        // GET: api/Movie_Genre
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movie_Genre>>> GetMovie_Genre()
        {
            return await _context.Movie_Genre.ToListAsync();
        }

        // GET: api/Movie_Genre/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Movie_Genre>> GetMovie_Genre(string id)
        {
            var movie_Genre = await _context.Movie_Genre.FindAsync(id);

            if (movie_Genre == null)
            {
                return NotFound();
            }

            return movie_Genre;
        }

        // PUT: api/Movie_Genre/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovie_Genre(string id, Movie_Genre movie_Genre)
        {
            if (id != movie_Genre.movieTitle)
            {
                return BadRequest();
            }

            _context.Entry(movie_Genre).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Movie_GenreExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Movie_Genre
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Movie_Genre>> PostMovie_Genre(Movie_Genre movie_Genre)
        {
            _context.Movie_Genre.Add(movie_Genre);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (Movie_GenreExists(movie_Genre.movieTitle))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMovie_Genre", new { id = movie_Genre.movieTitle }, movie_Genre);
        }

        // DELETE: api/Movie_Genre/5/5
        [HttpDelete("{keyOne}/{keyTwo}")]
        public async Task<IActionResult> DeleteMovie_Genre(string keyOne,string keyTwo)
        {
            var movie_Genre = await _context.Movie_Genre.FindAsync(keyOne,keyTwo);
            if (movie_Genre == null)
            {
                return NotFound();
            }

            _context.Movie_Genre.Remove(movie_Genre);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Movie_GenreExists(string id)
        {
            return _context.Movie_Genre.Any(e => e.movieTitle == id);
        }
    }
}
