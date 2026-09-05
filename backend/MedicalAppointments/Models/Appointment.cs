public class Appointment
{
    public int Id { get; set; }

    public DateTime Date { get; set; }

    public string Status { get; set; } = "Pending";

    public string Reason { get; set; } = string.Empty;

    // Paciente
    public int PatientId { get; set; }
    public User? Patient { get; set; }

    // Médico
    public int DoctorId { get; set; }
    public Doctor? Doctor { get; set; }
}