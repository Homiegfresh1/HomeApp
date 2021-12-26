using Microsoft.AspNetCore.Mvc;

namespace HomeApp.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
