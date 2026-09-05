public class CreateAppointmentDto
{
    public DateTime Date { get; set; }

    public string Reason { get; set; } = string.Empty;

    public int PatientId { get; set; }

    public int DoctorId { get; set; }
}