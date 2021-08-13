using Dapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using VueWebApp.Data.Logic.Users.Requests;
using VueWebApp.Data.Models;
using VueWebApp.Domain.Infrastructure;
using VueWebApp.Domain.Models;

namespace VueWebApp.Data.Logic.Users.Queries
{
    public class GetUsersRequestHandler : IRequestHandler<GetUsersRequest, IEnumerable<UserDto>>
    {
        private readonly VueDbContext context;

        public GetUsersRequestHandler(VueDbContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<UserDto>> Handle(GetUsersRequest request, CancellationToken cancellationToken)
        {
            using(var connection = context.Database.GetDbConnection())
            {
                var users = await connection.QueryAsync<User>("SELECT * FROM dbo.Users;");

                return users.Select(x => new UserDto
                {
                    Id = x.Id,
                    FirstName = x.FirstName,
                    LastName = x.LastName,
                    CreatedDate = x.CreatedDate
                });
            }
        }
    }
}
