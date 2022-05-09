var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Enable CORS from our local node
builder.Services.AddCors(options =>
{
	options.AddPolicy("AllowNodeLocalhost",
		builder => builder.WithOrigins("http://localhost:4200")
		.AllowAnyMethod()
		.AllowAnyHeader()
		.AllowCredentials());
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseCors("AllowNodeLocalhost");
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}
//Disable HttpsRedirection while we hook up everything
//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
