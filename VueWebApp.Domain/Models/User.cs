using System;

namespace VueWebApp.Domain.Models
{
    public class User
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public DateTime CreatedDate { get; set; }

        public byte[] TimeStamp { get; set; }
    }
}
