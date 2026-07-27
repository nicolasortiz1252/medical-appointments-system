using Microsoft.EntityFrameworkCore;
using MedicalAppointments.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// JWT Service
builder.Services.AddScoped<JwtService>();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")
    ));

// 1. Agregar el servicio de CORS configurando tu puerto de Vite
builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirVite", policy =>
    {
        policy.WithOrigins("http://localhost:5173") // El puerto de tu frontend
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});


var app = builder.Build();
app.MapGet("/", () => "API funcionando");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("PermitirVite");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
