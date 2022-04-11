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
    public class SearchController : ControllerBase
    {
        private readonly ShowingContext _context;

        public SearchController(ShowingContext context)
        {
            _context = context;
        }

        // GET: api/Search/City/Calgary
        [HttpGet("City/{val}")]
        public async Task<ActionResult<IEnumerable<Showing>>> GetShowings(string val)
        {
          var SearchParam = new SqlParameter("@val", val);

          var showings = _context.Showing.FromSqlRaw("Execute dbo.searchCity @val", SearchParam).ToList();

          if (showings == null)
          {
            return NotFound();
          }

          return showings;
        }

        // GET: api/Search/Theater/Cineplex
        [HttpGet("Theater/{val}")]
        public async Task<ActionResult<IEnumerable<Showing>>> GetShowing(string val)
        {
          var SearchParam = new SqlParameter("@val", val);

          var showings = _context.Showing.FromSqlRaw("Execute dbo.searchTheater @val", SearchParam).ToList();

          if (showings == null)
          {
            return NotFound();
          }

          return showings;
        }


        private bool ShowingExists(string id)
            {
                return _context.Showing.Any(e => e.date == id);
            }
    }
}
