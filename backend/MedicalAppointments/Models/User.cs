using Microsoft.EntityFrameworkCore;

[Index(nameof(Email), IsUnique = true)]
[Index(nameof(DNI), IsUnique = true)]
public class User
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string LastName { get; set; } = string.Empty;

    public DateTime BirthDate { get; set; }

    public string Address { get; set; } = string.Empty;

    public string DNI { get; set; } = string.Empty;

    public string PhoneNumber { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public string PasswordHash { get; set; } = string.Empty;

    public string Role { get; set; } = "Patient";

    public string? ProfileImageUrl { get; set; }
}