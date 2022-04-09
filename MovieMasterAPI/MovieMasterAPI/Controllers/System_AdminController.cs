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
    public class System_AdminController : ControllerBase
    {
        private readonly System_AdminContext _context;

        public System_AdminController(System_AdminContext context)
        {
            _context = context;
        }

        // GET: api/System_Admin
        [HttpGet]
        public async Task<ActionResult<IEnumerable<System_Admin>>> GetSystem_Admin()
        {
            return await _context.System_Admin.ToListAsync();
        }

        // GET: api/System_Admin/5
        [HttpGet("{id}")]
        public async Task<ActionResult<System_Admin>> GetSystem_Admin(string id)
        {
            var system_Admin = await _context.System_Admin.FindAsync(id);

            if (system_Admin == null)
            {
                return NotFound();
            }

            return system_Admin;
        }

        // PUT: api/System_Admin/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSystem_Admin(string id, System_Admin system_Admin)
        {
            if (id != system_Admin.Email)
            {
                return BadRequest();
            }

            _context.Entry(system_Admin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!System_AdminExists(id))
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

        // POST: api/System_Admin
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<System_Admin>> PostSystem_Admin(System_Admin system_Admin)
        {
            _context.System_Admin.Add(system_Admin);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (System_AdminExists(system_Admin.Email))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSystem_Admin", new { id = system_Admin.Email }, system_Admin);
        }

        // DELETE: api/System_Admin/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSystem_Admin(string id)
        {
            var system_Admin = await _context.System_Admin.FindAsync(id);
            if (system_Admin == null)
            {
                return NotFound();
            }

            _context.System_Admin.Remove(system_Admin);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool System_AdminExists(string id)
        {
            return _context.System_Admin.Any(e => e.Email == id);
        }
    }
}
