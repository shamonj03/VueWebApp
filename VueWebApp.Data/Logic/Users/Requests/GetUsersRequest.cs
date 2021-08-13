using MediatR;
using System.Collections.Generic;
using VueWebApp.Data.Models;

namespace VueWebApp.Data.Logic.Users.Requests
{
    public class GetUsersRequest : IRequest<IEnumerable<UserDto>>
    {
    }
}
