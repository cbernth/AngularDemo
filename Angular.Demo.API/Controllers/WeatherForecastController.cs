using Microsoft.AspNetCore.Mvc;

namespace Angular.Demo.API.Controllers
{

	public class WeatherForecastController : ApiControllerBase
	{
		private static readonly string[] Summaries = new[]
		{
				"Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
		};

		private readonly ILogger<WeatherForecastController> _logger;
		private readonly AppSettingsConfig _appSettings;

		public WeatherForecastController(ILogger<WeatherForecastController> logger, AppSettingsConfig appSettingsConfig)
		{
			_logger = logger;
			_appSettings = appSettingsConfig;
		}

		[HttpGet]
		public IEnumerable<WeatherForecast> Get()
		{
			return Enumerable.Range(1, 5).Select(index => new WeatherForecast
			{
				Date = DateTime.Now.AddDays(index),
				TemperatureC = Random.Shared.Next(-20, 55),
				Summary = Summaries[Random.Shared.Next(Summaries.Length)]
			})
			.ToArray();
		}
	}
}