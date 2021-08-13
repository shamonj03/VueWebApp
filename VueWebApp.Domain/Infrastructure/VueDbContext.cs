using Microsoft.EntityFrameworkCore;
using VueWebApp.Domain.Models;

namespace VueWebApp.Domain.Infrastructure
{
    public class VueDbContext : DbContext
    {
        public VueDbContext(DbContextOptions<VueDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}
