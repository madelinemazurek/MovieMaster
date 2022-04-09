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
    public class ShowsController : ControllerBase
    {
        private readonly ShowsContext _context;

        public ShowsController(ShowsContext context)
        {
            _context = context;
        }

        // GET: api/Shows
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Shows>>> GetShows()
        {
            return await _context.Shows.ToListAsync();
        }

        // GET: api/Shows/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Shows>> GetShows(string id)
        {
            var shows = await _context.Shows.FindAsync(id);

            if (shows == null)
            {
                return NotFound();
            }

            return shows;
        }

        // PUT: api/Shows/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShows(string id, Shows shows)
        {
            if (id != shows.theaterName)
            {
                return BadRequest();
            }

            _context.Entry(shows).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShowsExists(id))
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

        // POST: api/Shows
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Shows>> PostShows(Shows shows)
        {
            _context.Shows.Add(shows);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ShowsExists(shows.theaterName))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetShows", new { id = shows.theaterName }, shows);
        }

        // DELETE: api/Shows/5/5
        [HttpDelete("{keyOne}/{keyTwo}")]
        public async Task<IActionResult> DeleteShows(string keyOne,string keyTwo)
        {
            var shows = await _context.Shows.FindAsync(keyOne,keyTwo);
            if (shows == null)
            {
                return NotFound();
            }

            _context.Shows.Remove(shows);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ShowsExists(string id)
        {
            return _context.Shows.Any(e => e.theaterName == id);
        }
    }
}
