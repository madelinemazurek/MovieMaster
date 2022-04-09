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
    public class ShowroomsController : ControllerBase
    {
        private readonly ShowroomContext _context;

        public ShowroomsController(ShowroomContext context)
        {
            _context = context;
        }

        // GET: api/Showrooms
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Showroom>>> GetShowroom()
        {
            return await _context.Showroom.ToListAsync();
        }

        // GET: api/Showrooms/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Showroom>> GetShowroom(int id)
        {
            var showroom = await _context.Showroom.FindAsync(id);

            if (showroom == null)
            {
                return NotFound();
            }

            return showroom;
        }

        // PUT: api/Showrooms/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShowroom(int id, Showroom showroom)
        {
            if (id != showroom.ShowRoomNo)
            {
                return BadRequest();
            }

            _context.Entry(showroom).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShowroomExists(id))
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

        // POST: api/Showrooms
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Showroom>> PostShowroom(Showroom showroom)
        {
            _context.Showroom.Add(showroom);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ShowroomExists(showroom.ShowRoomNo))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetShowroom", new { id = showroom.ShowRoomNo }, showroom);
        }

        // DELETE: api/Showrooms/5
        [HttpDelete("{keyOne}")]
        public async Task<IActionResult> DeleteShowroom(int keyOne)
        {
            var showroom = await _context.Showroom.FindAsync(keyOne);
            if (showroom == null)
            {
                return NotFound();
            }

            _context.Showroom.Remove(showroom);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ShowroomExists(int id)
        {
            return _context.Showroom.Any(e => e.ShowRoomNo == id);
        }
    }
}
