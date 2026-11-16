using DevOpsLab.Api;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/health", () => Results.Ok(new { status = "healthy" }));
app.MapGet("/greet", (string? name) => Results.Ok(new { message = GreetingService.CreateMessage(name) }));

app.Run();
