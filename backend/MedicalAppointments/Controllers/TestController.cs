using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class TestController : ControllerBase
{
    [Authorize]
    [HttpGet]
    public IActionResult Test()
    {
        return Ok("Estás autenticado.");
    }

    [Authorize(Roles = "Patient")]
    [HttpGet("patient")]
    public IActionResult PatientTest()
    {
        return Ok("Tenés el rol Patient.");
    }

    [Authorize(Roles = "Admin")]
    [HttpGet("admin")]
    public IActionResult AdminTest()
    {
        return Ok("Tenés el rol Admin.");
    }
}