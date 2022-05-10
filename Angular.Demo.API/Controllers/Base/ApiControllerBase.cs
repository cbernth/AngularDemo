using Microsoft.AspNetCore.Mvc;

namespace Angular.Demo.API.Controllers
{
	[ApiController]
	[Route("api/[controller]/[action]")]
	[Produces("application/json")]
	public class ApiControllerBase : ControllerBase
	{ }

}
