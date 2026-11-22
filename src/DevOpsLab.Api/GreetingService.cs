namespace DevOpsLab.Api;

public static class GreetingService
{
    public static string CreateMessage(string? name)
    {
        var recipient = string.IsNullOrWhiteSpace(name) ? "world" : name.Trim();
        return $"Hello, {recipient}!";
    }
}
