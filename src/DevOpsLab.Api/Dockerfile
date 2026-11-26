FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src
COPY src/DevOpsLab.Api/DevOpsLab.Api.csproj src/DevOpsLab.Api/

RUN --mount=type=secret,id=nuget_token \
    test -s /run/secrets/nuget_token && echo "NuGet token is successfully mounted and not empty"

RUN --mount=type=cache,target=/root/.nuget/packages \
    dotnet restore src/DevOpsLab.Api/DevOpsLab.Api.csproj

COPY src/DevOpsLab.Api/ src/DevOpsLab.Api/

RUN --mount=type=cache,target=/root/.nuget/packages \
    dotnet publish src/DevOpsLab.Api/DevOpsLab.Api.csproj -c Release -o /app/publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
ARG COMMIT_SHA
LABEL org.opencontainers.image.revision=$COMMIT_SHA
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 8080
USER $APP_UID
ENTRYPOINT ["dotnet", "DevOpsLab.Api.dll"]
