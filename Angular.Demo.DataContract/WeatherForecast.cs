namespace Angular.Demo.DataContract
{
	public class WeatherForecast
	{

		private static readonly string[] Summaries = new[]
		{
				"Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
		};

		public static async Task<IEnumerable<WeatherForecast>> GetWeatherForecastsAsync(int length)
		{
			return await Task.Run(() =>
				Enumerable.Range(1, length).Select(index => new WeatherForecast
				{
					Date = DateTime.Now.AddDays(index),
					TemperatureC = Random.Shared.Next(-20, 55),
					Summary = Summaries[Random.Shared.Next(Summaries.Length)]
				}).ToArray()
			);
		}

		public DateTime Date { get; set; }

		public int TemperatureC { get; set; }

		public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

		public string? Summary { get; set; }

	}
}