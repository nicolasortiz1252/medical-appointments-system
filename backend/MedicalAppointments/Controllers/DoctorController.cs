using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class DoctorController : ControllerBase
{
	private readonly AppDbContext _context;

	public DoctorController(AppDbContext context)
	{
		_context = context;
	}

	[Authorize(Roles = "Admin")]
	[HttpPost]
	public IActionResult CreateDoctor(Doctor doctor)
	{
		var user = _context.Users.FirstOrDefault(u => u.Id == doctor.UserId);

		if (user == null)
			return BadRequest("El usuario no existe.");

		if (user.Role != "Doctor")
			return BadRequest("El usuario no tiene el rol Doctor.");

		_context.Doctors.Add(doctor);
		_context.SaveChanges();

		return Ok(doctor);
	}

	[Authorize]
	[HttpGet]
	public IActionResult GetDoctors()
	{
		var doctors = _context.Doctors
			.Include(d => d.User)
			.ToList();

		return Ok(doctors);
	}
}