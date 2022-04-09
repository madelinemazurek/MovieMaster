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
    public class ShowingsController : ControllerBase
    {
        private readonly ShowingContext _context;

        public ShowingsController(ShowingContext context)
        {
            _context = context;
        }

        // GET: api/Showings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Showing>>> GetShowing()
        {
            return await _context.Showing.ToListAsync();
        }

        // GET: api/Showings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Showing>> GetShowing(string id)
        {
            var showing = await _context.Showing.FindAsync(id);

            if (showing == null)
            {
                return NotFound();
            }

            return showing;
        }

        // PUT: api/Showings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShowing(string id, Showing showing)
        {
            if (id != showing.Date)
            {
                return BadRequest();
            }

            _context.Entry(showing).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShowingExists(id))
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

        // POST: api/Showings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Showing>> PostShowing(Showing showing)
        {
            _context.Showing.Add(showing);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ShowingExists(showing.Date))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetShowing", new { id = showing.Date }, showing);
        }

        // DELETE: api/Showings/5
        [HttpDelete("{keyOne}/{keyTwo}/{keyThree}/{keyFour}")]
        public async Task<IActionResult> DeleteShowing(string keyOne, string keyTwo, int keyThree, int keyFour)
        {
            var showing = await _context.Showing.FindAsync(keyOne,keyTwo,keyThree,keyFour);
            if (showing == null)
            {
                return NotFound();
            }

            _context.Showing.Remove(showing);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ShowingExists(string id)
        {
            return _context.Showing.Any(e => e.Date == id);
        }
    }
}
