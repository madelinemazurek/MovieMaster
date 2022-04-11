#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using MovieMasterAPI.FrontEndModels;

namespace MovieMasterAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Movie_DirectorController : ControllerBase
    {
        private readonly Movie_DirectorContext _context;

        public Movie_DirectorController(Movie_DirectorContext context)
        {
            _context = context;
        }

        // GET: api/Movie_Director
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movie_Director>>> GetMovie_Director()
        {
            return await _context.Movie_Director.ToListAsync();
        }

        // GET: api/Movie_Director/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Movie_Director>> GetMovie_Director(string id)
        {
            var movie_Director = await _context.Movie_Director.FindAsync(id);

            if (movie_Director == null)
            {
                return NotFound();
            }

            return movie_Director;
        }

        // GET: api/Movie_Director/Search/Shrek
        [HttpGet("Search/{val}")]
        public async Task<ActionResult<IEnumerable<Movie_Director>>> GetCast(string val)
        {
          var SearchParam = new SqlParameter("@val", val);

          var dir = _context.Movie_Director.FromSqlRaw("Execute dbo.searchMovieDirector @val", SearchParam).ToList();

          if (dir == null)
          {
            return NotFound();
          }

          return dir;
        }


    // PUT: api/Movie_Director/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
        public async Task<IActionResult> PutMovie_Director(string id, Movie_Director movie_Director)
        {
            if (id != movie_Director.movieTitle)
            {
                return BadRequest();
            }

            _context.Entry(movie_Director).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Movie_DirectorExists(id))
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

        // POST: api/Movie_Director
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Movie_Director>> PostMovie_Director(Movie_Director movie_Director)
        {
            _context.Movie_Director.Add(movie_Director);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (Movie_DirectorExists(movie_Director.movieTitle))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMovie_Director", new { id = movie_Director.movieTitle }, movie_Director);
        }

        // DELETE: api/Movie_Director/5
        [HttpDelete("{keyOne}/{keyTwo}")]
        public async Task<IActionResult> DeleteMovie_Director(string keyOne,string keyTwo)
        {
            var movie_Director = await _context.Movie_Director.FindAsync(keyOne, keyTwo);
            if (movie_Director == null)
            {
                return NotFound();
            }

            _context.Movie_Director.Remove(movie_Director);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Movie_DirectorExists(string id)
        {
            return _context.Movie_Director.Any(e => e.movieTitle == id);
        }
    }
}
