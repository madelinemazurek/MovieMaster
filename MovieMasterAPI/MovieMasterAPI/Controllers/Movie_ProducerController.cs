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
    public class Movie_ProducerController : ControllerBase
    {
        private readonly Movie_ProducerContext _context;

        public Movie_ProducerController(Movie_ProducerContext context)
        {
            _context = context;
        }

        // GET: api/Movie_Producer
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movie_Producer>>> GetMovie_Producer()
        {
            return await _context.Movie_Producer.ToListAsync();
        }

        // GET: api/Movie_Producer/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Movie_Producer>> GetMovie_Producer(string id)
        {
            var movie_Producer = await _context.Movie_Producer.FindAsync(id);

            if (movie_Producer == null)
            {
                return NotFound();
            }

            return movie_Producer;
        }

        // GET: api/Movie_Producer/Search/Shrek
        [HttpGet("Search/{val}")]
        public async Task<ActionResult<IEnumerable<Movie_Producer>>> GetCast(string val)
        {
          var SearchParam = new SqlParameter("@val", val);

          var pro = _context.Movie_Producer.FromSqlRaw("Execute dbo.searchMovieProducer @val", SearchParam).ToList();

          if (pro == null)
          {
            return NotFound();
          }

          return pro;
        }

    // PUT: api/Movie_Producer/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
        public async Task<IActionResult> PutMovie_Producer(string id, Movie_Producer movie_Producer)
        {
            if (id != movie_Producer.movieTitle)
            {
                return BadRequest();
            }

            _context.Entry(movie_Producer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Movie_ProducerExists(id))
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

        // POST: api/Movie_Producer
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Movie_Producer>> PostMovie_Producer(Movie_Producer movie_Producer)
        {
            _context.Movie_Producer.Add(movie_Producer);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (Movie_ProducerExists(movie_Producer.movieTitle))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMovie_Producer", new { id = movie_Producer.movieTitle }, movie_Producer);
        }

        // DELETE: api/Movie_Producer/5/5
        [HttpDelete("{keyOne}/{keyTwo}")]
        public async Task<IActionResult> DeleteMovie_Producer(string keyOne,string keyTwo)
        {
            var movie_Producer = await _context.Movie_Producer.FindAsync(keyOne,keyTwo);
            if (movie_Producer == null)
            {
                return NotFound();
            }

            _context.Movie_Producer.Remove(movie_Producer);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Movie_ProducerExists(string id)
        {
            return _context.Movie_Producer.Any(e => e.movieTitle == id);
        }
    }
}
