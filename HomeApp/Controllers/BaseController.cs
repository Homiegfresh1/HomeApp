using Microsoft.AspNetCore.Mvc;
using HomeApp.DAL;

namespace HomeApp.Web.Controllers
{
    public class BaseController : Controller
    {
        private ApplicationDbContext _context;
        public ApplicationDbContext ctx { get { return _context; } }

        public BaseController(ApplicationDbContext ctx)
        {
            _context = ctx;
        }
    }
}
