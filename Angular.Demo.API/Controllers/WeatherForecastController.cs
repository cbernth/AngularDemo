using Angular.Demo.DataContract;
using Microsoft.AspNetCore.Mvc;

namespace Angular.Demo.API.Controllers
{

	public class WeatherForecastController : ApiControllerBase
	{

		private readonly ILogger<WeatherForecastController> _logger;
		private readonly AppSettingsConfig _appSettings;

		public WeatherForecastController(ILogger<WeatherForecastController> logger, AppSettingsConfig appSettingsConfig)
		{
			_logger = logger;
			_appSettings = appSettingsConfig;
		}

		[HttpGet]
		public async Task<ActionResult<IEnumerable<WeatherForecast>>> Get()
		{
			return Ok(await WeatherForecast.GetWeatherForecastsAsync(5));
		}

	}
}