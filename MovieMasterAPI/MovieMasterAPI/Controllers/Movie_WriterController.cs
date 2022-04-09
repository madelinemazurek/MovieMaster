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
    public class Movie_WriterController : ControllerBase
    {
        private readonly Movie_WriterContext _context;

        public Movie_WriterController(Movie_WriterContext context)
        {
            _context = context;
        }

        // GET: api/Movie_Writer
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movie_Writer>>> GetMovie_Writer()
        {
            return await _context.Movie_Writer.ToListAsync();
        }

        // GET: api/Movie_Writer/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Movie_Writer>> GetMovie_Writer(string id)
        {
            var movie_Writer = await _context.Movie_Writer.FindAsync(id);

            if (movie_Writer == null)
            {
                return NotFound();
            }

            return movie_Writer;
        }

        // PUT: api/Movie_Writer/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovie_Writer(string id, Movie_Writer movie_Writer)
        {
            if (id != movie_Writer.movieTitle)
            {
                return BadRequest();
            }

            _context.Entry(movie_Writer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Movie_WriterExists(id))
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

        // POST: api/Movie_Writer
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Movie_Writer>> PostMovie_Writer(Movie_Writer movie_Writer)
        {
            _context.Movie_Writer.Add(movie_Writer);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (Movie_WriterExists(movie_Writer.movieTitle))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMovie_Writer", new { id = movie_Writer.movieTitle }, movie_Writer);
        }

        // DELETE: api/Movie_Writer/5/5
        [HttpDelete("{keyOne}/{key2}")]
        public async Task<IActionResult> DeleteMovie_Writer(string keyOne,string keyTwo)
        {
            var movie_Writer = await _context.Movie_Writer.FindAsync(keyOne,keyTwo);
            if (movie_Writer == null)
            {
                return NotFound();
            }

            _context.Movie_Writer.Remove(movie_Writer);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Movie_WriterExists(string id)
        {
            return _context.Movie_Writer.Any(e => e.movieTitle == id);
        }
    }
}
