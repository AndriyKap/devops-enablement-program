FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /src

COPY src/DevOpsLab.Api/DevOpsLab.Api.csproj src/DevOpsLab.Api/
RUN dotnet restore src/DevOpsLab.Api/DevOpsLab.Api.csproj


COPY src/DevOpsLab.Api/ src/DevOpsLab.Api/
RUN dotnet publish src/DevOpsLab.Api/DevOpsLab.Api.csproj -c Release -o /app/publish --no-restore


FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app

COPY --from=build /app/publish .

EXPOSE 8080
USER $APP_UID
ENTRYPOINT ["dotnet", "DevOpsLab.Api.dll"]
