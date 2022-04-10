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
    public class TicketsController : ControllerBase
    {
        private readonly TicketsContext _context;

        public TicketsController(TicketsContext context)
        {
            _context = context;
        }

        // GET: api/Tickets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tickets>>> GetTickets()
        {
            return await _context.Tickets.ToListAsync();
        }

        // GET: api/Tickets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tickets>> GetTickets(int id)
        {
            var tickets = await _context.Tickets.FindAsync(id);

            if (tickets == null)
            {
                return NotFound();
            }

            return tickets;
        }

        // GET: api/Tickets/5/5/5/5
        [HttpGet("{date}/{time}/{showRoomNo}/{branchID}")]
        public async Task<ActionResult<IEnumerable<Tickets>>> GetTickets(string date, string time, int showRoomNo, int branchID)
        {
          var dateParam = new SqlParameter("@date", date);
          var timeParam = new SqlParameter("@time", time);
          var showRoomNoParam = new SqlParameter("@showRoomNo", showRoomNo);
          var branchIDParam = new SqlParameter("@branchID", branchID);

          var tickets = _context.Tickets.FromSqlRaw("Execute dbo.getTickets @date, @time, @showRoomNo, @branchID", dateParam, timeParam, showRoomNoParam, branchIDParam).ToList();

          if (tickets == null)
          {
            return NotFound();
          }

          return tickets;
        }

    // PUT: api/Tickets/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
        public async Task<IActionResult> PutTickets(int id, Tickets tickets)
        {
            if (id != tickets.ticketID)
            {
                return BadRequest();
            }

            _context.Entry(tickets).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TicketsExists(id))
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

        // POST: api/Tickets
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Tickets>> PostTickets(Tickets tickets)
        {
            _context.Tickets.Add(tickets);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTickets", new { id = tickets.ticketID }, tickets);
        }

        // DELETE: api/Tickets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTickets(int id)
        {
            var tickets = await _context.Tickets.FindAsync(id);
            if (tickets == null)
            {
                return NotFound();
            }

            _context.Tickets.Remove(tickets);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TicketsExists(int id)
        {
            return _context.Tickets.Any(e => e.ticketID == id);
        }
    }
}
