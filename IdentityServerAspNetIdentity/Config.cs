// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityServer4.Models;
using System.Collections.Generic;

namespace IdentityServerAspNetIdentity
{
    public static class Config
    {
        public static IEnumerable<IdentityResource> IdentityResources =>
                   new IdentityResource[]
                   {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                   };

        public static IEnumerable<ApiScope> ApiScopes =>
            new ApiScope[]
            {
            };

        public static IEnumerable<Client> Clients =>
            new Client[]
            {
                // m2m client credentials flow client
                new Client
                    {
                        ClientName = "vuejs_code_client",
                        ClientId = "vuejs_code_client",
                        AccessTokenType = AccessTokenType.Reference,
                        // RequireConsent = false,
                        AccessTokenLifetime = 330,// 330 seconds, default 60 minutes
                        IdentityTokenLifetime = 300,

                        RequireClientSecret = true,
                        ClientSecrets = new Secret[]
                        {
                            new Secret("SomethingSuperSecret".Sha256())
                        },
                        AllowedGrantTypes = GrantTypes.Code,
                        RequirePkce = true,

                        AllowAccessTokensViaBrowser = true,
                        RedirectUris = new List<string>
                        {
                            "https://localhost:44363",
                            "https://localhost:44363/callback.html",
                            "https://localhost:44363/silent-renew.html"
                        },
                        PostLogoutRedirectUris = new List<string>
                        {
                            "https://localhost:44363/",
                            "https://localhost:44363"
                        },
                        AllowedCorsOrigins = new List<string>
                        {
                            "https://localhost:44363"
                        },
                        AllowedScopes = new List<string>
                        {
                            "openid",
                            "role",
                            "profile",
                            "email"
                        }
                }
            };
    }
}