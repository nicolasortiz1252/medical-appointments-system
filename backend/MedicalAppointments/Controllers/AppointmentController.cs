using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class AppointmentController : ControllerBase
{
    private readonly AppDbContext _context;

    public AppointmentController(AppDbContext context)
    {
        _context = context;
    }

    [Authorize]
    [HttpPost]
    public IActionResult CreateAppointment(CreateAppointmentDto dto)
    {
        var patient = _context.Users
            .FirstOrDefault(u => u.Id == dto.PatientId);

        if (patient == null)
            return BadRequest("El paciente no existe.");

        if (patient.Role != "Patient")
            return BadRequest("El usuario indicado no es un paciente.");

        var doctor = _context.Doctors
            .FirstOrDefault(d => d.Id == dto.DoctorId);

        if (doctor == null)
            return BadRequest("El médico no existe.");

        var appointment = new Appointment
        {
            Date = dto.Date,
            Reason = dto.Reason,
            Status = "Pending",
            PatientId = dto.PatientId,
            DoctorId = dto.DoctorId
        };

        _context.Appointments.Add(appointment);
        _context.SaveChanges();

        return Ok(new
        {
            appointment.Id,
            appointment.Date,
            appointment.Status,
            appointment.Reason,
            appointment.PatientId,
            appointment.DoctorId
        });
    }

    [Authorize]
    [HttpGet]
    public IActionResult GetAppointments()
    {
        var appointments = _context.Appointments
            .Select(a => new
            {
                a.Id,
                a.Date,
                a.Status,
                a.Reason,
                a.PatientId,
                a.DoctorId
            })
            .ToList();

        return Ok(appointments);
    }
}