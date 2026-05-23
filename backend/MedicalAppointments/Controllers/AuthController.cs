using System;
using MedicalAppointments.Services;
using Microsoft.AspNetCore.Mvc;



[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly JwtService _jwtService;

    public AuthController(AppDbContext context, JwtService jwtService)
    {
        _context = context;
        _jwtService = jwtService;
    }


    [HttpPost("register")]
    public IActionResult Register(RegisterRequestDto dto)
    {
        var existingUser = _context.Users
            .FirstOrDefault(u => u.Email == dto.Email);

        if (existingUser != null)
        {
            return BadRequest("El email ya está registrado");
        }

        var user = new User
        {
            Name = dto.Name,
            Email = dto.Email,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password)
        };

        _context.Users.Add(user);

        _context.SaveChanges();

        return Ok("Usuario registrado");
    }

    [HttpPost("login")]
    public IActionResult Login(LoginRequestDto dto)
    {
        var user = _context.Users.FirstOrDefault(u => u.Email == dto.Email);

        if (user == null)
            return Unauthorized("Usuario no encontrado");

        bool ok = BCrypt.Net.BCrypt.Verify(dto.Password, user.PasswordHash);

        if (!ok)
            return Unauthorized("Password incorrecto");

        var token = _jwtService.GenerateToken(user);

        return Ok(new
        {
            token
        });
    }
}