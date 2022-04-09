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
    public class Movie_CastController : ControllerBase
    {
        private readonly Movie_CastContext _context;

        public Movie_CastController(Movie_CastContext context)
        {
            _context = context;
        }

        // GET: api/Movie_Cast
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movie_Cast>>> GetMovie_Cast()
        {
            return await _context.Movie_Cast.ToListAsync();
        }

        // GET: api/Movie_Cast/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Movie_Cast>> GetMovie_Cast(string id)
        {
            var movie_Cast = await _context.Movie_Cast.FindAsync(id);

            if (movie_Cast == null)
            {
                return NotFound();
            }

            return movie_Cast;
        }

        // PUT: api/Movie_Cast/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovie_Cast(string id, Movie_Cast movie_Cast)
        {
            if (id != movie_Cast.movieTitle)
            {
                return BadRequest();
            }

            _context.Entry(movie_Cast).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Movie_CastExists(id))
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

        // POST: api/Movie_Cast
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Movie_Cast>> PostMovie_Cast(Movie_Cast movie_Cast)
        {
            _context.Movie_Cast.Add(movie_Cast);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (Movie_CastExists(movie_Cast.movieTitle))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMovie_Cast", new { id = movie_Cast.movieTitle }, movie_Cast);
        }

        // DELETE: api/Movie_Cast/5/5
        [HttpDelete("{keyOne}/{keyTwo}")]
        public async Task<IActionResult> DeleteMovie_Cast(string keyOne, string keyTwo)
        {
            var movie_Cast = await _context.Movie_Cast.FindAsync(keyOne,keyTwo);
            if (movie_Cast == null)
            {
                return NotFound();
            }

            _context.Movie_Cast.Remove(movie_Cast);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Movie_CastExists(string id)
        {
            return _context.Movie_Cast.Any(e => e.movieTitle == id);
        }
    }
}
