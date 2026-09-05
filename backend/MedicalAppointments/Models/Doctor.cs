public class Doctor
{
    public int Id { get; set; }

    public string Specialty { get; set; } = string.Empty;

    public string LicenseNumber { get; set; } = string.Empty;

    // Usuario asociado al médico
    public int UserId { get; set; }
    public User? User { get; set; }

    // Turnos del médico
    public ICollection<Appointment> Appointments { get; set; } = new List<Appointment>();
}